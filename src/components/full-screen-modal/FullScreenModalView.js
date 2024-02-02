import React, { useState } from 'react';
import {
  StyledImage,
  StyledSafeAreaView,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';
import FullScreenModal from './FullScreenModal';

const FullScreenModalView = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const DemoScreen = (
    <StyledSafeAreaView className="flex inset-0 z-[99] w-screen h-screen bg-white items-center justify-center">
      <StyledTouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        className="absolute bg-white top-8 right-0 z-30 flex flex-row items-center justify-center px-3 py-2 mt-3 mr-3 space-x-1 border rounded-md border-neutral-200">
        <StyledImage source={Images.cancel} className="w-3 h-3" />
        <StyledText className="text-xs font-medium uppercase text-neutral-600">
          Close
        </StyledText>
      </StyledTouchableOpacity>
      <StyledView className="absolute top-0 bottom-0 right-0 flex-shrink-0 w-full overflow-hidden">
        <StyledView className="absolute inset-0 z-20 w-full h-full opacity-70 bg-gradient-to-t from-black" />
        <StyledImage
          source={Images.fullScreenModalBackground}
          resizeMode="cover"
          className="z-10 w-full h-52 opacity-75"
        />
      </StyledView>
      <StyledView className="relative flex flex-wrap items-center justify-center w-full h-full px-8">
        <StyledView className="relative w-full max-w-sm mx-auto">
          <StyledView className="relative">
            <StyledView className="flex mb-6 space-y-2">
              <StyledText className="text-2xl text-center font-semibold tracking-tight">
                Create an account
              </StyledText>
              <StyledText className="text-base text-center text-neutral-500">
                Enter your email below to create your account
              </StyledText>
            </StyledView>
            <StyledView className="space-y-2">
              <StyledTextInput
                placeholder="name@example.com"
                className="flex flex-row w-full h-10 px-3 py-2 text-base bg-white border rounded-md border-neutral-300"
              />
              <StyledTouchableOpacity className="inline-flex items-center justify-center w-full h-10 px-4 py-2 rounded-md bg-neutral-950">
                <StyledText className="text-base font-medium tracking-wide text-white transition-colors">
                  Sign up with Email
                </StyledText>
              </StyledTouchableOpacity>
              <StyledView className="relative py-6 justify-center">
                <StyledView className="absolute inset-0 flex flex-row items-center w-full border-t border-neutral-300" />
                <StyledView className="relative flex flex-row justify-center">
                  <StyledText className="px-2 bg-white text-neutral-500 text-xs uppercase">
                    Or continue with
                  </StyledText>
                </StyledView>
              </StyledView>
              <StyledTouchableOpacity className="inline-flex flex-row items-center justify-center w-full h-10 px-4 py-2 border rounded-md border-neutral-300">
                <StyledImage
                  source={Images.githubBlackBg}
                  className="w-4 h-4 mr-2"
                />
                <StyledText className="text-base font-medium">
                  Github
                </StyledText>
              </StyledTouchableOpacity>
            </StyledView>
          </StyledView>
          <StyledText className="mt-6 text-base text-center text-neutral-500">
            Already have an account?{' '}
            <StyledText className="relative font-medium text-blue-600 group">
              Login here
            </StyledText>
          </StyledText>
          <StyledText className="px-8 mt-1 text-base text-center text-neutral-500">
            By continuing, you agree to our{' '}
            <StyledText className="underline underline-offset-4 hover:text-primary">
              Terms
            </StyledText>{' '}
            and{' '}
            <StyledText className="underline underline-offset-4 hover:text-primary">
              Policy
            </StyledText>
            .
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledSafeAreaView>
  );

  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center">
      <StyledTouchableOpacity
        onPress={() => setModalVisible(true)}
        className="items-center justify-center h-10 px-4 bg-white border border-gray-300 rounded-md">
        <StyledText className="text-base font-medium transition-colors">
          Preview
        </StyledText>
      </StyledTouchableOpacity>

      <FullScreenModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}>
        {DemoScreen}
      </FullScreenModal>
    </StyledSafeAreaView>
  );
};

export default FullScreenModalView;
