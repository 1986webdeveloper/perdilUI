/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { Platform } from 'react-native';
import {
  StyledPressable,
  StyledText,
  StyledView,
} from '../../StyledComponentsContstants';

/**
 * Simple tooltip component that can be used to show additional information on tap (hover cannot works).
 */

const Tooltip = ({
  visible,
  anchor,
  position,
  tooltipText = 'Tooltip Text',
  onPressToolTip,
  tooltipClass = '',
}) => {
  const renderToolTip = () => {
    return (
      <StyledView className={`${tooltipClass} ${styles.container}`}>
        <StyledPressable
          onPress={onPressToolTip}
          className={`${styles.tooltipContainer} ${
            position === 'top'
              ? styles.tooltipContainerForTop
              : position === 'left'
              ? styles.tooltipContainerForLeft
              : position === 'bottom'
              ? styles.tooltipContainerForBottom
              : position === 'right'
              ? styles.tooltipContainerForRight
              : ''
          }`}>
          <StyledView
            className={`${styles.tooltipIndicator} ${
              position === 'top'
                ? styles.tooltipIndicatorForTop
                : position === 'left'
                ? styles.tooltipIndicatorForLeft
                : position === 'bottom'
                ? styles.tooltipIndicatorForBottom
                : position === 'right'
                ? styles.tooltipIndicatorForRight
                : ''
            }`}
          />
          <StyledText className={styles.tooltipText}>{tooltipText}</StyledText>
        </StyledPressable>
      </StyledView>
    );
  };

  return (
    <>
      {visible && position === 'top' && renderToolTip()}
      <StyledView
        className={
          position === 'left' || position === 'right' ? 'flex-row' : ''
        }>
        {position === 'left' && renderToolTip()}
        {anchor}
        {position === 'right' && renderToolTip()}
      </StyledView>
      {visible && position === 'bottom' && renderToolTip()}
    </>
  );
};

const styles = {
  container: `items-center ${
    Platform.OS === 'android' ? 'shadow' : 'z-[9999]'
  }`,
  tooltipContainer: 'z-50 px-2 py-1 bg-black rounded bg-opacity-50 absolute',
  tooltipContainerForTop: 'bottom-1',
  tooltipContainerForLeft: 'right-1',
  tooltipContainerForBottom: 'top-1',
  tooltipContainerForRight: 'left-1',
  tooltipIndicator: 'absolute w-3 h-3 bg-black bg-opacity-50 rotate-45',
  tooltipIndicatorForTop: '-bottom-[4px] inset-x-1/2 ',
  tooltipIndicatorForLeft: '-right-[4px] inset-y-1/2',
  tooltipIndicatorForBottom: '-top-[4px] inset-x-1/2',
  tooltipIndicatorForRight: '-left-[4px] inset-y-1/2',
  tooltipText: 'text-white',
};

export default Tooltip;
