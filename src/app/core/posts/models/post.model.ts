export interface Image {
  src: string;
  name: string;
}
export interface Post {
  _id?: string;
  author: {
    display_name: string;
  };
  content: string;
  created?: Number;
  files: any; // Json
  imagePath: string,
  isDraft: boolean;
  places: any; // Json
  slug: string;
  tags: any, // Json
  title: string;
  updated?: Number;
}
export interface Thumb {
  name: string;
  string: string;
}
