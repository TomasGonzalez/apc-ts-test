import { UserOrgs } from 'types';

export interface GlobalState {
  // getGitHubIssues: () => void;
  gitHubIssues: Array<Record<string, unknown>>;
  setOrganization: (org: UserOrgs) => void;
  organization: UserOrgs | null;
  repository: any;
  setRepository: any;
}
