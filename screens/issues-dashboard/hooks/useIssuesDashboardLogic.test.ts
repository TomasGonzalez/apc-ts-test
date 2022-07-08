import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { calculateSections } from './useIssuesDashboardLogic';
import { IssuesStates } from './../types';

const issuesListMock = [
  {
    id: 1068801476,
    repository_url: 'https://api.github.com/repos/GoodDollar/GoodContracts',
    state: 'open',
    title: 'chore(deps): bump tmpl from 1.0.4 to 1.0.5 in /stakingModel',
    url: 'https://api.github.com/repos/GoodDollar/GoodContracts/issues/217',
  },
  {
    id: 718991995,
    repository_url: 'https://api.github.com/repos/GoodDollar/GoodContracts',
    state: 'open',
    title: 'Provide API for users identity check',
    url: 'https://api.github.com/repos/GoodDollar/GoodContracts/issues/209',
  },
  {
    id: 705005375,
    repository_url: 'https://api.github.com/repos/GoodDollar/GoodContracts',
    state: 'closed',
    title: 'Store the time of the first and the last payment of a user',
    url: 'https://api.github.com/repos/GoodDollar/GoodContracts/issues/206',
  },
  {
    id: 498908385,
    repository_url: 'https://api.github.com/repos/GoodDollar/GoodContracts',
    state: 'closed',
    title: 'Gas station network',
    url: 'https://api.github.com/repos/GoodDollar/GoodContracts/issues/39',
  },
];

test('Test for: Separates issues into bookmarked and non bookmarked.', async () => {
  const issuesToBookmark = [issuesListMock[1], issuesListMock[3]];

  for (const issueToBookmark of issuesToBookmark) {
    await mockAsyncStorage.setItem(`bookmark:${issueToBookmark.id}`, 'true');
  }

  const expectedResult = [
    {
      title: 'Bookmarked Issues',
      data: [...issuesToBookmark].map((issue) => ({
        isBookmarked: true,
        ...issue,
      })),
    },
    {
      title: 'All Issues',
      data: [issuesListMock[0], issuesListMock[2]].map((issue) => ({
        isBookmarked: false,
        ...issue,
      })),
    },
  ];

  expect(
    await calculateSections(
      mockAsyncStorage,
      issuesListMock,
      IssuesStates['all']
    )
  ).toStrictEqual(expectedResult);
});

test('Test for: Filters to match open issues.', async () => {
  const issueToBookmark = 1;
  await mockAsyncStorage.setItem(
    `bookmark:${issuesListMock[issueToBookmark].id}`,
    'true'
  );

  const expectedResult = [
    {
      title: 'Bookmarked Issues',
      data: [issuesListMock[1]].map((issue) => ({
        isBookmarked: true,
        ...issue,
      })),
    },
    {
      title: 'All Issues',
      data: [issuesListMock[0]].map((issue) => ({
        isBookmarked: false,
        ...issue,
      })),
    },
  ];

  expect(
    await calculateSections(
      mockAsyncStorage,
      issuesListMock,
      IssuesStates['open']
    )
  ).toStrictEqual(expectedResult);
});

test('Filters to match closed issues.', async () => {
  const issueToBookmark = 1;
  await mockAsyncStorage.setItem(
    `bookmark:${issuesListMock[issueToBookmark].id}`,
    'true'
  );

  const expectedResult = [
    {
      title: 'Bookmarked Issues',
      data: [issuesListMock[3]].map((issue) => ({
        isBookmarked: true,
        ...issue,
      })),
    },
    {
      title: 'All Issues',
      data: [issuesListMock[2]].map((issue) => ({
        isBookmarked: false,
        ...issue,
      })),
    },
  ];

  expect(
    await calculateSections(
      mockAsyncStorage,
      issuesListMock,
      IssuesStates['closed']
    )
  ).toStrictEqual(expectedResult);
});
