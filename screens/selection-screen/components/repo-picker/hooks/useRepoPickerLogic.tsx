import { useCallback, useEffect, useState } from 'react';

import useStore from 'stores/MainStore';
import gitHubClient from 'api/gitHubClient';
import { TAutocompleteDropdownItem } from 'react-native-autocomplete-dropdown';

const useRepoPickerLogic = () => {
  const setRepository = useStore((state) => state.setRepository);
  const organization = useStore((state) => state.organization);
  const [repositories, setRepositories] = useState<
    TAutocompleteDropdownItem[] | []
  >([]);

  const getGitHubRepos = useCallback(async () => {
    try {
      if (organization?.title) {
        const { data } = await gitHubClient.request('GET /orgs/{org}/repos', {
          org: organization.title,
        });
        return setRepositories(
          data.map((repo) => ({
            title: repo.name,
            id: `${repo?.id}`,
          }))
        );
      }
      return setRepositories([]);
    } catch (err) {
      console.log(err, 'send it to sentry or something');
    }
  }, [organization]);

  const _setRepositorie = useCallback((repo: TAutocompleteDropdownItem) => {
    setRepository(repo?.title as string);
  }, []);

  useEffect(() => {
    getGitHubRepos();
  }, [getGitHubRepos]);

  return {
    onSelectItem: _setRepositorie,
    dataSet: repositories,
    textInputProps: {
      placeholder: 'Select Repository',
    },
  };
};

export default useRepoPickerLogic;
