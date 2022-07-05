export interface UserOrgs {
  id: string;
  title: string | null;
}

interface reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  confused: number;
  heart: number;
  hooray: number;
  eyes: number;
  rocket: number;
}

export interface Issue {
  isBookmarked?: boolean;
  id: number;
  title: string | null;
  state: string;
  repository_url: string;
  url: string;
  reactions?: reactions | undefined;
}
