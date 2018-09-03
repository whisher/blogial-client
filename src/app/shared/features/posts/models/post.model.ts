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
  files: any; /* Json */
  imagePath: string,
  isDraft: boolean;
  places: any; /* Json */
  slug: string;
  tags: any, /* Json */
  title: string;
  updated?: Date;
}
