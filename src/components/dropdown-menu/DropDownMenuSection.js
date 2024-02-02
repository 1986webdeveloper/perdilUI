/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { StyledView } from '../../StyledComponentsContstants';

/**
 * A component that divides items into sections.
 * It should be used within a `DropDownMenu`.
*/

const DropDownMenuSection = ({children, ...dropdownProps}) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      width: dropdownProps?.width,
      innerMenuVisible: dropdownProps?.innerMenuVisible,
      setInnerMenuVisible: dropdownProps?.setInnerMenuVisible,
    }),
  );

  return (
    <StyledView className={styles.sectionContainer}>
      {childrenWithProps}
    </StyledView>
  );
};

const styles = {
  sectionContainer: 'border-b border-gray-200 w-full',
};

export default DropDownMenuSection;
