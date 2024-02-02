/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useState } from 'react';
import { Platform } from 'react-native';
import {
  StyledImage,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';

/**
 * A provider component for the navigation menu.
 */

const NavigationMenuProvider = ({children, containerWidth}) => {
  const [selectedItem, setSelectedItem] = useState('');

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {selectedItem, setSelectedItem}),
  );

  return (
    <StyledView className={Platform.OS === 'android' ? 'shadow' : 'z-[99999]'}>
      <StyledView
        className={`${styles.headerContainer} w-[${containerWidth}px]`}>
        {React.Children.map(children, child => {
          const title = child?.props?.title ?? 'Navigation Title';
          return (
            <StyledView>
              <StyledTouchableOpacity
                onPress={() =>
                  setSelectedItem(prevVal => (prevVal === title ? '' : title))
                }
                className={styles.menuBarButton}>
                <StyledText className={styles.headerTitleText}>
                  {title}
                </StyledText>
                {React.Children.count(child?.props?.children) !== 0 && (
                  <StyledImage
                    source={Images.downArrow}
                    className={`w-3 h-3 ${
                      selectedItem === title && 'rotate-180'
                    }`}
                  />
                )}
              </StyledTouchableOpacity>
              <StyledView className="items-center">
                {selectedItem === title && childrenWithProps}
              </StyledView>
            </StyledView>
          );
        })}
      </StyledView>
    </StyledView>
  );
};

const styles = {
  headerContainer:
    'min-h-12 h-12 bg-white border rounded-md border-neutral-200/80 flex-row justify-between',
  menuBarButton:
    'rounded flex-row items-center justify-center px-5 py-2 h-full space-x-2',
  headerTitleText: 'leading-tight text-sm text-neutral-900',
};

export default NavigationMenuProvider;
