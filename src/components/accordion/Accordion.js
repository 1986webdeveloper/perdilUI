/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useState } from 'react';
import { StyledView } from '../../StyledComponentsContstants';

/**
 * A component that wraps the whole accordion.
 * It provides the necessary context and state for the accordion.
 */

const Accordion = ({children}) => {
  const [openedElement, setOpenedElement] = useState(null);

  return (
    <StyledView className={styles.container}>
      {React.Children.map(children, (child, index) => (
        <StyledView
          className={
            React.Children.count(children) !== index + 1 && styles.divider
          }>
          {React.cloneElement(child, {openedElement, setOpenedElement})}
        </StyledView>
      ))}
    </StyledView>
  );
};

const styles = {
  container: 'border border-gray-300 rounded-lg',
  divider: 'border-b border-gray-300',
};

export default Accordion;
