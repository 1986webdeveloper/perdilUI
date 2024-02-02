/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useState } from 'react';
import { Platform } from 'react-native';
import {
  StyledImage,
  StyledSafeAreaView,
  StyledScrollView,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';

/**
 * This component is used to group the Select button and its associated options.
 */

const Select = ({ onSelect, children }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [openSelectMenu, setOpenSelectMenu] = useState(false);

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      selectedItem,
      setSelectedItem,
      onSelect,
      openSelectMenu,
      setOpenSelectMenu,
    }),
  );

  const onPress = () => {
    if (onSelect) {
      onSelect(selectedItem);
    }
    setOpenSelectMenu(!openSelectMenu);
  };

  return (
    <StyledSafeAreaView className={styles.selectContainer}>
      <StyledTouchableOpacity onPress={onPress} className={styles.selectButton}>
        <StyledText className={styles.selectItemText}>
          {selectedItem || 'Select Item'}
        </StyledText>
        <StyledView className={styles.selectIconContainer}>
          <StyledImage source={Images.dropdown} className={styles.selectIcon} />
        </StyledView>
      </StyledTouchableOpacity>
      {openSelectMenu && (
        <StyledScrollView className={styles.selectMenuContainer}>
          {childrenWithProps}
        </StyledScrollView>
      )}
    </StyledSafeAreaView>
  );
};

const styles = {
  selectContainer: Platform.OS === 'android' ? 'shadow' : 'z-[99999]',
  selectButton:
    'relative min-h-[38px] flex-row items-center justify-between w-full py-3 pl-3 pr-10 text-left bg-white border rounded-md shadow-sm border-gray-300',
  selectItemText: 'truncate text-base text-black',
  selectIconContainer: 'absolute inset-y-0 right-0 flex-row items-center pr-2',
  selectIcon: 'w-6 h-6 opacity-60',
  selectMenuContainer:
    'absolute z-50 top-12 max-h-60 w-full bg-white border border-gray-300 rounded-md py-1 mt-1 bg-white shadow-md',
};

export default Select;
