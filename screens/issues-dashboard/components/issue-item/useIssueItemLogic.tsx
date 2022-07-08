import { useCallback, useEffect, useState } from 'react';
import asyncStorage from '@react-native-async-storage/async-storage';

import { Issue } from 'types';
import { IssueItemType } from './types';

export const setBookmarkedIssueToAsyncStorage = async (
  issue: Issue,
  _asyncStorage: typeof asyncStorage
) =>
  await _asyncStorage.setItem(
    `bookmark:${issue.id}`,
    issue.isBookmarked ? 'false' : 'true'
  );

const useIssueItemLogic = (props: IssueItemType) => {
  const { item: issue, onSelectItem, selectedItem, calculateSections } = props;
  const [isSelected, setIsSelected] = useState(selectedItem === issue.id);

  useEffect(() => {
    setIsSelected(selectedItem === issue.id);
  }, [selectedItem]);

  const onIssueSelect = () => onSelectItem(issue);

  const bookmarkIssue = useCallback(async () => {
    await setBookmarkedIssueToAsyncStorage(issue, asyncStorage);
    calculateSections();
  }, [issue]);

  return {
    isSelected,
    bookmarkIssue,
    onIssueSelect,
  };
};

export default useIssueItemLogic;
