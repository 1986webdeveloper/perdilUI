import React from 'react';
import { StyledSafeAreaView } from '../../StyledComponentsContstants';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

const AccordionView = () => {
  return (
    <StyledSafeAreaView className="flex-1 item-center justify-center m-3">
      <Accordion>
        <AccordionItem
          heading={'What is Perdil UI Kit?'}
          content={
            'Perdil UI Kit is a UI library built for React Native using TailwindCSS.'
          }
        />
        <AccordionItem
          heading={'How do I install Perdil UI Kit?'}
          content={
            'Add Perdil UI Kit library and then use any of the elements into your project.'
          }
        />
        <AccordionItem
          heading={'Can I use Perdil UI Kit with other libraries?'}
          content={'Absolutely! Perdil UI Kit works with any other library.'}
        />
      </Accordion>
    </StyledSafeAreaView>
  );
};

export default AccordionView;
