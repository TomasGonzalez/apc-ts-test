import { setBookmarkedIssueToAsyncStorage } from './useIssueItemLogic';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

const mockIssueInitial = {
  id: 1068801476,
  repository_url: 'https://api.github.com/repos/GoodDollar/GoodContracts',
  state: 'open',
  title: 'chore(deps): bump tmpl from 1.0.4 to 1.0.5 in /stakingModel',
  url: 'https://api.github.com/repos/GoodDollar/GoodContracts/issues/217',
};

const mockIssueBookmarkedFalse = {
  id: 1068801476,
  repository_url: 'https://api.github.com/repos/GoodDollar/GoodContracts',
  state: 'open',
  title: 'chore(deps): bump tmpl from 1.0.4 to 1.0.5 in /stakingModel',
  url: 'https://api.github.com/repos/GoodDollar/GoodContracts/issues/217',
  isBookmarked: false,
};

const mockIssueBookmarkedTrue = {
  id: 1068801476,
  repository_url: 'https://api.github.com/repos/GoodDollar/GoodContracts',
  state: 'open',
  title: 'chore(deps): bump tmpl from 1.0.4 to 1.0.5 in /stakingModel',
  url: 'https://api.github.com/repos/GoodDollar/GoodContracts/issues/217',
  isBookmarked: true,
};

test('Test for: bookmarked issue when initialized.', async () => {
  await setBookmarkedIssueToAsyncStorage(mockIssueInitial, mockAsyncStorage);

  const expectedResult = 'true';

  expect(
    await mockAsyncStorage.getItem(`bookmark:${mockIssueInitial.id}`)
  ).toBe(expectedResult);
});

test('Test for: bookmarked issue when false.', async () => {
  await setBookmarkedIssueToAsyncStorage(
    mockIssueBookmarkedFalse,
    mockAsyncStorage
  );

  const expectedResult = 'true';

  expect(
    await mockAsyncStorage.getItem(`bookmark:${mockIssueBookmarkedFalse.id}`)
  ).toBe(expectedResult);
});

test('Test for: bookmarked issue when true.', async () => {
  await setBookmarkedIssueToAsyncStorage(
    mockIssueBookmarkedTrue,
    mockAsyncStorage
  );

  const expectedResult = 'false';

  expect(
    await mockAsyncStorage.getItem(`bookmark:${mockIssueBookmarkedTrue.id}`)
  ).toBe(expectedResult);
});
