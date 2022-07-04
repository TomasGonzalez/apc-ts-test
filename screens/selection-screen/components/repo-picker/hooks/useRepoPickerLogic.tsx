import { useCallback, useEffect, useState } from 'react';
import useStore from 'stores/MainStore';

import gitHubClient from 'api/gitHubClient';

const useRepoPickerLogic = () => {
  const setRepository = useStore((state) => state.setRepository);
  const organization = useStore((state) => state.organization);
  const [repositories, setRepositories] = useState<Record<string, unknown>[]>(
    []
  );

  const getGitHubRepos = useCallback(async () => {
    try {
      if (organization?.title) {
        const { data } = await gitHubClient.request('GET /orgs/{org}/repos', {
          org: organization.title,
        });

        return setRepositories(
          data.map((repo) => ({ title: repo.full_name, id: repo.id }))
        );
      }
      return setRepositories([]);
    } catch (err) {
      console.log(err, 'send it to sentry or something');
    }
  }, [organization]);

  const _setRepositorie = useCallback((repo: Record<string, unknown>) => {
    setRepository(repo?.title);
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
