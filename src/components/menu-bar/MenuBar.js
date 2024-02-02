/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useState } from 'react';
import { Platform } from 'react-native';
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';

/**
 * A wrapper component for the entire menu.
 * This component provides the structure for the menu and contains all other menu-related components.
 */

const MenuBar = ({children, containerWidth}) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedInnerMenuItem, setSelectedInnerMenuItem] = useState('');

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      selectedItem,
      setSelectedItem,
      selectedInnerMenuItem,
      setSelectedInnerMenuItem,
    }),
  );

  return (
    <StyledView className={Platform.OS === 'android' ? 'shadow': 'z-[9999]'}>
      <StyledView className={styles.headerContainer}>
        <StyledView className={`${styles.header} w-[${containerWidth}px]`}>
          <StyledView className={styles.headerTitleContainer}>
            {React.Children.map(children, child => (
              <StyledView>
                <StyledTouchableOpacity
                  onPress={() =>
                    setSelectedItem(prevVal =>
                      prevVal === child?.props?.title
                        ? ''
                        : child?.props?.title,
                    )
                  }
                  className={styles.menuBarButton}>
                  <StyledText className={styles.headerTitleText}>
                    {child?.props?.title}
                  </StyledText>
                </StyledTouchableOpacity>
                {selectedItem === child?.props?.title && childrenWithProps}
              </StyledView>
            ))}
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

const styles = {
  headerContainer: 'relative top-0 left-0 z-40 w-full h-10',
  header: 'h-full p-1 bg-white border rounded-md border-neutral-200/80',
  headerTitleContainer: 'flex-row justify-between h-full',
  menuBarButton:
    'rounded flex-row items-center justify-center px-3 py-1.5 h-full',
  headerTitleText: 'leading-tight text-sm text-neutral-900',
};

export default MenuBar;
