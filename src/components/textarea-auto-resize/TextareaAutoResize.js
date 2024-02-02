/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useState } from 'react';
import { PanResponder } from 'react-native';
import { StyledTextInput, StyledView } from '../../StyledComponentsContstants';

/**
 * This component is automatically adjusts its height when the user drags to resize.
 */

const TextareaAutoResize = ({
  value,
  onChangeText,
  height = 50,
  placeholder = 'Type your text',
  ...textinputProps
}) => {
  const [textAreaHeight, setTextAreaHeight] = useState(height);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      if (gesture.dy + height <= height) {
        setTextAreaHeight(80);
      } else {
        setTextAreaHeight(height + gesture.dy);
      }
    },
  });

  return (
    <StyledView
      className={`${styles.draggableView} h-[${textAreaHeight}px]`}
      {...panResponder.panHandlers}>
      <StyledTextInput
        multiline
        value={value}
        onChangeText={onChangeText}
        className={styles.textinput}
        placeholder={placeholder}
        {...textinputProps}
      />
    </StyledView>
  );
};

const styles = {
  draggableView: 'border bg-white border-neutral-300 rounded-md pb-2',
  textinput: 'text-sm w-full h-full px-0 text-start',
};

export default TextareaAutoResize;
