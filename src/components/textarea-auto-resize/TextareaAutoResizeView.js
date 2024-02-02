import React, { useState } from 'react';
import TextareaAutoResize from './TextareaAutoResize';

const TextareaAutoResizeView = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <TextareaAutoResize
      height={80}
      value={inputValue}
      onChangeText={text => setInputValue(text)}
      placeholder={
        'Type your message here. I will resize based on the height content.'
      }
    />
  );
};

export default TextareaAutoResizeView;
