import React, { useState } from 'react';
import { StyledSafeAreaView } from '../../StyledComponentsContstants';
import Select from './Select';
import SelectItem from './SelectItem';

const SelectView = () => {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <StyledSafeAreaView className="h-full m-5">
      <Select onSelect={title => setSelectedItem(title)}>
        <SelectItem title={'Milk'} />
        <SelectItem title={'Eggs'} />
        <SelectItem title={'Cheese'} />
        <SelectItem title={'Bread'} />
        <SelectItem title={'Apples'} />
        <SelectItem title={'Bananas'} />
        <SelectItem title={'Yogurt'} />
        <SelectItem title={'Sugar'} />
        <SelectItem title={'Salt'} />
        <SelectItem title={'Coffee'} />
        <SelectItem title={'Tea'} />
      </Select>
    </StyledSafeAreaView>
  );
};

export default SelectView;
