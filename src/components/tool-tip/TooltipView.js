import React, { useState } from 'react';
import {
  StyledSafeAreaView,
  StyledText,
  StyledTouchableOpacity,
} from '../../StyledComponentsContstants';
import Tooltip from './Tooltip';

const TooltipView = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const renderToggleButton = (
    <StyledTouchableOpacity
      onPress={() => setShowTooltip(!showTooltip)}
      className="px-5 py-1 rounded-full bg-neutral-200">
      <StyledText className="text-base text-neutral-500">hover me</StyledText>
    </StyledTouchableOpacity>
  );

  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center">
      <Tooltip
        visible={showTooltip}
        anchor={renderToggleButton}
        tooltipText={'Tooltip Text'}
        onPressToolTip={() => setShowTooltip(false)}
        position={'bottom'}
        tooltipClass={''}
      />
    </StyledSafeAreaView>
  );
};

export default TooltipView;
