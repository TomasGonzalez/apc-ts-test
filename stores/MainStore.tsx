import create from 'zustand';

import gitHubClient from 'api/gitHubClient';

import { GlobalState } from './types';

const useStore = create<GlobalState>()((set, get) => ({
  getGitHubIssues: async () => {
    // const request = await gitHubClient.request('GET /orgs/{org}/issues', {
    //   org: get().organization,
    // });
    const { data } = await gitHubClient.request('GET /orgs/{org}/issues', {
      org: get().organization,
    });
    console.log(data, 'my good dollar issues');
    // set((state: GlobalState) => ({ gitHubIssues: [...state.gitHubIssues] }));
  },
  gitHubIssues: [],
  setOrganization: (org: string) =>
    set({
      organization: org,
    }),
  organization: 'GoodDollar',
}));

export default useStore;
