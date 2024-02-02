/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useEffect, useState } from 'react';
import {
  StyledImage,
  StyledTextInput,
  StyledView,
} from '../../StyledComponentsContstants';
import Images from '../../assets/Images';

/**
 * This component encapsulates the entire command menu, providing a searchable interface for user commands.
 */

const Command = ({children}) => {
  const [searchText, setSearchText] = useState('');
  const [initialData, setInitialData] = useState({});
  const [commandsDataList, setCommandsDataList] = useState({});

  const getCommandListData = () => {
    let data = {};
    React.Children.map(children, (childI, indexI) => {
      const sectionTitle =
        childI?.props?.title ?? `Command Section ${indexI + 1}`;

      data[sectionTitle] = [];
      React.Children.map(childI.props?.children, (childJ, indexJ) => {
        
        const itemTitle = childJ?.props?.title ?? '';

        data[sectionTitle]?.push({
          title: itemTitle,
          leftIcon: childJ?.props?.leftIcon,
          defaultOption: childJ?.props?.defaultOption ?? true,
        });
      });
    });
    setInitialData(data);
    setCommandsDataList(data);
  };

  useEffect(() => {
    getCommandListData();
  }, []);

  const onChangeText = text => {
    setSearchText(text);
    if (initialData) {
      let commandsList = {};
      if (text !== '') {
        Object.keys(initialData).filter(sectionListKey => {
          const filteredData = initialData[sectionListKey].filter(listItem =>
            listItem.title.toLowerCase().includes(text.toLowerCase()),
          );
          if (filteredData.length > 0) {
            commandsList[sectionListKey] = filteredData;
          }
        });
        setCommandsDataList(commandsList);
      } else {
        getCommandListData();
      }
    }
  };

  return (
    <StyledView className={styles.container}>
      <StyledView
        className={`${styles.inputContainer} ${
          Object.keys(commandsDataList).length > 0 && 'border-b'
        }`}>
        <StyledImage source={Images.search} className={styles.searchLogo} />
        <StyledTextInput
          className={styles.input}
          placeholder="Type a command or search..."
          autoComplete={'off'}
          value={searchText}
          cursorColor={'black'}
          autoCorrect={false}
          spellCheck={false}
          onChangeText={onChangeText}
        />
      </StyledView>
      {React.Children.map(children, (child, index) => {
        const title = child?.props?.title ?? `Command Section ${index + 1}`;

        return React.cloneElement(child, {
          index: index,
          data: commandsDataList,
          isSearchData: searchText !== '',
          title: title,
        });
      })}
    </StyledView>
  );
};

const styles = {
  container: 'bg-white border border-gray-300 rounded-lg shadow-sm',
  inputContainer: 'flex-row space-x-2 items-center h-11 border-gray-300 px-3',
  searchLogo: 'w-4 h-4 opacity-40',
  input: 'flex-1 text-base p-0 leading-4',
  listContainer: 'max-h-[320px] overflow-y-auto',
  renderItemContainer: 'pb-1',
  sectionTitleTextContainer: 'px-3 py-1 my-1',
  sectionTitleText: 'text-xs font-medium text-neutral-500',
};

export default Command;
