export interface Thumb {
  name: string;
  string: string;
}
export interface Post {
  _id?: string;
  author: {
    display_name: string;
  };
  content: string;
  created?: Date;
  files: Array<Thumb>;
  imagePath: string,
  isDraft: boolean;
  places: Array<any>;
  slug: string;
  title: string;
  updated?: Date;
}
