import { useCallback, useEffect, useState } from 'react';

import gitHubClient from 'api/gitHubClient';
import useStore from 'stores/MainStore';

const useOrgPickerLogic = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const setOrganization = useStore((state) => state.setOrganization);

  const getGitHubOrgs = useCallback(async () => {
    const { data } = await gitHubClient.request('GET /organizations');
    console.log(data);
  }, []);

  useEffect(() => {
    getGitHubOrgs();
  }, [getGitHubOrgs]);

  return {
    clearOnFocus: false,
    closeOnBlur: true,
    closeOnSubmit: false,
    onSelectItem: () => setSelectedItem,
    dataSet: [
      { id: '1', title: 'Alpha' },
      { id: '2', title: 'Beta' },
      { id: '3', title: 'Gamma' },
    ],
  };
};

export default useOrgPickerLogic;
