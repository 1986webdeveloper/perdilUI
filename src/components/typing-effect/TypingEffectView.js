import React from 'react';
import { StyledSafeAreaView } from '../../StyledComponentsContstants';
import TypingEffect from './TypingEffect';

const TypingEffectView = () => {
  const texts = [
    'Alpine JS is Amazing',
    'It is Truly Awesome!',
    'You Have to Try It!',
  ];

  return (
    <StyledSafeAreaView className="h-full items-center justify-center">
      <TypingEffect texts={texts} />
    </StyledSafeAreaView>
  );
};

export default TypingEffectView;
