import React, { useState } from 'react';
import { StyledSafeAreaView } from '../../StyledComponentsContstants';
import MonacoEditor from './MonacoEditor';

const MonacoEditorView = () => {
  const [content, setContent] = useState('');

  return (
    <StyledSafeAreaView className='flex-1'>
      <MonacoEditor value={content} onChangeText={text => setContent(text)} />
    </StyledSafeAreaView>
  );
};

export default MonacoEditorView;
