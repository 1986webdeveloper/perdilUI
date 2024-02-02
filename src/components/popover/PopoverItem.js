/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  StyledText,
  StyledTextInput,
  StyledView,
} from '../../StyledComponentsContstants';

/**
 * A component for adding items to the popover menu.
 */

const PopoverItem = ({title, value, onChangeText, ...popoverProps}) => {
  return (
    <StyledView className={styles.container}>
      <StyledText className={styles.popoverTitle}>{title}</StyledText>
      <StyledTextInput
        autoFocus={popoverProps?.focused}
        selectTextOnFocus={true}
        value={value}
        onChangeText={onChangeText}
        className={styles.inputContainer}
      />
    </StyledView>
  );
};

const styles = {
  container: 'flex-row w-full items-center gap-4',
  popoverTitle: 'text-black w-1/3 text-sm font-medium',
  inputContainer:
    'flex-1 h-8 px-3 py-0 text-sm bg-white border border-neutral-200/70 rounded-md leading-4',
};

export default PopoverItem;
