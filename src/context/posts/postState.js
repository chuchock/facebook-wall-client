import React, { useReducer } from 'react';
import axiosClient from '../../config/axios';

import postContext from './postContext';
import postReducer from './postReducer';

import { GET_POSTS, ADD_POST, DELETE_POST, UPDATE_POST } from '../../types';

const PostState = (props) => {
  const initialState = {
    posts: [],
    post: null,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  const getPosts = async () => {
    try {
      const result = await axiosClient.get('/api/posts');

      dispatch({
        type: GET_POSTS,
        payload: result.data.posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = async (post) => {
    console.log(post);

    try {
      const result = await axiosClient.post('/api/posts', post);

      dispatch({
        type: ADD_POST,
        payload: result.data,
      });

      window.scrollTo(0, 300);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (post) => {
    console.log(post);
    try {
      const result = await axiosClient.put(`/api/posts/${post._id}`, post);
      console.log(result);
      dispatch({
        type: UPDATE_POST,
        payload: result.data.post,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axiosClient.delete(`/api/posts/${postId}`);

      dispatch({
        type: DELETE_POST,
        payload: postId,
      });

      //getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <postContext.Provider
      value={{
        posts: state.posts,
        getPosts,
        addPost,
        deletePost,
        updatePost,
      }}
    >
      {props.children}
    </postContext.Provider>
  );
};

export default PostState;
