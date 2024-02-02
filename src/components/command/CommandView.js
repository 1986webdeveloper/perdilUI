import React from 'react';
import { StyledSafeAreaView } from '../../StyledComponentsContstants';
import Images from '../../assets/Images';
import Command from './Command';
import CommandItem from './CommandItem';
import CommandSection from './CommandSection';

const CommandView = () => {
  return (
    <StyledSafeAreaView className="flex-1 item-center justify-center m-3">
      <Command>
        <CommandSection title="Suggestion">
          <CommandItem leftIcon={Images.calender} title={'Calendar'} />
          <CommandItem leftIcon={Images.emoji} title={'Search Emoji'} />
          <CommandItem leftIcon={Images.calculator} title={'Calculator'} />
        </CommandSection>
        <CommandSection title="Settings">
          <CommandItem leftIcon={Images.profile} title={'Profile'} />
          <CommandItem leftIcon={Images.billing} title={'Billing'} />
          <CommandItem leftIcon={Images.settings} title={'Settings'} />
          <CommandItem
            leftIcon={Images.keyboardSettings}
            title={'Keyboard Settings'}
            defaultOption={false}
          />
        </CommandSection>
      </Command>
    </StyledSafeAreaView>
  );
};

export default CommandView;
