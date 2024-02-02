/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { StyledModal } from '../../StyledComponentsContstants';

/**
 * This component can be used to display a full-screen modal.
 * It provides a user-friendly interface to present content in an overlay that covers the entire screen.
 */

const FullScreenModal = ({visible, onDismiss, children}) => {
  return (
    <StyledModal
      visible={visible}
      animationType="fade"
      onRequestClose={onDismiss}
      onDismiss={onDismiss}>
      {children}
    </StyledModal>
  );
};

export default FullScreenModal;
