import React, { useState } from 'react';
import {
  StyledImage,
  StyledPressable,
  StyledSafeAreaView,
  StyledText,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';
import ContextMenu from './ContextMenu';
import ContextMenuItem from './ContextMenuItem';
import ContextMenuSection from './ContextMenuSection';

const ContextMenuView = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [cordinates, setCordinates] = useState({x: 0, y: 0});

  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center">
      <StyledPressable
        className={
          'z-50 h-[150px] w-[300px] text-base items-center justify-center rounded-md border border-neutral-300 border-dashed text-neutral-800'
        }
        onPress={e => {
          setCordinates({
            x: e.nativeEvent.locationX,
            y: e.nativeEvent.locationY,
          });
          setContextMenuVisible(!contextMenuVisible);
        }}>
        <StyledText className="text-neutral-400">Right click here</StyledText>
      </StyledPressable>

      <ContextMenu
        width={253}
        visible={contextMenuVisible}
        cordinates={cordinates}
        contextMenuVisible={contextMenuVisible}>
        <ContextMenuSection>
          <ContextMenuItem title={'Back'} />
          <ContextMenuItem title={'Forward'} disabled />
          <ContextMenuItem title={'Reload'} />
          <ContextMenuItem
            title={'More Tool'}
            innerMenu={
              <>
                <ContextMenuSection>
                  <ContextMenuItem
                    title={'Save Page As...'}
                    containerClass="-ml-5"
                  />
                  <ContextMenuItem
                    title={'Create Shortcut...'}
                    containerClass="-ml-5"
                  />
                  <ContextMenuItem
                    title={'Name Window...'}
                    containerClass="-ml-5"
                  />
                </ContextMenuSection>
                <ContextMenuSection>
                  <ContextMenuItem
                    title={'Developer Tools...'}
                    containerClass="-ml-5"
                  />
                </ContextMenuSection>
              </>
            }
            rightSideIcon={
              <StyledImage
                source={Images.leftArrow}
                className="h-4 w-4 items-center justify-center rotate-180"
              />
            }
          />
        </ContextMenuSection>

        <ContextMenuSection selection={true} multipleSelection={true}>
          <ContextMenuItem title={'Show Bookmarks Bar'} />
          <ContextMenuItem title={'Show Full URLs'} />
        </ContextMenuSection>

        <ContextMenuSection>
          <ContextMenuItem title={'People'} titleClassName={'font-semibold'} />
        </ContextMenuSection>

        <ContextMenuSection selection={true} multipleSelection={false}>
          <ContextMenuItem title={'Adam Wathan'} />
          <ContextMenuItem title={'Caleb Porzio'} />
        </ContextMenuSection>
      </ContextMenu>
    </StyledSafeAreaView>
  );
};

export default ContextMenuView;
