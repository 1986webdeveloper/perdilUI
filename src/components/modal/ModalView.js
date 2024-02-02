import React, { useState } from 'react';
import {
  StyledSafeAreaView,
  StyledText,
  StyledTouchableOpacity,
} from '../../StyledComponentsContstants';
import Modal from './Modal';

const ModalView = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <StyledSafeAreaView className="h-full items-center justify-center">
      <StyledTouchableOpacity
        onPress={toggleModal}
        className="inline-flex items-center justify-center h-10 px-4 py-2 bg-white border border-neutral-300 rounded-md">
        <StyledText className="text-base text-black font-medium transition-colors">
          Open
        </StyledText>
      </StyledTouchableOpacity>
      <Modal
        visible={modalVisible}
        setVisible={setModalVisible}
        title={'Modal Title'}
        content={'This is placeholder text. Replace it with your own content.'}
      />
    </StyledSafeAreaView>
  );
};

export default ModalView;
