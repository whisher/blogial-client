export interface Post {
  _id?: string;
  author: {
    display_name: string;
  };
  content: string;
  created?: Date;
  imagePath: string,
  isDraft: boolean;
  title: string;
  updated?: Date;
}
