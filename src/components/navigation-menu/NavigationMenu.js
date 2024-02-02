/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { StyledView } from '../../StyledComponentsContstants';

/**
 * A navigation menu component which accepts `title` of the menu.
 */

const NavigationMenu = ({
  title,
  width,
  children,
  leftImage,
  ...menuBarProps
}) => {
  return (
    menuBarProps?.selectedItem === title && (
      <StyledView
        className={`${styles.container} ${width ? `w-[${width}px]` : ''}`}>
        <StyledView className="flex-row">{children}</StyledView>
      </StyledView>
    )
  );
};

const styles = {
  container:
    'absolute flex-row top-1 p-5 min-w-[8rem] rounded-md border border-neutral-200/70 bg-white shadow-md',
};

export default NavigationMenu;
