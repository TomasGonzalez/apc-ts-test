import { useCallback, useEffect, useState } from 'react';

import gitHubClient from 'api/gitHubClient';
import useStore from 'stores/MainStore';
import { UserOrgs } from 'types';

const useOrgPickerLogic = () => {
  const [userOrgs, setUserOrgs] = useState<UserOrgs[]>([]);
  const setOrganization = useStore((state) => state.setOrganization);

  const getGitHubOrgs = useCallback(async () => {
    try {
      const { data } = await gitHubClient.request('GET /user/orgs');
      setUserOrgs(() =>
        data.map((org) => ({ id: `${org.id}`, title: org.login }))
      );
    } catch (err) {
      console.log(err, 'send it to sentry or something');
    }
  }, []);

  const _setOrganization = useCallback((org: UserOrgs) => {
    setOrganization(org);
  }, []);

  useEffect(() => {
    getGitHubOrgs();
  }, []);

  return {
    onSelectItem: _setOrganization,
    dataSet: userOrgs,
    textInputProps: {
      placeholder: 'Select Organization',
    },
  };
};

export default useOrgPickerLogic;
