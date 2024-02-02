/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { LayoutAnimation, Platform, UIManager } from 'react-native';
import { StyledPressable, StyledView } from '../../StyledComponentsContstants';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

/**
 * This component is used for switch which is enable or disable an option
 */

const Switch = ({toggleSwitch, onToggleSwitch}) => {
  const handleToggle = () => {
    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.linear,
      duration: 200,
    });
    onToggleSwitch(!toggleSwitch);
  };

  return (
    <StyledPressable
      className={`${styles.switchContainer} ${
        toggleSwitch ? styles.switchOnContainer : styles.switchOffContainer
      }`}
      onPress={handleToggle}>
      <StyledView className={styles.roundedToggleButton} />
    </StyledPressable>
  );
};

const styles = {
  switchContainer:
    'relative inline-flex flex-row p-[2.5px] ml-4 rounded-full w-10',
  roundedToggleButton: 'w-5 h-5 bg-white rounded-full shadow-md',
  switchOnContainer: 'justify-end bg-blue-600',
  switchOffContainer: 'justify-start bg-neutral-200',
};

export default Switch;
