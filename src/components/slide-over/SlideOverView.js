import React, { useState } from 'react';
import {
  StyledImage,
  StyledSafeAreaView,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';
import SlideOver from './SlideOver';

const SlideOverView = () => {
  const [slideoverVisible, setSlideoverVisible] = useState(false);
  const SlideOverChild = (
    <StyledSafeAreaView className="flex-1 h-full">
      <StyledView className="flex-row items-center justify-between m-4">
        <StyledText className="text-base font-semibold leading-6 text-gray-900">
          Slide Over Title
        </StyledText>
        <StyledTouchableOpacity
          onPress={() => setSlideoverVisible(false)}
          className="flex-row items-center justify-center px-3 py-2 space-x-1 border rounded-md border-neutral-200">
          <StyledImage source={Images.cancel} className="w-3 h-3" />
          <StyledText className="text-xs font-medium uppercase text-neutral-600">
            Close
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView className="flex-1 m-4 mt-0 overflow-hidden border border-dashed rounded-md border-neutral-300" />
    </StyledSafeAreaView>
  );

  return (
    <StyledSafeAreaView className="h-full items-center justify-center">
      <StyledTouchableOpacity
        onPress={() => setSlideoverVisible(!slideoverVisible)}
        className="inline-flex items-center justify-center h-10 px-4 py-2 bg-white border border-neutral-300 rounded-md">
        <StyledText className="text-base text-black font-medium transition-colors">
          Open
        </StyledText>
      </StyledTouchableOpacity>
      <SlideOver visible={slideoverVisible} setVisible={setSlideoverVisible}>
        {SlideOverChild}
      </SlideOver>
    </StyledSafeAreaView>
  );
};

export default SlideOverView;
