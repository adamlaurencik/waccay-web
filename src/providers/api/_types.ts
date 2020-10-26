import { DateTime } from 'luxon';

export type RegisterUserType = {
  email: string;
  password: string;
  name: string;
  surname: string;
  userName: string;
};

export type CreatePostType = {
  description: string;
  name: string;
  image: File;
};

export type PostType = {
  id: string;
  imageLink: string;
  createdAt: DateTime;
};

export type WaccayApiContextType = {
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  registerUser: (registerData: RegisterUserType) => Promise<void>;
  followUser: (followerId: string) => Promise<void>;
  unFollowUser: (followerId: string) => Promise<void>;
  likePost: (postId: string) => Promise<void>;
  unLikePost: (postId: string) => Promise<void>;
  createPost: (postData: CreatePostType) => Promise<void>;
  getMyPosts: () => Promise<PostType[]>;
  getPostsOfUser: (userId: string) => Promise<PostType[]>;
  getFeed: (cursor?: DateTime) => Promise<PostType[]>;
  currentUser?: firebase.User;
};
