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
  StyledView,
} from '../../StyledComponentsContstants';

/**
 * A component for adding items to the dropdown menu.
 * It should be used within a `DropDownMenuSection`.
 */

const DropDownMenuItem = ({
  title = 'Dropdown menu item title',
  onPress,
  leftIcon,
  rightIcon,
  titleClassName = '',
  disabled = false,
  innerMenu,
  pressable = true,
  ...dropdownSectionProps
}) => {
  const handlePress = e => {
    if (onPress) {
      onPress({...e, title: title});
    }
    if (dropdownSectionProps?.setInnerMenuVisible) {
      dropdownSectionProps?.setInnerMenuVisible(
        dropdownSectionProps?.innerMenuVisible === title ? null : title,
      );
    }
  };

  return (
    <StyledView className={`${styles.dropdownMenuItemContainer} ${disabled && 'opacity-50'}`}>
      <StyledTouchableOpacity
        onPress={handlePress}
        disabled={!pressable || disabled}
        className={styles.dropdownMenuItemButton}>
        <StyledView className={styles.leftIconContainer}>
          {React.isValidElement(leftIcon)
            ? leftIcon
            : leftIcon && (
                <StyledImage source={leftIcon} className={styles.icon} />
              )}
          <StyledText className={`${styles.title} ${titleClassName}`}>
            {title}
          </StyledText>
        </StyledView>
        {React.isValidElement(rightIcon)
          ? rightIcon
          : rightIcon && (
              <StyledImage source={rightIcon} className={styles.icon} />
            )}
      </StyledTouchableOpacity>
      <StyledView>
        {dropdownSectionProps?.innerMenuVisible === title && (
          <StyledView className={styles.innerMenuContainer}>
            {innerMenu}
          </StyledView>
        )}
      </StyledView>
    </StyledView>
  );
};

const styles = {
  dropdownMenuItemContainer: 'flex-row visible',
  dropdownMenuItemButton:
    'flex-row visible justify-between items-center rounded px-2 py-1.5 w-full',
  leftIconContainer: 'flex-row items-center space-x-2 px-2',
  title: 'text-neutral-700 text-base',
  icon: 'w-4 h-4',
  innerMenuContainer:
    'absolute -translate-x-1 z-[9999] min-w-[8rem] text-neutral-800 rounded-md border border-neutral-200/70 bg-white shadow-md top-0 left-0',
};

export default DropDownMenuItem;
