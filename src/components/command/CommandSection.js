/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React from 'react';
import { StyledText, StyledView } from '../../StyledComponentsContstants';

/**
 * This component allows for logical grouping of related command items, enhancing the user's ability to navigate the command menu.
 */

const CommandSection = ({title, children, ...commandData}) => {
  return (
    children &&
    title in commandData.data && (
      <StyledView className={styles.renderItemContainer}>
        <StyledView>
          <StyledView className={styles.sectionTitleTextContainer}>
            <StyledText className={styles.sectionTitleText}>{title}</StyledText>
          </StyledView>
        </StyledView>

        {commandData?.data?.[title]?.map((data, ind) => {
          const dataIndex = commandData?.isSearchData
            ? children?.findIndex(item => item?.props?.title === data?.title)
            : ind;
          return (
            dataIndex >= 0 && (
              <StyledView key={ind?.toString()}>
                {React.cloneElement(children[dataIndex], {
                  data,
                  isSearchData: commandData?.isSearchData,
                })}
              </StyledView>
            )
          );
        })}
      </StyledView>
    )
  );
};

const styles = {
  renderItemContainer: 'pb-1',
  sectionTitleTextContainer: 'px-3 py-1 my-1',
  sectionTitleText: 'text-sm font-medium text-neutral-500',
};

export default CommandSection;
