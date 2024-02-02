/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { Platform } from 'react-native';
import { StyledPressable, StyledView } from '../../StyledComponentsContstants';

/**
 * This component can be used to display a hover card.
 * It provides a user-friendly interface to present additional information when the user clicks an element (hover cannot works)
 */

const HoverCard = ({visible, cardComponent, onDismiss, children}) => {
  return (
    <>
      {visible && (
        <StyledPressable
          onPress={onDismiss}
          className={`absolute h-full w-full ${
            Platform.OS === 'android' ? 'shadow' : 'z-[9999]'
          }`}
        />
      )}
      {children}
      <StyledView className={Platform.OS === 'android' ? 'shadow' : 'z-[9999]'}>
        {visible && (
          <StyledView className={styles.cardContainer}>
            {cardComponent}
          </StyledView>
        )}
      </StyledView>
    </>
  );
};

const styles = {
  cardContainer: 'absolute self-center top-0 mt-2',
};

export default HoverCard;
