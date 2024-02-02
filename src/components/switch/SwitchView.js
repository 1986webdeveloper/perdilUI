import React, { useState } from 'react';
import { StyledSafeAreaView, StyledText } from '../../StyledComponentsContstants';
import Switch from './Switch';

const SwitchView = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  return (
    <StyledSafeAreaView className="h-full flex-row items-center justify-center space-x-2">
      <Switch
        toggleSwitch={toggleSwitch}
        onToggleSwitch={value => setToggleSwitch(value)}
      />
      <StyledText
        className={`text-base select-none ${
          toggleSwitch ? 'text-blue-600' : 'text-neutral-400'
        }`}>
        Enable Feature
      </StyledText>
    </StyledSafeAreaView>
  );
};

export default SwitchView;
