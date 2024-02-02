/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  StyledPressable,
  StyledText,
  StyledView,
} from '../../StyledComponentsContstants';

/**
 * Radio button for using radio button functionality.
 */

const Radio = ({
  title = 'Radio Button Title',
  description = 'Radio Button Description',
  ...radioGroupProps
}) => {
  const onPress = () => {
    if (radioGroupProps?.onSelect) {
      radioGroupProps?.onSelect(title);
    }
    radioGroupProps?.setSelectedItem(title);
  };

  return (
    <StyledPressable onPress={onPress} className={styles.radioContainer}>
      <StyledView
        className={`${styles.radioButton} ${
          radioGroupProps?.selectedItem === title ? 'bg-black' : ''
        }`}>
        {radioGroupProps?.selectedItem === title && (
          <StyledView className={styles.radioButtonWhiteDot} />
        )}
      </StyledView>
      <StyledView className={styles.radioButtonContent}>
        <StyledText className={styles.radioTitle}>{title}</StyledText>
        <StyledText className={styles.radioDescription}>
          {description}
        </StyledText>
      </StyledView>
    </StyledPressable>
  );
};

const styles = {
  radioContainer:
    'flex-row my-1 items-start p-5 space-x-3 bg-white border rounded-md shadow-sm border-gray-300',
  radioButton:
    'h-5 w-5 border rounded-full items-center justify-center translate-y-px',
  radioButtonWhiteDot: 'h-2 w-2 bg-white rounded-full',
  radioButtonContent:
    'relative flex flex-col text-left space-y-1.5 leading-none',
  radioTitle: 'font-semibold text-black',
  radioDescription: 'text-base opacity-50 text-black',
};

export default Radio;
