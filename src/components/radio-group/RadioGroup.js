/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useState } from 'react';
import { StyledSafeAreaView } from '../../StyledComponentsContstants';

/**
 * A radio group component that wraps a set of radio buttons.
 */

const RadioGroup = ({children, onSelect}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {selectedItem, setSelectedItem, onSelect}),
  );

  return <StyledSafeAreaView>{childrenWithProps}</StyledSafeAreaView>;
};

export default RadioGroup;
