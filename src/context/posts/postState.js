import React, { useReducer } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import postContext from './postContext';
import postReducer from './postReducer';

import { GET_POSTS, ADD_POST, DELETE_POST } from '../../types';

const PostState = (props) => {
  const posts = [];

  const initialState = {
    posts: [],
    post: null,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(postReducer, initialState);

  // Serie de funciones para el CRUD
  // const mostrarFormulario = () => {
  //   dispatch({
  //     type: FORMULARIO_PROYECTO,
  //   });
  // };

  // Obtener los proyectos
  const getPosts = () => {
    dispatch({
      type: GET_POSTS,
      payload: posts,
    });
  };

  // Agregar nuevo proyecto
  const addPost = (post) => {
    console.log(post);
    dispatch({
      type: ADD_POST,
      payload: post,
    });
  };

  // Validar formulario por errores
  // const mostrarError = () => {
  //   dispatch({
  //     type: VALIDAR_FORMULARIO,
  //   });
  // };

  // Selecciona el proyecto que el usuario dio click
  // const proyectoActual = (postId) => {
  //   dispatch({
  //     type: PROYECTO_ACTUAL,
  //     payload: proyectoId,
  //   });
  // };

  // Eliminar un proyecto
  const deletePost = (postId) => {
    dispatch({
      type: DELETE_POST,
      payload: postId,
    });
  };

  return (
    <postContext.Provider
      value={{
        posts: state.posts,
        getPosts,
        addPost,
        deletePost,
      }}
    >
      {props.children}
    </postContext.Provider>
  );
};

export default PostState;
