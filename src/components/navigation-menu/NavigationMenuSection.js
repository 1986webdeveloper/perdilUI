/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { StyledView } from '../../StyledComponentsContstants';

/**
 * A component for dividing items into sections in the navigation menu.
 */

const NavigationMenuSection = ({children}) => {
  return (
    <StyledView>{children}</StyledView>
  );
};

export default NavigationMenuSection;
