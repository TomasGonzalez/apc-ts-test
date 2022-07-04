export interface GlobalState {
  getGitHubIssues: () => void;
  setOrganization: (org: string) => void;
  gitHubIssues: Array<Record<string, unknown>>;
  organization: string;
}
