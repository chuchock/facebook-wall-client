import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import axiosClient from '../../config/axios';
import authToken from '../../config/token';

import {
  SUCCESSFUL_REGISTRATION,
  GET_USER,
  SIGN_OFF,
  SUCCESSFUL_LOGIN,
  LOGIN_ERROR,
  REGISTER_ERROR,
  RESET_MESSAGE,
} from '../../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const authenticatedUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      authToken(token);
    }

    try {
      const response = await axiosClient.get('/api/auth');

      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const registerUser = async (data) => {
    try {
      const response = await axiosClient.post('/api/users', data);

      dispatch({
        type: SUCCESSFUL_REGISTRATION,
        payload: response.data,
      });

      authenticatedUser();
    } catch (error) {
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const signIn = async (data) => {
    try {
      const response = await axiosClient.post('/api/auth', data);

      dispatch({
        type: SUCCESSFUL_LOGIN,
        payload: response.data,
      });

      authenticatedUser();
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const signOff = () => {
    dispatch({
      type: SIGN_OFF,
    });
  };

  const resetMesssage = () => {
    dispatch({
      type: RESET_MESSAGE,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        loading: state.loading,
        registerUser,
        signIn,
        authenticatedUser,
        signOff,
        resetMesssage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
