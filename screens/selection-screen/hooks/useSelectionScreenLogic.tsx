import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import useStore from 'stores/MainStore';

const useSelectionScreenLogic = () => {
  const organization = useStore((state) => state.organization);
  const repository = useStore((state) => state.repository);
  const navigation = useNavigation();

  const onNavigateToIssues = useCallback(() => {
    navigation.navigate('Issues' as never);
  }, [organization, repository]);

  const isButtonDisabled = () => {
    return !organization || !repository;
  };

  return { onNavigateToIssues, isButtonDisabled };
};

export default useSelectionScreenLogic;
