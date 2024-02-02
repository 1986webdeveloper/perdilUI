/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  StyledText,
  StyledTouchableOpacity,
} from '../../StyledComponentsContstants';

/**
 * A component for adding items to the navigation menu.
 */

const NavigationMenuItem = ({
  title = 'Navigation Item Title',
  description = 'Navigation Item Description',
  onPressItem,
  disabled,
}) => {
  const onPress = e => {
    if (onPressItem) {
      onPressItem({...e, title: title});
    }
  };

  return (
    <StyledTouchableOpacity
      onPress={onPress}
      className={`${styles.container} ${disabled && 'opacity-50'}`}>
      <StyledText className={styles.menuItemTitle}>{title}</StyledText>
      <StyledText className={styles.menuItemDescription}>
        {description}
      </StyledText>
    </StyledTouchableOpacity>
  );
};

const styles = {
  container: 'px-3.5 py-3 rounded w-72',
  menuItemTitle: 'mb-1 font-medium text-black text-sm',
  menuItemDescription: 'font-light leading-5 text-black opacity-50 text-sm',
  rightIcon: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
  dotIcon: 'absolute left-2 flex h-2 w-2 items-center justify-center',
};

export default NavigationMenuItem;
