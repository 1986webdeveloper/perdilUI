/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useState } from 'react';
import { StyledView } from '../../StyledComponentsContstants';

/**
 * This component is used to divide items into sections within the context menu.
 * It should be used within the `ContextMenu` component.
 */

const ContextMenuSection = ({
  children,
  multipleSelection,
  selection = false,
  ...contextMenuProps
}) => {
  const [selected, setSelected] = useState(null);

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      multipleSelection,
      selection,
      selected,
      setSelected,
      width: contextMenuProps?.width,
      innerMenuVisible: contextMenuProps?.innerMenuVisible,
      setInnerMenuVisible: contextMenuProps?.setInnerMenuVisible,
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

export default ContextMenuSection;
