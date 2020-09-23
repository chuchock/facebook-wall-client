import React, { useReducer } from 'react';
import axiosClient from '../../config/axios';
import Swal from 'sweetalert2';

import postContext from './postContext';
import postReducer from './postReducer';

import { GET_POSTS, ADD_POST, DELETE_POST, UPDATE_POST, CHANGE_FILTER } from '../../types';

const PostState = (props) => {
  const initialState = {
    posts: [],
    selectedFilter: 'all',
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  const changeSelectedFilter = (filter) => {
    dispatch({
      type: CHANGE_FILTER,
      payload: filter,
    });
  };

  const getPosts = async (filter = 'all') => {
    try {
      const result = await axiosClient.get(`/api/posts/${filter}`);

      dispatch({
        type: GET_POSTS,
        payload: result.data.posts,
      });

      changeSelectedFilter(filter);
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = async (post) => {
    try {
      const result = await axiosClient.post('/api/posts', post);

      if (post.filter === state.selectedFilter || state.selectedFilter === 'all') {
        dispatch({
          type: ADD_POST,
          payload: result.data,
        });
      }

      await getPosts(state.selectedFilter);

      window.scrollTo(0, 300);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (post) => {
    try {
      const result = await axiosClient.put(`/api/posts/${post._id}`, post);

      dispatch({
        type: UPDATE_POST,
        payload: result.data.post,
      });

      await getPosts(state.selectedFilter);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postId) => {
    await Swal.fire({
      title: 'Are you sure to delete the post?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        axiosClient
          .delete(`/api/posts/${postId}`)
          .then(() => {
            dispatch({
              type: DELETE_POST,
              payload: postId,
            });

            Swal.fire('Done!', 'The post has been deleted.', 'success');
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          });
      }
    });
  };

  return (
    <postContext.Provider
      value={{
        posts: state.posts,
        selectedFilter: state.selectedFilter,
        getPosts,
        addPost,
        deletePost,
        updatePost,
        changeSelectedFilter,
      }}
    >
      {props.children}
    </postContext.Provider>
  );
};

export default PostState;
