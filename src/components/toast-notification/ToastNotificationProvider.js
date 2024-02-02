/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import ToastNotificationContainer from './ToastNotificationContainer';

/**
 * This component is wraps the whole application and provides a context for the toast notifications.
 */

export let GlobalToast;

const ToastContext = createContext();

const ToastNotificationProvider = ({children, ...props}) => {
  const toastRef = useRef(null);
  const [refState, setRefState] = useState({});

  useEffect(() => {
    setRefState(toastRef.current);
    GlobalToast = toastRef.current;
  }, []);

  return (
    <ToastContext.Provider value={{refState, Toast: toastRef.current}}>
      {children}
      <ToastNotificationContainer ref={toastRef} />
    </ToastContext.Provider>
  );
};

/**
 * This hook is used for showing & hiding toast is containes `show()`, `update()`, `hide()`, `hideAll()`, `isOpen()`
 */

export const useToast = () => useContext(ToastContext);

export default ToastNotificationProvider;
