export interface Post {
  _id?: string;
  author: string;
  content: string;
  created?: Date;
  isDraft: boolean;
  title: string;
  updated?: Date;
}
