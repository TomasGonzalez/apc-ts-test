import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { IssueItemType } from './types';
import useIssueItemLogic from './useIssueItemLogic';

const ItemTouchableOpacity = styled.TouchableOpacity`
  margin-top: 4px;
  padding: ${(props: ThemeProps) => props.theme.defaultPadding};
  background-color: ${(props: ThemeProps) => props.theme.colors.secondary};
  border-color: ${(props: ThemeProps & { selected: boolean }) =>
    props.selected ? props.theme.colors.contrast : 'transparent'};
  border-width: 1px 
  border-style: solid;
  flex-direction: row;
`;

const IssueItem = (props: IssueItemType) => {
  const { item } = props;
  const { isSelected, bookmarkIssue, onIssueSelect } = useIssueItemLogic(props);
  if (isSelected) {
    return (
      <ItemTouchableOpacity selected={isSelected}>
        <View>
          <TouchableOpacity onPress={bookmarkIssue}>
            {item.isBookmarked ? (
              <FontAwesome name='bookmark' size={24} color='black' />
            ) : (
              <Feather name='bookmark' size={24} color='black' />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Text>Selected:</Text>
          <Text>Title: {item.title}</Text>
          <Text>Repo url: {item.repository_url}</Text>
          <Text>Issue url: {item?.url}</Text>
        </View>
      </ItemTouchableOpacity>
    );
  }

  return (
    <ItemTouchableOpacity onPress={onIssueSelect}>
      <Text>{item.title}</Text>
    </ItemTouchableOpacity>
  );
};

export default IssueItem;
