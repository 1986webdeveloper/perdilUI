/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useRef } from 'react';
import { Platform } from 'react-native';
import {
  StyledKeyboardAvoidingView,
  StyledPressable,
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledView,
} from '../../StyledComponentsContstants';

/**
 * A simple text editor component using the Monaco Editor library.
 */

const MonacoEditor = ({value, onChangeText}) => {
  const inputRef = useRef(null);
  const lines = value?.split('\n') ?? [''];
  const verticalScrollRef = useRef(null);
  const horizontalScrollRef = useRef(null);

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StyledScrollView
        scrollToOverflowEnabled={true}
        ref={verticalScrollRef}
        onContentSizeChange={(x, y) =>
          verticalScrollRef.current?.scrollToEnd({animated: false})
        }>
        <StyledPressable
          onPress={() => inputRef.current?.focus()}
          className={styles.container}>
          <StyledView
            className={`${styles.lineNumberContainer} ${
              lines?.length === 1 && 'top-[4px]'
            }`}>
            {lines?.map((_, index) => {
              return (
                <StyledView key={index}>
                  <StyledText className={styles.lineNumber}>
                    {index + 1}
                  </StyledText>
                </StyledView>
              );
            })}
          </StyledView>
          <StyledScrollView
            horizontal
            scrollToOverflowEnabled={true}
            ref={horizontalScrollRef}
            onContentSizeChange={(x, y) => {
              if (Platform.OS === 'ios') {
                horizontalScrollRef.current?.scrollToEnd({animated: false});
              }
            }}>
            <StyledTextInput
              ref={inputRef}
              multiline
              value={value}
              focusable={true}
              className={styles.inputText}
              onKeyPress={keyEvent => {
                if (
                  keyEvent.nativeEvent.key === 'Enter' &&
                  Platform.OS === 'ios'
                ) {
                  horizontalScrollRef.current?.scrollTo({
                    animated: false,
                    x: 0,
                  });
                }
              }}
              cursorColor={'white'}
              onChangeText={onChangeText}
            />
          </StyledScrollView>
        </StyledPressable>
      </StyledScrollView>
    </StyledKeyboardAvoidingView>
  );
};

const styles = {
  container: 'flex-row items-start w-full bg-[#0C1021] min-h-[250px] p-3 pl-0',
  lineNumber: 'text-sm font-mono text-white',
  lineNumberContainer: 'min-w-[40px] items-center',
  inputText: 'text-white text-sm font-mono p-0',
};

export default MonacoEditor;
