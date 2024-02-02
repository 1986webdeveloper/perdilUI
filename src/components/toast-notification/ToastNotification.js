/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useEffect, useRef } from 'react';
import {
  StyledImage,
  StyledText,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';

const ToastNotification = ({
  open,
  message = 'Toast Message',
  description = 'Toast Description',
  position,
  onDestroy,
  type,
  customComponent,
  duration = 2000,
}) => {
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    if (duration !== 0 && typeof duration === 'number') {
      closeTimeoutRef.current = setTimeout(() => {
        onDestroy();
      }, duration);
    }

    return () => {
      closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
    };
  }, [duration]);

  useEffect(() => {
    if (!open) {
      closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
      onDestroy();
    }
  }, [open]);

  return (
    <StyledView
      className={`shadow-[0_5px_15px_-3px_xrgb(0_0_0_/_0.08)] bg-white border border-gray-100 p-4 rounded-[5px] ${
        position === 'bottom' ? 'mt-2' : 'mb-2'
      }`}>
      {customComponent ? (
        customComponent
      ) : (
        <StyledView>
          <StyledView className="flex-row items-center space-x-1">
            {type === 'success' && (
              <StyledImage
                source={Images.toastSuccess}
                className="w-[18px] h-[18px]"
              />
            )}
            {type === 'info' && (
              <StyledImage
                source={Images.toastInfo}
                className="w-[18px] h-[18px]"
              />
            )}
            {type === 'warning' && (
              <StyledImage
                source={Images.toastWarning}
                className="w-[18px] h-[18px]"
              />
            )}
            {type === 'danger' && (
              <StyledImage
                source={Images.toastDanger}
                className="w-[18px] h-[18px]"
              />
            )}
            <StyledText className="text-[13px] font-medium leading-none text-gray-800">
              {message}
            </StyledText>
          </StyledView>
          {description && (
            <StyledText className="mt-1.5 text-sm text-black leading-none opacity-70">
              {description}
            </StyledText>
          )}
        </StyledView>
      )}
    </StyledView>
  );
};

export default ToastNotification;
