/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useEffect, useState } from 'react';
import { StyledText, StyledView } from '../../StyledComponentsContstants';

/**
 * A component that displays text with a typewriter-like animation.
 */

const TypingEffect = ({
  texts = [
    'Alpine JS is Amazing',
    'It is Truly Awesome!',
    'You Have to Try It!',
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const typingSpeed = 100;
  const delayBetweenTexts = 1000;

  const [blink, setBlink] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBlink(!blink);
    }, 500);
  }, [blink]);

  useEffect(() => {
    let isMounted = true;

    const animateText = async text => {
      for (let i = 0; i <= text.length; i++) {
        if (isMounted) {
          setDisplayText(text.substring(0, i));
          await new Promise(resolve => setTimeout(resolve, typingSpeed));
        }
      }

      await new Promise(resolve => setTimeout(resolve, delayBetweenTexts));

      for (let i = text.length; i >= 0; i--) {
        if (isMounted) {
          setDisplayText(text.substring(0, i));
          await new Promise(resolve => setTimeout(resolve, typingSpeed));
        }
      }

      if (isMounted) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
        animateText(Array.isArray(texts) ? texts[currentIndex] : texts);
      }
    };

    animateText(Array.isArray(texts) ? texts[currentIndex] : texts);

    return () => {
      isMounted = false;
    };
  }, [currentIndex]);

  return (
    <StyledView className={styles.container}>
      <StyledView className={styles.textAndCursorContainer}>
        <StyledText className={styles.text}>{displayText}</StyledText>
        <StyledView className={`${styles.cursor} ${!blink && 'hidden'}`} />
      </StyledView>
    </StyledView>
  );
};

const styles = {
  container: 'flex-row items-center justify-center mx-auto max-w-7xl',
  textAndCursorContainer: 'relative flex-row items-center justify-center',
  text: 'text-2xl text-black font-black leading-tight text-center',
  cursor: 'absolute right-0 w-2 -mr-2 bg-black h-3/4',
};

export default TypingEffect;
