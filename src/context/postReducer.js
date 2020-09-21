import { GET_POSTS, ADD_POST, DELETE_POST } from '../types';

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
        posts: [...state.posts, action.payload],
        // formulario: false,
        // errorFormulario: false,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        post: null,
      };

    default:
      return state;
  }
};
