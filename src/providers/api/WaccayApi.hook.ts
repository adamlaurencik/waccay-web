import { DateTime } from 'luxon';
import { useCallback, useState } from 'react';
import {
  WaccayApiContextType,
  CreatePostType,
  PostType,
  RegisterUserType,
} from './_types';
import waccayAxios from './WaccayAxios';
import FirebaseAppService from './FirebaseAppService';

export function useWaccayApi(): WaccayApiContextType {
  const [currentUser, setCurrentUser] = useState<firebase.User | undefined>(
    FirebaseAppService.auth().currentUser ?? undefined
  );

  const createPost = useCallback(async (postData: CreatePostType) => {
    await waccayAxios.post('/post/createPost', postData);
  }, []);

  const followUser = useCallback(async (userId: string) => {
    await waccayAxios.put(`/user/follow/${userId}`);
  }, []);

  const unFollowUser = useCallback(async (userId: string) => {
    await waccayAxios.delete(`/user/follow/${userId}`);
  }, []);

  const likePost = useCallback(async (postId: string) => {
    await waccayAxios.put(`/post/like/${postId}`);
  }, []);

  const unLikePost = useCallback(async (postId: string) => {
    await waccayAxios.delete(`/post/like/${postId}`);
  }, []);

  const getFeed = useCallback(async (cursor?: DateTime) => {
    const params = cursor ? { cursor: cursor.toMillis() } : undefined;
    const response = await waccayAxios.get<PostType[]>('/post/createPost', {
      params,
    });
    return response.data;
  }, []);

  const getMyPosts = useCallback(async () => {
    const response = await waccayAxios.get<PostType[]>('/post/my');
    return response.data;
  }, []);

  const getPostsOfUser = useCallback(async (userName: string) => {
    const response = await waccayAxios.get<PostType[]>(`/post/${userName}`);
    return response.data;
  }, []);

  const registerUser = useCallback(async (createUserDto: RegisterUserType) => {
    await waccayAxios.post(`/user/register`, createUserDto);
  }, []);

  const loginWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      await FirebaseAppService.auth().signInWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(FirebaseAppService.auth().currentUser ?? undefined);
    },
    []
  );

  return {
    createPost,
    followUser,
    getFeed,
    getMyPosts,
    getPostsOfUser,
    likePost,
    loginWithEmailAndPassword,
    registerUser,
    unFollowUser,
    unLikePost,
    currentUser,
  };
}
