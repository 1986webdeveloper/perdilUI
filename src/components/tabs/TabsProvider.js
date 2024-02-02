/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useState } from 'react';
import { Platform, UIManager } from 'react-native';
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

/**
 * This component is used to group the Tab Bar and its associated tabs.
 */

const TabsProvider = ({children}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabPress = index => {
    setSelectedTab(index);
  };

  return (
    <StyledView className={styles.container}>
      <StyledView className={styles.tabHeaderContainer}>
        {React.Children.map(children, (child, index) => (
          <StyledTouchableOpacity
            onPress={() => handleTabPress(index)}
            className={`${styles.tabContainer} ${
              selectedTab === index && 'bg-white'
            }`}>
            <StyledText className={styles.tabHeaderText}>
              {child.props?.name || `Tab ${index + 1}`}
            </StyledText>
          </StyledTouchableOpacity>
        ))}
      </StyledView>
      {React.Children.map(children, (child, index) => (
        <StyledView key={index} className={selectedTab !== index && 'hidden'}>
          {child}
        </StyledView>
      ))}
    </StyledView>
  );
};

const styles = {
  container: 'relative w-full max-w-sm',
  tabHeaderContainer:
    'relative p-1 bg-gray-200 rounded-lg z-20 flex-row items-center justify-center w-full h-10 rounded-md',
  tabContainer: 'flex-1 items-center justify-center h-full rounded-md',
  tabHeaderText: 'text-sm font-medium transition-all text-gray-500',
};

export default TabsProvider;
