/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { StyledModal, StyledView } from '../../StyledComponentsContstants';

/**
 * This component is used to display content that slides in from the side of the screen.
 */

const SlideOver = ({visible, setVisible, children}) => {
  return (
    <StyledModal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <StyledView className={styles.overlay} />
      </TouchableWithoutFeedback>

      <StyledView className={styles.modalContainer}>{children}</StyledView>
    </StyledModal>
  );
};

const styles = {
  overlay: 'absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50',
  modalContainer: 'absolute h-full bg-white w-2/3 top-0 bottom-0 right-0',
};

export default SlideOver;
