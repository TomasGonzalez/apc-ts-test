import { useCallback, useEffect, useState } from 'react';

import gitHubClient from 'api/gitHubClient';
import useStore from 'stores/MainStore';
import { Issue } from 'types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IssuesStates } from '../types';

const useIssuesDashboardLogic = () => {
  const organization = useStore((state) => state.organization);
  const repository = useStore((state) => state.repository);
  const [issuesList, setIssuesList] = useState<Issue[] | []>([]);
  const [filterBy, setFilterBy] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<null | number>(null);
  const [sections, setSections] = useState<{ title: string; data: Issue[] }[]>(
    []
  );

  const getIssues = useCallback(async () => {
    try {
      const { data } = await gitHubClient.request(
        'GET /repos/{owner}/{repo}/issues',
        {
          owner: organization?.title as string,
          repo: repository as string,
          page,
          per_page: 10,
        }
      );

      setIssuesList((_issues) => [
        ..._issues,
        ...data.map((issue) => ({
          title: issue?.title,
          id: issue?.id,
          state: issue?.state,
          repository_url: issue?.repository_url,
          url: issue.url,
        })),
      ]);
    } catch (err) {
      console.log(err, 'send it to sentry or something');
    }
  }, [organization, repository, page]);

  const onEndReached = useCallback(() => {
    setPage((_page) => _page + 1);
  }, []);

  const calculateSections = async () => {
    const bookmarkedIssues: Issue[] = [];
    const otherIssues: Issue[] = [];

    for (const _issue of issuesList) {
      // "bookmark:${issue.id}" should be saved as a constant in a config/utils file...
      const issueState = await AsyncStorage.getItem(`bookmark:${_issue.id}`);
      console.log(_issue.id, issueState, 'issue state');
      if (_issue.state === IssuesStates[filterBy] || !filterBy) {
        if (issueState === 'true') {
          bookmarkedIssues.push({ ..._issue, isBookmarked: true });
        } else {
          otherIssues.push({ ..._issue, isBookmarked: false });
        }
      }
    }

    setSections([
      { title: 'Bookmarked Issues', data: bookmarkedIssues },
      { title: 'All Issues', data: otherIssues },
    ]);
  };

  useEffect(() => {
    calculateSections();
  }, [issuesList, filterBy]);

  useEffect(() => {
    getIssues();
  }, [getIssues, page]);

  const changeFilterBy = () => {
    setFilterBy((_filter) => (_filter + 1) % 3);
  };

  const onSelectItem = (item: Issue) => {
    setSelectedItem(item.id);
  };

  return {
    sections: sections,
    onEndReached,
    calculateSections,
    changeFilterBy,
    filterBy,
    selectedItem,
    onSelectItem,
  };
};

export default useIssuesDashboardLogic;
