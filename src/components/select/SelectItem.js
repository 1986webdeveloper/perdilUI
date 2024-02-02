/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  StyledImage,
  StyledText,
  StyledTouchableOpacity,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';

/**
 * This component is represents an individual option within the `Select` menu.
 */

const SelectItem = ({title = 'Select Item Title', ...selectProps}) => {
  const onPress = () => {
    selectProps?.setSelectedItem(title);
    selectProps?.setOpenSelectMenu(false);
  };

  return (
    <StyledTouchableOpacity
      onPress={onPress}
      className={styles.selectItemContainer}>
      {selectProps?.selectedItem === title && (
        <StyledImage source={Images.right} className={styles.tickLogo} />
      )}
      <StyledText className={styles.selectItemTitle}>{title}</StyledText>
    </StyledTouchableOpacity>
  );
};

const styles = {
  selectItemContainer: 'flex-row items-center py-2 pl-8 text-gray-700',
  selectItemTitle: 'block text-base text-black truncate',
  tickLogo: 'absolute left-0 w-4 h-4 ml-2 opacity-40',
};

export default SelectItem;
