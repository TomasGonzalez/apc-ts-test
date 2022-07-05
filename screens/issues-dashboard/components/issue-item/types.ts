import { Issue } from 'types';

export interface IssueItemType {
  item: Issue;
  calculateSections: () => void;
  selectedItem?: number | null;
  onSelectItem: (issue: Issue) => void;
}
