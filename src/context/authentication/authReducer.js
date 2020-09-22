import {
  SUCCESSFUL_REGISTRATION,
  GET_USER,
  SIGN_OFF,
  SUCCESSFUL_LOGIN,
  LOGIN_ERROR,
  REGISTER_ERROR,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case SUCCESSFUL_REGISTRATION:
    case SUCCESSFUL_LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
        loading: false,
      };

    case GET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
      };

    case SIGN_OFF:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        authenticated: null,
        message: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
