import React, { useState } from 'react';
import {
  StyledImage,
  StyledPressable,
  StyledSafeAreaView,
  StyledText,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';
import DatePicker from './DatePicker';

const DatePickerView = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const renderInputButton = (
    <StyledView>
      <StyledText className="mb-1 text-base font-medium text-neutral-500">
        Select Date
      </StyledText>
      <StyledPressable
        onPress={() => setShowDatePicker(!showDatePicker)}
        className="flex-row items-center justify-between w-full px-3 py-2 bg-white border rounded-md border-neutral-300">
        <StyledText className="text-base text-neutral-600">
          {`${date?.toLocaleString('default', {
            month: 'short',
          })} ${date?.getDate()}, ${date?.toLocaleString(
            'default',
            {year: 'numeric'},
          )}`}
        </StyledText>
        <StyledImage
          source={Images.datePicker}
          className="w-6 h-6 opacity-40"
        />
      </StyledPressable>
    </StyledView>
  );

  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center m-2">
      <DatePicker
        onSelectDate={d => setDate(d)}
        visible={showDatePicker}
        onDismiss={() => setShowDatePicker(false)}
        datePickerInput={renderInputButton}
      />
    </StyledSafeAreaView>
  );
};

export default DatePickerView;
