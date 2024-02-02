import React, { useState } from 'react';
import {
  StyledImage,
  StyledSafeAreaView,
  StyledTouchableOpacity,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';
import Popover from './Popover';
import PopoverItem from './PopoverItem';

const PopoverView = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [value, setValue] = useState({
    width: '100%',
    maxWidth: '300px',
    height: '25px',
    maxHeight: 'none',
  });

  const PopoverButton = (
    <StyledTouchableOpacity
      onPress={() => setPopoverVisible(!popoverVisible)}
      className="flex items-center justify-center w-10 h-10 bg-white border rounded-full shadow-sm border-neutral-200/70">
      <StyledImage source={Images.popover} className="w-4 h-4" />
    </StyledTouchableOpacity>
  );

  const handleChangeText = (text, key) => {
    setValue(prevVal => ({...prevVal, [key]: text}));
  };

  return (
    <StyledSafeAreaView className="h-full items-center justify-center">
      <Popover
        popOverButton={PopoverButton}
        visible={popoverVisible}
        heading={'Dimensions'}
        width={300}
        description={'Set the dimensions for the layer.'}
        position={'bottom'}>
        <PopoverItem
          title={'Width'}
          value={value.width}
          onChangeText={text => handleChangeText(text, 'width')}
        />
        <PopoverItem
          title={'Max. width'}
          value={value.maxWidth}
          onChangeText={text => handleChangeText(text, 'maxWidth')}
        />
        <PopoverItem
          title={'Height'}
          value={value.height}
          onChangeText={text => handleChangeText(text, 'height')}
        />
        <PopoverItem
          title={'Max. height'}
          value={value.maxHeight}
          onChangeText={text => handleChangeText(text, 'maxHeight')}
        />
      </Popover>
    </StyledSafeAreaView>
  );
};

export default PopoverView;
