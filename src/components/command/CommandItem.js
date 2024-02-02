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
 * This component represents an individual command that the user can select from the command menu.
 */

const CommandItem = ({
  title,
  leftIcon,
  defaultOption = true,
  onPressItem,
  ...commandSectionData
}) => {
  const onPress = e => {
    if (onPressItem) {
      onPressItem({
        ...e,
        data: {
          title,
          leftIcon,
          defaultOption,
        },
      });
    }
  };
  return (
    (commandSectionData?.isSearchData || defaultOption) && (
      <StyledTouchableOpacity className={styles.container} onPress={onPress}>
        <StyledView className={styles.itemContainer}>
          {React.isValidElement(leftIcon)
            ? leftIcon
            : leftIcon && (
                <StyledImage source={leftIcon} className={styles.leftIcon} />
              )}
          <StyledText className={styles.itemText}>{title}</StyledText>
        </StyledView>
      </StyledTouchableOpacity>
    )
  );
};

const styles = {
  container: 'px-2',
  itemContainer:
    'flex-row cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none space-x-2',
  leftIcon: 'w-4 h-4',
  itemText: 'text-base text-gray-900',
};

export default CommandItem;
