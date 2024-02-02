/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { StyledView } from '../../StyledComponentsContstants';

/**
 * A component for the menu bar.
 * This component contains the `title` of the menu bar and all its sections.
 */

const Menu = ({title, width, children, ...menuBarProps}) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      selectedInnerMenuItem: menuBarProps?.selectedInnerMenuItem,
      setSelectedInnerMenuItem: menuBarProps?.setSelectedInnerMenuItem,
    }),
  );

  return (
    menuBarProps?.selectedItem === title && (
      <StyledView
        className={`${styles.container} ${width ? `w-[${width}px]` : 'w-48'}`}>
        {childrenWithProps}
      </StyledView>
    )
  );
};

const styles = {
  container:
    'absolute top-0 z-50 min-w-[8rem] rounded-md border border-neutral-200/70 bg-white mt-10 shadow-md',
};

export default Menu;
