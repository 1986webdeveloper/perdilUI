import React, { useState } from 'react';
import { StyledSafeAreaView } from '../../StyledComponentsContstants';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

const RadioGroupView = () => {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <StyledSafeAreaView className="h-full justify-center mx-3">
      <RadioGroup onSelect={title => setSelectedItem(title)}>
        <Radio
          title={'Tailwind CSS'}
          description={
            'A utility-first CSS framework for rapid UI development.'
          }
        />
        <Radio
          title={'Alpine JS'}
          description={'A rugged and lightweight JavaScript framework.'}
        />
        <Radio
          title={'Laravel'}
          description={'The PHP Framework for Web Artisans.'}
        />
      </RadioGroup>
    </StyledSafeAreaView>
  );
};

export default RadioGroupView;
