import React from 'react';
import {
  StyledImage,
  StyledSafeAreaView,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../StyledComponentsContstants';
import { useToast } from './ToastNotificationProvider';

const ToastNotificationView = () => {
  const {Toast} = useToast();

  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center">
      <StyledView className="relative space-y-5">
        <StyledView className="relative">
          <StyledText className="mb-2 text-sm font-medium text-center text-gray-500">
            Types
          </StyledText>
          <StyledView className="relative px-10 space-y-2">
            <StyledTouchableOpacity
              onPress={() => Toast.show('Default Toast Notification')}
              className="inline-flex flex-row items-center justify-center flex-shrink-0 px-3 py-1 border rounded-md h-9">
              <StyledText className="text-sm font-medium text-black">
                Default
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity
              onPress={() =>
                Toast.show('Default Toast Notification', {
                  description: 'This is an example toast notification',
                })
              }
              className="inline-flex flex-row items-center justify-center flex-shrink-0 px-3 py-1 border rounded-md h-9">
              <StyledText className="text-sm font-medium text-black">
                With Description
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity
              onPress={() =>
                Toast.show('Default Toast Notification', {type: 'success'})
              }
              className="inline-flex flex-row items-center justify-center flex-shrink-0 px-3 py-1 border rounded-md h-9">
              <StyledText className="text-sm font-medium text-black">
                Success
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity
              onPress={() =>
                Toast.show('Default Toast Notification', {type: 'info'})
              }
              className="inline-flex flex-row items-center justify-center flex-shrink-0 px-3 py-1 border rounded-md h-9">
              <StyledText className="text-sm font-medium text-black">
                Info
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity
              onPress={() =>
                Toast.show('Default Toast Notification', {type: 'warning'})
              }
              className="inline-flex flex-row items-center justify-center flex-shrink-0 px-3 py-1 border rounded-md h-9">
              <StyledText className="text-sm font-medium text-black">
                Warning
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity
              onPress={() =>
                Toast.show('Default Toast Notification', {type: 'danger'})
              }
              className="inline-flex flex-row items-center justify-center flex-shrink-0 px-3 py-1 border rounded-md h-9">
              <StyledText className="text-sm font-medium text-black">
                Danger
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity
              onPress={() =>
                Toast.show('Default Toast Notification', {
                  customComponent: (
                    <StyledView className="relative flex-row items-start justify-center">
                      <StyledImage
                        source={{
                          uri: 'https://cdn.devdojo.com/images/august2023/headshot-new.jpeg',
                        }}
                        className="w-10 h-10 mr-2 rounded-full"
                      />
                      <StyledView>
                        <StyledText className="text-sm font-medium text-gray-800">
                          New Friend Request
                        </StyledText>
                        <StyledText className="mt-1 text-xs leading-none text-gray-800">
                          Friend request from John Doe.
                        </StyledText>
                        <StyledView className="flex-row mt-3">
                          <StyledTouchableOpacity className="inline-flex flex-row items-center px-2 py-1 bg-indigo-600 rounded shadow-sm">
                            <StyledText className="text-xs font-semibold text-white">
                              Accept
                            </StyledText>
                          </StyledTouchableOpacity>
                          <StyledTouchableOpacity className="inline-flex flex-row items-center px-2 py-1 ml-3 bg-white rounded shadow-sm">
                            <StyledText className="text-xs font-semibold text-gray-900">
                              Decline
                            </StyledText>
                          </StyledTouchableOpacity>
                        </StyledView>
                      </StyledView>
                    </StyledView>
                  ),
                })
              }
              className="inline-flex flex-row items-center justify-center flex-shrink-0 px-3 py-1 border rounded-md h-9">
              <StyledText className="text-sm font-medium text-black">
                Custom
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
        <StyledView className="relative">
          <StyledText className="mb-2 text-sm font-medium text-center text-gray-500">
            Position
          </StyledText>
          <StyledView className="relative flex flex-col px-10 space-y-2">
            <StyledTouchableOpacity
              onPress={() =>
                Toast.show('Default Toast Notification', {position: 'top'})
              }
              className="inline-flex flex-row items-center justify-center flex-shrink-0 px-3 py-1 border rounded-md h-9">
              <StyledText className="text-sm font-medium text-black">
                Top
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity
              onPress={() =>
                Toast.show('Default Toast Notification', {position: 'bottom'})
              }
              className="inline-flex flex-row items-center justify-center flex-shrink-0 px-3 py-1 border rounded-md h-9">
              <StyledText className="text-sm font-medium text-black">
                Bottom
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledSafeAreaView>
  );
};

export default ToastNotificationView;
