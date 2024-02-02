/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { LayoutAnimation, Platform, UIManager } from 'react-native';
import {
  StyledImage,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

/**
 * A component for adding items to the accordion.
 * It should be used within an `Accordion`.
 */

const AccordionItem = ({
  heading = 'Heading of accordion item',
  content = 'Content of accordion item',
  index,
  ...wrapperProps
}) => {
  const onPress = () => {
    wrapperProps?.openedElement === heading
      ? wrapperProps?.setOpenedElement(null)
      : wrapperProps?.setOpenedElement(heading);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <StyledView className={styles.container}>
      <StyledTouchableOpacity
        onPress={onPress}
        className={styles.headingButton}>
        <StyledText
          className={`${styles.headingText} ${
            wrapperProps?.openedElement === heading &&
            styles.headingUnderlinedText
          }`}>
          {heading}
        </StyledText>
        <StyledImage
          source={Images.downArrow}
          className={`w-4 h-4 ${
            wrapperProps?.openedElement === heading && 'rotate-180'
          }`}
        />
      </StyledTouchableOpacity>
      {wrapperProps?.openedElement === heading && (
        <StyledView>
          <StyledView className={styles.contentContainer}>
            <StyledText className={styles.contentText}>{content}</StyledText>
          </StyledView>
        </StyledView>
      )}
    </StyledView>
  );
};

const styles = {
  container: 'm-4',
  headingButton: 'justify-between flex-row mr-4',
  headingText: 'text-black w-full',
  headingUnderlinedText: 'underline',
  contentContainer: 'pt-4 opacity-70',
  contentText: 'text-black',
};

export default AccordionItem;
