import React, { useState, useContext } from 'react';
import postContext from '../context/postContext';

const MakePost = () => {
  const postsContext = useContext(postContext);
  const { addPost } = postsContext;

  const [post, setPost] = useState({
    content: '',
    filter: 'friends',
  });

  const { content, filter } = post;

  const onChangePost = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitPost = (e) => {
    e.preventDefault();

    if (content === '') {
      // showError();
      return;
    }

    addPost(post);

    setPost({
      content: '',
    });
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Create post</h5>

        <form onSubmit={onSubmitPost}>
          <div className="form-group">
            <textarea
              placeholder="What's happening?"
              rows="5"
              className="form-control"
              name="content"
              value={content}
              onChange={onChangePost}
            />
          </div>

          <div className="form-row">
            <div className="col-md-4"></div>
            <select
              name="filter"
              value={filter}
              className="form-control col-md-4"
              onChange={onChangePost}
            >
              <option value="friends">Friends</option>
              <option value="public">public</option>
            </select>

            <input type="submit" className="btn btn-primary col-md-4" value="Publish" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakePost;
