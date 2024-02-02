/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  StyledImage,
  StyledModal,
  StyledPressable,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';

/**
 * This component can be used to show and hide content in a modal format.
 */

const Modal = ({
  title = 'Modal heading',
  content = 'Modal description',
  visible,
  setVisible,
}) => {
  return (
    <StyledModal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <StyledPressable
        className={styles.overlay}
        onPress={() => setVisible(false)}
      />
      <StyledView className={styles.modalContainer}>
        <StyledView className={styles.modalBackground}>
          <StyledView className={styles.modalTitleAndCloseContainer}>
            <StyledText className={styles.modalTitle}>{title}</StyledText>
            <StyledTouchableOpacity onPress={() => setVisible(false)}>
              <StyledImage
                source={Images.cancel}
                className={styles.closeButton}
              />
            </StyledTouchableOpacity>
          </StyledView>
          <StyledView>
            <StyledText className={styles.content}>{content}</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledModal>
  );
};

const styles = {
  overlay: 'absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50',
  modalContainer: 'h-full items-center justify-center',
  modalBackground: 'bg-white p-5 rounded-lg',
  modalTitleAndCloseContainer: 'flex-row justify-between mb-3',
  modalTitle: 'text-lg font-semibold text-black',
  closeButton: 'w-4 h-4',
  content: 'text-black',
};

export default Modal;
