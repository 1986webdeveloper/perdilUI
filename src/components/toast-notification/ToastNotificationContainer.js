/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { LayoutAnimation, Platform } from 'react-native';
import { StyledKeyboardAvoidingView } from '../../StyledComponentsContstants';
import ToastNotification from './ToastNotification';

const ToastNotificationContainer = forwardRef((_props, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return {show, update, hide, hideAll, isOpen};
    },
    [show, update, hide, hideAll, isOpen],
  );

  const [toasts, setToasts] = useState([]);

  let topStyle = '';
  let bottomStyle = '';

  const show = (message, toastOptions) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    let id = toastOptions?.id || Math.random().toString();
    const onDestroy = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      toastOptions?.onClose && toastOptions?.onClose();
      setToasts(prevToasts => prevToasts.filter(t => t.id !== id).slice(0, 3));
    };

    requestAnimationFrame(() => {
      if (toastOptions?.position && toastOptions?.position === 'bottom') {
        bottomStyle = toastOptions?.style;
      } else {
        topStyle = toastOptions?.style;
      }
      setToasts(prevToasts =>
        [
          {
            id,
            onDestroy,
            message,
            open: true,
            duration: 2000,
            type: toastOptions?.type,
            position: toastOptions?.position,
            description: toastOptions?.description,
            style: toastOptions?.style,
            onHide: () => hide(id),
            customComponent: toastOptions?.customComponent,
          },
          ...prevToasts.filter(t => t.open),
        ].slice(0, 3),
      );
    });

    return id;
  };

  const update = (id, message, toastOptions) => {
    setToasts(prevToasts =>
      prevToasts.map(toast =>
        toast.id === id ? {...toast, message, ...toastOptions} : toast,
      ),
    );
  };

  const hide = id => {
    setToasts(prevToasts =>
      prevToasts.map(t => (t.id === id ? {...t, open: false} : t)),
    );
  };

  const hideAll = () => {
    setToasts(prevToasts => prevToasts.map(t => ({...t, open: false})));
  };

  const isOpen = id => {
    return toasts.some(t => t.id === id && t.open);
  };

  const renderTopToasts = () => {
    return (
      <StyledKeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        className={`absolute self-center items-center top-0 mt-4 ${
          Platform.OS === 'android' ? 'shadow' : 'z-[9999999999]'
        } ${topStyle}`}
        pointerEvents="box-none">
        {toasts
          .filter(t => !t.position || t.position === 'top')
          .map(toast => (
            <ToastNotification key={toast.id} {...toast} />
          ))}
      </StyledKeyboardAvoidingView>
    );
  };

  const renderBottomToasts = () => {
    return (
      <StyledKeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        className={`absolute self-center items-center bottom-0 mb-4 ${
          Platform.OS === 'android' ? 'shadow' : 'z-[9999999999]'
        } ${bottomStyle}`}
        pointerEvents="box-none">
        {toasts
          .filter(t => t.position === 'bottom')
          .reverse()
          .map(toast => (
            <ToastNotification key={toast.id} {...toast} />
          ))}
      </StyledKeyboardAvoidingView>
    );
  };

  return (
    <>
      {renderTopToasts()}
      {renderBottomToasts()}
    </>
  );
});

export default ToastNotificationContainer;
