import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import { IssueItemType } from './types';

const useIssueItemLogic = (props: IssueItemType) => {
  const { item, onSelectItem, selectedItem, calculateSections } = props;
  const [isSelected, setIsSelected] = useState(selectedItem === item.id);

  useEffect(() => {
    setIsSelected(selectedItem === item.id);
  }, [selectedItem]);

  const onIssueSelect = () => onSelectItem(item);

  const bookmarkIssue = async () => {
    await AsyncStorage.setItem(
      `bookmark:${item.id}`,
      item.isBookmarked ? 'false' : 'true'
    );
    calculateSections();
  };

  return {
    isSelected,
    bookmarkIssue,
    onIssueSelect,
  };
};

export default useIssueItemLogic;
