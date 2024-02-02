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
 * This component represents an individual item within the context menu.
 * It should be used within the `ContextMenuSection` component.
 */

const ContextMenuItem = ({
  title = 'Context menu item title',
  disabled = false,
  defaultSelected,
  onPressItem,
  containerClass = '',
  titleClassName = '',
  rightSideIcon,
  innerMenu,
  ...contextMenuSectionProps
}) => {
  const [selectedItem, setSelectedItem] = useState(defaultSelected || false);

  const onPress = e => {
    if (onPressItem) {
      onPressItem({...e, title: title});
    }
    if (contextMenuSectionProps?.setInnerMenuVisible) {
      contextMenuSectionProps?.setInnerMenuVisible(
        contextMenuSectionProps?.innerMenuVisible === title ? null : title,
      );
    }
    if (contextMenuSectionProps?.multipleSelection) {
      contextMenuSectionProps?.selection && setSelectedItem(!selectedItem);
    } else {
      contextMenuSectionProps?.selection &&
        contextMenuSectionProps?.setSelected(
          contextMenuSectionProps?.selected === title ? null : title,
        );
    }
  };

  return (
    <StyledView
      className={`${styles.contextMenuItemContainer} ${containerClass} ${
        disabled && 'opacity-50'
      }`}>
      <StyledTouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled}
        className={styles.contextMenuItemButton}>
        <>
          {contextMenuSectionProps?.multipleSelection
            ? contextMenuSectionProps?.selection &&
              selectedItem && (
                <StyledImage
                  source={Images.right}
                  className={styles.rightIcon}
                />
              )
            : contextMenuSectionProps?.selection &&
              contextMenuSectionProps?.selected === title && (
                <StyledImage source={Images.dot} className={styles.dotIcon} />
              )}
          <StyledText className={`${styles.contextMenuItemTitle} ${titleClassName}`}>
            {title}
          </StyledText>
        </>
        {React.isValidElement(rightSideIcon)
          ? rightSideIcon
          : rightSideIcon && (
              <StyledImage source={rightSideIcon} className={styles.icon} />
            )}
      </StyledTouchableOpacity>
      <StyledView>
        {contextMenuSectionProps?.innerMenuVisible === title && (
          <StyledView className={styles.innerMenuContainer}>
            {innerMenu}
          </StyledView>
        )}
      </StyledView>
    </StyledView>
  );
};

const styles = {
  contextMenuItemContainer: 'flex-row visible',
  contextMenuItemButton:
    'flex-row items-center justify-between p-2 pl-8 w-full',
  contextMenuItemTitle: 'text-black',
  rightIcon: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
  dotIcon: 'absolute left-2 flex h-2 w-2 items-center justify-center',
  icon: 'w-4 h-4',
  innerMenuContainer:
    'absolute -translate-x-1 z-[9999] min-w-[8rem] text-neutral-800 rounded-md border border-neutral-200/70 bg-white shadow-md top-0 left-0',
};

export default ContextMenuItem;
