import { UserOrgs } from 'types';

export interface GlobalState {
  getGitHubIssues?: () => void;
  gitHubIssues?: Array<Record<string, unknown>>;
  setOrganization: (org: UserOrgs) => void;
  organization: UserOrgs | null;
  repository: string | null;
  setRepository: (repo: string) => void;
}
