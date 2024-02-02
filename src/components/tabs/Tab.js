/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { StyledView } from '../../StyledComponentsContstants';

/**
 * This component represents an individual tab within the `TabsProvider` menu
 */

const Tab = ({tabHeader, tabComponent, ...tabsProviderProps}) => {
  return <StyledView className={styles.container}>{tabComponent}</StyledView>;
};

const styles = {
  container: 'w-full mt-2',
};

export default Tab;
