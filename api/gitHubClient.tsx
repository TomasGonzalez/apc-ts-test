import { Octokit } from '@octokit/core';
import { GIT_HUB_ACCESS_KEY } from '@env';

const gitHubClient = new Octokit({
  auth: GIT_HUB_ACCESS_KEY,
});

export default gitHubClient;
