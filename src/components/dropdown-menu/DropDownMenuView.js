import React, { useState } from 'react';
import {
  StyledImage,
  StyledSafeAreaView,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';
import DropDownMenu from './DropDownMenu';
import DropDownMenuItem from './DropDownMenuItem';
import DropDownMenuSection from './DropDownMenuSection';

const DropDownMenuView = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const DropDownButton = (
    <StyledView className={'justify-center items-center'}>
      <StyledTouchableOpacity
        onPress={() => setDropdownVisible(!dropdownVisible)}
        className="flex-row space-x-2 items-center py-2 pl-3 pr-12 bg-white border border-neutral-300 rounded-md">
        <StyledImage
          source={{uri: 'https://cdn.devdojo.com/images/may2023/adam.jpeg'}}
          resizeMode="cover"
          className="w-9 h-9 rounded-full"
        />
        <StyledView className="items-start h-full">
          <StyledText className="text-black text-base">Adam Wathan</StyledText>
          <StyledText className="text-sm -mt-1 font-light text-neutral-400">
            @adamwathan
          </StyledText>
        </StyledView>
        <StyledImage
          source={Images.dropdown}
          className="absolute right-0 w-5 h-5 mr-3"
        />
      </StyledTouchableOpacity>
    </StyledView>
  );

  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center">
      <DropDownMenu
        width={253}
        dropdownButton={DropDownButton}
        visible={dropdownVisible}
        onDismiss={() => setDropdownVisible(false)}>
        <DropDownMenuSection>
          <DropDownMenuItem
            title={'My Profile'}
            titleClassName={'text-base font-semibold'}
            pressable={false}
          />
        </DropDownMenuSection>
        <DropDownMenuSection>
          <DropDownMenuItem
            title={'Profile'}
            leftIcon={Images.profile}
            rightIcon={
              <StyledText className="text-xs text-black tracking-widest opacity-60">
                ⇧⌘P
              </StyledText>
            }
          />
        </DropDownMenuSection>
        <DropDownMenuSection>
          <DropDownMenuItem
            title={'Invite users'}
            leftIcon={Images.inviteUser}
            rightIcon={
              <StyledImage
                source={Images.leftArrow}
                className="h-4 w-4 rotate-180"
              />
            }
            innerMenu={
              <>
                <DropDownMenuSection>
                  <DropDownMenuItem title={'Email'} leftIcon={Images.email} />
                  <DropDownMenuItem
                    title={'Message'}
                    leftIcon={
                      <StyledImage
                        source={Images.message}
                        className="w-4 h-4"
                      />
                    }
                  />
                </DropDownMenuSection>
                <DropDownMenuSection>
                  <DropDownMenuItem title={'More...'} leftIcon={Images.more} />
                </DropDownMenuSection>
              </>
            }
          />
        </DropDownMenuSection>
        <DropDownMenuSection>
          <DropDownMenuItem title={'API'} disabled leftIcon={Images.api} />
        </DropDownMenuSection>
        <DropDownMenuSection>
          <DropDownMenuItem
            title={'Log out'}
            leftIcon={Images.logout}
            rightIcon={
              <StyledText className="text-xs text-black tracking-widest opacity-60">
                ⇧⌘Q
              </StyledText>
            }
          />
        </DropDownMenuSection>
      </DropDownMenu>
    </StyledSafeAreaView>
  );
};

export default DropDownMenuView;
