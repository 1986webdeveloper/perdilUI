/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { Platform } from 'react-native';
import { StyledText, StyledView } from '../../StyledComponentsContstants';

/**
 * A popover component wrapper that can wrap and display rich content in a portal, triggered by a button.
 */

const Popover = ({
  popOverButton,
  visible,
  heading = 'Popover Heading',
  description = 'Popover Description',
  position,
  children,
}) => {
  const renderPopOver = () => {
    return (
      <>
        <StyledView
          className={`${styles.indicator} ${
            position === 'top'
              ? styles.topContainer
              : position === 'bottom'
              ? styles.bottomContainer
              : ''
          }`}
        />
        <StyledView
          className={`${styles.container} ${
            position === 'top'
              ? styles.indicatorForTop
              : position === 'bottom'
              ? styles.indicatorForBottom
              : ''
          }`}>
          <StyledView className={styles.popoverContainer}>
            <StyledText className={styles.popoverHeading}>{heading}</StyledText>
            <StyledText className={styles.popoverDescription}>
              {description}
            </StyledText>
          </StyledView>
          {React.Children.map(children, (child, index) => (
            <StyledView className={styles.popoverContentContainer}>
              {React.cloneElement(child, {focused: index === 0})}
            </StyledView>
          ))}
        </StyledView>
      </>
    );
  };

  return (
    <StyledView
      className={`items-center ${
        Platform.OS === 'android' ? 'shadow' : 'z-[9999]'
      }`}>
      {position === 'top' && (
        <StyledView className="items-center">
          {visible && renderPopOver()}
        </StyledView>
      )}
      {popOverButton}
      {position === 'bottom' && (
        <StyledView className="items-center">
          {visible && renderPopOver()}
        </StyledView>
      )}
    </StyledView>
  );
};

const styles = {
  indicator:
    'absolute z-50 w-2.5 h-2.5 origin-bottom-left rotate-45 bg-white border-neutral-200/70 rounded-sm',
  topContainer: 'bottom-1 border-b border-r',
  bottomContainer: 'top-1 border-t border-l',
  container:
    'absolute flex-1 z-40 items-center space-y-2 bg-white p-4 border rounded-md shadow-sm border-neutral-200/70',
  indicatorForTop: 'bottom-0 mb-2',
  indicatorForBottom: 'top-0 mt-2',
  popoverContainer: 'w-full space-y-2',
  popoverHeading: 'text-base text-black font-medium leading-none',
  popoverDescription: 'text-base text-black text-sm text-muted-foreground',
  popoverContentContainer: 'gap-2',
};

export default Popover;
