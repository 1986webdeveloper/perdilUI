import React from 'react';
import { StyledSafeAreaView } from '../../StyledComponentsContstants';
import Tab from './Tab';
import TabsProvider from './TabsProvider';

const TabsView = () => {
  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center">
      <TabsProvider>
        <Tab name={'Account'} tabComponent={<></>} />
        <Tab name={'Password'} tabComponent={<></>} />
      </TabsProvider>
    </StyledSafeAreaView>
  );
};

export default TabsView;
