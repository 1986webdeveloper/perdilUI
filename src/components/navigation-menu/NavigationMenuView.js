import React from 'react';
import {
  StyledImage,
  StyledSafeAreaView,
  StyledText,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';
import NavigationMenu from './NavigationMenu';
import NavigationMenuItem from './NavigationMenuItem';
import NavigationMenuProvider from './NavigationMenuProvider';
import NavigationMenuSection from './NavigationMenuSection';

const NavigationMenuView = () => {
  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center">
      <NavigationMenuProvider>
        <NavigationMenu title={'Getting started'}>
          <NavigationMenuSection>
            <StyledView className="w-48 rounded pt-28 pb-7 h-full bg-neutral-800">
              <StyledView className="relative px-7 space-y-1.5">
                <StyledImage
                  source={Images.treeLogo}
                  className="w-9 h-9"
                />
                <StyledText className="text-white font-bold">
                  Perdil UI
                </StyledText>
                <StyledText className="text-white text-sm opacity-60">
                  An Alpine and Tailwind UI library
                </StyledText>
              </StyledView>
            </StyledView>
          </NavigationMenuSection>
          <NavigationMenuSection>
            <NavigationMenuItem
              title={'Introduction'}
              description={
                'Re-usable elements built using Alpine JS and Tailwind CSS.'
              }
            />
            <NavigationMenuItem
              title={'How to use'}
              description={
                "Couldn't be easier. It's is as simple as copy, paste, andpreview."
              }
            />
            <NavigationMenuItem
              title={'Contributing'}
              description={
                'Feel free to contribute your expertise. All these elements areopen-source.'
              }
            />
          </NavigationMenuSection>
        </NavigationMenu>
        <NavigationMenu title={'Learn more'}>
          <NavigationMenuSection>
            <NavigationMenuItem
              title={'Tailwind CSS'}
              description={
                'A utility first CSS framework for building amazing websites.'
              }
            />
            <NavigationMenuItem
              title={'Laravel'}
              description={
                'The perfect all-in-one framework for building amazing apps.'
              }
            />
            <NavigationMenuItem
              title={'Perdil UI'}
              description={
                'An Alpine JS and Tailwind CSS UI library for awesome people.'
              }
            />
          </NavigationMenuSection>
          <NavigationMenuSection>
            <NavigationMenuItem
              title={'ApineJS'}
              description={
                'A framework without the complex setup or heavy dependencies.'
              }
            />
            <NavigationMenuItem
              title={'Livewire'}
              description={
                'A seamless integration of server-side and client-side interactions.'
              }
            />
            <NavigationMenuItem
              title={'Tails'}
              description={
                'The ultimate Tailwind CSS design tool that helps you craft beautiful websites.'
              }
            />
          </NavigationMenuSection>
        </NavigationMenu>
      </NavigationMenuProvider>
    </StyledSafeAreaView>
  );
};

export default NavigationMenuView;
