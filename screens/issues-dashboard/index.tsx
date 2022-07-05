import React from 'react';
import { SectionList, Text } from 'react-native';

import MainView from 'components/main-view.tsx';
import useIssuesDashboardLogic from './hooks/useIssuesDashboardLogic';
import styled from 'styled-components';
import { ThemeProps } from 'styled-components/native';
import { IssuesStates } from './types';
import IssueItem from './components/issue-item';

const HeaderView = styled.View`
  padding: ${(props: ThemeProps) => props.theme.defaultPadding};
  background-color: ${(props: ThemeProps) => props.theme.colors.contrast};
`;

const FilterItemsButton = styled.TouchableOpacity`
  padding: ${(props: ThemeProps) => props.theme.defaultPadding};
  background-color: ${(props: ThemeProps) => props.theme.colors.primary};
`;

const IssuesDashboard = () => {
  const {
    sections,
    onEndReached,
    filterBy,
    changeFilterBy,
    selectedItem,
    onSelectItem,
    calculateSections,
  } = useIssuesDashboardLogic();

  return (
    <MainView>
      <SectionList
        sections={sections}
        ListHeaderComponent={() => (
          <FilterItemsButton onPress={changeFilterBy}>
            <Text> Filter by:{IssuesStates[filterBy]}</Text>
          </FilterItemsButton>
        )}
        renderItem={({ item }) => (
          <IssueItem
            item={item}
            selectedItem={selectedItem}
            onSelectItem={onSelectItem}
            calculateSections={calculateSections}
          />
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
