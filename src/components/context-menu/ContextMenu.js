/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useEffect, useState } from 'react';
import {
  StyledPressable,
  StyledSafeAreaView,
} from '../../StyledComponentsContstants';

/**
 * This is a wrapper component for the entire context menu.
 * It can be used to display a menu of actions for various functions.
 */

const ContextMenu = ({children, visible, cordinates, width}) => {
  const [innerMenuVisible, setInnerMenuVisible] = useState('');
  const [contextMenuVisible, setContextMenuVisible] = useState(visible);

  useEffect(() => {
    setContextMenuVisible(visible);
  }, [visible]);

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {width, innerMenuVisible, setInnerMenuVisible}),
  );

  const onBackdropPress = () => {
    setContextMenuVisible(false);
    setInnerMenuVisible('');
  };

  return (
    contextMenuVisible && (
      <>
        <StyledPressable
          onPress={onBackdropPress}
          className="absolute h-full w-full"
        />
        <StyledSafeAreaView
          className={`${styles.contextMenuContainer} w-[${width}px] top-[${cordinates.x}px] left-[${cordinates.y}px]`}>
          {childrenWithProps}
        </StyledSafeAreaView>
      </>
    )
  );
};

const styles = {
  contextMenuContainer:
    'absolute z-[999] min-w-[8rem] text-neutral-800 rounded-md border border-neutral-200/70 bg-white text-base shadow-md w-64',
};

export default ContextMenu;
