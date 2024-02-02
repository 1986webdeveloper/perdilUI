import React, { useState } from 'react';
import {
  StyledImage,
  StyledSafeAreaView,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';
import HoverCard from './HoverCard';

const HoverCardView = () => {
  const [showHoverCard, setShowHoverCard] = useState(false);

  const Card = (
    <StyledView className="flex-row bg-white p-5 w-[365px] space-x-3 rounded-md shadow-sm border border-neutral-200/70">
      <StyledImage
        source={{uri: 'https://cdn.devdojo.com/users/June2022/devdojo.jpg'}}
        className="rounded-full w-14 h-14"
      />
      <StyledView className="relative">
        <StyledText className="mb-1 font-bold text-lg text-black">
          @thedevdojo
        </StyledText>
        <StyledText className="mb-1 text-base text-gray-600">
          The creative platform for developers. Community, tools, products, and
          more
        </StyledText>
        <StyledView className="flex-row items-center space-x-1">
          <StyledImage
            source={Images.hoverCardCalender}
            className="w-5 h-5 opacity-40"
          />
          <StyledText className="text-xs text-gray-400">
            Joined June 2020
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );

  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center">
      <HoverCard
        visible={showHoverCard}
        cardComponent={Card}
        onDismiss={() => setShowHoverCard(false)}>
        <StyledTouchableOpacity onPress={() => setShowHoverCard(!showHoverCard)}>
          <StyledText
            className={`${
              showHoverCard && 'underline'
            } text-base text-black text-center`}>
            @thedevdojo
          </StyledText>
        </StyledTouchableOpacity>
      </HoverCard>
    </StyledSafeAreaView>
  );
};

export default HoverCardView;
