import { GET_POSTS, ADD_POST, DELETE_POST, UPDATE_POST } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        // formulario: false,
        // errorFormulario: false,
      };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        // post: null,
      };

    default:
      return state;
  }
};
