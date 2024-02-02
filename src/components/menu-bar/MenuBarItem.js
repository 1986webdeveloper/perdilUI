/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useState } from 'react';
import {
  StyledImage,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';

/**
 * A component for menu bar item.
 */

const MenuBarItem = ({
  title = 'Menu bar item title',
  rightIcon,
  onPressItem,
  innerMenu,
  disabled,
  defaultSelected,
  titleClassName,
  containerClass,
  ...menuBarSectionProps
}) => {
  const [selectedItem, setSelectedItem] = useState(defaultSelected || false);
  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });

  const onPress = e => {
    if (onPressItem) {
      onPressItem({...e, title: title});
    }
    if (innerMenu) {
      menuBarSectionProps?.setSelectedInnerMenuItem(
        menuBarSectionProps?.selectedInnerMenuItem === title ? null : title,
      );
    }
    if (menuBarSectionProps?.multipleSelection) {
      menuBarSectionProps?.selection && setSelectedItem(!selectedItem);
    } else {
      menuBarSectionProps?.selection &&
        menuBarSectionProps?.setSelected(
          menuBarSectionProps?.selected === title ? null : title,
        );
    }
  };

  return (
    <StyledTouchableOpacity
      onPress={onPress}
      onLayout={e =>
        setSize({
          height: e.nativeEvent.layout.height,
          width: e.nativeEvent.layout.width,
        })
      }
      className={`${styles.container} ${
        menuBarSectionProps?.selection && 'flex-row, pl-8'
      } ${disabled && 'opacity-50'} ${containerClass}`}>
      <>
        {menuBarSectionProps?.multipleSelection
          ? menuBarSectionProps?.selection &&
            selectedItem && (
              <StyledImage source={Images.right} className={styles.rightIcon} />
            )
          : menuBarSectionProps?.selection &&
            menuBarSectionProps?.selected === title && (
              <StyledImage source={Images.dot} className={styles.dotIcon} />
            )}
        <StyledText className={`${styles.menuItemTitle} ${titleClassName}`}>
          {title}
        </StyledText>
      </>
      {React.isValidElement(rightIcon)
        ? rightIcon
        : rightIcon && (
            <StyledImage source={rightIcon} className={styles.icon} />
          )}
      {menuBarSectionProps?.selectedInnerMenuItem === title && (
        <StyledView
          className={`${styles.innerMenuContainer} w-[${size?.width}px] left-[${
            menuBarSectionProps?.width || size?.width
          }px]`}>
          {innerMenu}
        </StyledView>
      )}
    </StyledTouchableOpacity>
  );
};

const styles = {
  container:
    'relative flex-row justify-between w-full items-center rounded px-2 py-1.5',
  menuItemTitle: 'text-sm text-neutral-800',
  innerMenuContainer:
    'absolute z-50 min-w-[8rem] text-neutral-800 rounded-md border border-neutral-200/70 bg-white text-base shadow-md top-0',
  rightIcon: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
  dotIcon: 'absolute left-2 flex h-2 w-2 items-center justify-center',
  icon: 'w-4 h-4',
};

export default MenuBarItem;
