import create from 'zustand';

import gitHubClient from 'api/gitHubClient';

import { GlobalState } from './types';
import { UserOrgs } from 'types';

const useStore = create<GlobalState>()((set) => ({
  // getGitHubIssues: null,
  gitHubIssues: [],
  setOrganization: (org: UserOrgs) =>
    set({
      organization: org,
    }),
  organization: null,
  setRepository: (repo: string) => set({ repository: repo }),
  repository: null,
}));

export default useStore;
