export interface Post {
  _id?: string;
  author: {
    display_name: string;
  };
  content: string;
  created?: Date;
  files: Array<{src: string, name: string}>;
  imagePath: string,
  isDraft: boolean;
  places: Array<any>;
  title: string;
  updated?: Date;
}
