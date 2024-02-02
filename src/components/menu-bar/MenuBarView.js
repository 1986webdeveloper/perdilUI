import React from 'react';
import { StyledSafeAreaView, StyledText } from '../../StyledComponentsContstants';
import Menu from './Menu';
import MenuBar from './MenuBar';
import MenuBarItem from './MenuBarItem';
import MenuBarSection from './MenuBarSection';

const MenuBarView = () => {
  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center">
      <MenuBar>
        <Menu title={'File'}>
          <MenuBarSection>
            <MenuBarItem title={'New Tab'} />
            <MenuBarItem title={'New Window'} />
            <MenuBarItem title={'New Incognito Window'} />
          </MenuBarSection>
          <MenuBarSection>
            <MenuBarItem title={'Share'} />
          </MenuBarSection>
          <MenuBarSection>
            <MenuBarItem title={'Print'} />
          </MenuBarSection>
        </Menu>
        <Menu title={'Edit'}>
          <MenuBarSection>
            <MenuBarItem
              title={'Undo'}
              rightIcon={
                <StyledText className="ml-auto text-xs tracking-widest text-neutral-400 group-hover:text-neutral-600">
                  ⌘Z
                </StyledText>
              }
            />
            <MenuBarItem
              title={'Redo'}
              rightIcon={
                <StyledText className="ml-auto text-xs tracking-widest text-neutral-400 group-hover:text-neutral-600">
                  ⇧⌘Z
                </StyledText>
              }
            />
          </MenuBarSection>
          <MenuBarSection>
            <MenuBarItem title={'Find'} />
          </MenuBarSection>
          <MenuBarSection>
            <MenuBarItem title={'Cut'} />
            <MenuBarItem title={'Copy'} />
            <MenuBarItem title={'Paste'} />
          </MenuBarSection>
        </Menu>
      </MenuBar>
    </StyledSafeAreaView>
  );
};

export default MenuBarView;
