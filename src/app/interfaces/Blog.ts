export default interface BlogEntry {
  id: number;
  title: string;
  contentPreview: string;
  author: string;
  likes: number;
  comments: number;
  likedByMe: boolean;
  createdByMe: boolean;
}

export interface BlogDetail {
  title: string;
  content: string;
  comments: Comment[];
  author: string;
  likes: number;
  likedByMe: boolean;
}

export interface Comment {
  content: string;
  date: string;
  author: string;
}
