import React from 'react';
import { SectionList, Text } from 'react-native';

import MainView from 'components/main-view.tsx';
import useIssuesDashboardLogic from './hooks/useIssuesDashboardLogic';
import styled from 'styled-components';
import { ThemeProps } from 'styled-components/native';
import { IssuesStates } from './types';

const HeaderView = styled.View`
  padding: ${(props: ThemeProps) => props.theme.defaultPadding};
  background-color: ${(props: ThemeProps) => props.theme.colors.contrast};
`;

const ItemView = styled.View`
  margin-top: 4px;
  padding: ${(props: ThemeProps) => props.theme.defaultPadding};
  background-color: ${(props: ThemeProps) => props.theme.colors.secondary};
`;

const FilterItemsButton = styled.TouchableOpacity`
  padding: ${(props: ThemeProps) => props.theme.defaultPadding};
  background-color: ${(props: ThemeProps) => props.theme.colors.primary};
`;

const IssuesDashboard = () => {
  const { sections, onEndReached, filterBy, changeFilterBy } =
    useIssuesDashboardLogic();

  return (
    <MainView>
      <SectionList
        sections={sections}
        ListHeaderComponent={() => (
          <FilterItemsButton onPress={changeFilterBy}>
            <Text> Fileter by:{IssuesStates[filterBy]}</Text>
          </FilterItemsButton>
        )}
        renderItem={({ item }) => (
          <ItemView>
            <Text>{item.title}</Text>
          </ItemView>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <HeaderView>
            <Text>{title}</Text>
          </HeaderView>
        )}
        onEndReached={onEndReached}
      />
    </MainView>
  );
};

export default IssuesDashboard;
