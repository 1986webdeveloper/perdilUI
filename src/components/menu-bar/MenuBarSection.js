/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useState } from 'react';
import { StyledView } from '../../StyledComponentsContstants';

/**
 * A component for a section of the menu bar.
 * This component contains the title of the section and all its items.
 */

const MenuBarSection = ({
  children,
  multipleSelection,
  selection = false,
  ...menuProps
}) => {
  const [selected, setSelected] = useState(null);

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      selection,
      multipleSelection,
      selected,
      setSelected,
      selectedInnerMenuItem: menuProps?.selectedInnerMenuItem,
      setSelectedInnerMenuItem: menuProps?.setSelectedInnerMenuItem,
    }),
  );

  return (
    <StyledView className={styles.container}>{childrenWithProps}</StyledView>
  );
};

const styles = {
  container: 'border-b border-b-neutral-200 p-1',
};

export default MenuBarSection;
