/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { StyledText, StyledView } from '../../StyledComponentsContstants';

/**
 * This is an animated text component that scales in size.
 */

const StyledAnimatedText = Animated.createAnimatedComponent(StyledText);

const TextAnimation = ({text= 'Text Animation'}) => {
  const characters = text?.split('');
  const animatedOpacityValues = useRef(
    characters.map(() => new Animated.Value(0)),
  ).current;
  const animatedScaleValues = useRef(
    characters.map(() => new Animated.Value(4)),
  ).current;

  useEffect(() => {
    const animateLetter = index => {
      Animated.timing(animatedOpacityValues[index], {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(animatedScaleValues[index], {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        if (index < characters.length - 1) {
          animateLetter(index + 1);
        }
      });
    };

    animateLetter(0);
  }, []);

  return (
    <StyledView className={styles.container}>
      {characters?.map((char, index) => (
        <StyledAnimatedText
          key={index}
          className={`${styles.text} opacity-[${animatedOpacityValues[index]}] scale-[${animatedScaleValues[index]}]`}>
          {char}
        </StyledAnimatedText>
      ))}
    </StyledView>
  );
};

const styles = {
  container: 'flex-row',
  text: 'text-3xl font-bold',
};

export default TextAnimation;
