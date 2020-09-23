import React, { useState, useContext } from 'react';
import postContext from '../context/posts/postContext';
import fileUploadImage from '../assets/image.svg';

const MakePost = () => {
  const postsContext = useContext(postContext);
  const { addPost } = postsContext;

  const [post, setPost] = useState({
    content: '',
    filter: 'friends',
  });

  const { content, filter } = post;

  const [btnDisabled, setBtnDisabled] = useState(true);

  const onChangePost = (e) => {
    if (e.target.name === 'content' && e.target.value.trim() !== '') {
      setBtnDisabled(false);
    } else if (e.target.name === 'content' && e.target.value.trim() === '') {
      setBtnDisabled(true);
    }

    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitPost = async (e) => {
    e.preventDefault();

    if (content === '') {
      return;
    }

    setBtnDisabled(true);

    await addPost(post);

    setPost({
      content: '',
      filter: 'friends',
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
              maxLength="1000"
              className="form-control"
              style={{ resize: 'none' }}
              name="content"
              value={content}
              onChange={onChangePost}
            />
          </div>

          {/* <div className="form-row">
            <div className="col-md-6">
              <span>Add image to your post</span>
            </div>
            <div className="col-md-6">
              <div class="upload-btn-wrapper">
                <img class="btn-upload" src={fileUploadImage} alt="Add image" />
                <input type="file" name="myfile" />
              </div>
            </div>
          </div> */}

          <div className="form-group">
            <div className="form-separator" />
          </div>

          <div className="form-row align-items-center">
            <div className="col-auto">
              <span>Choose privacy</span>
            </div>

            <div className="col-auto">
              <select name="filter" value={filter} className="form-control" onChange={onChangePost}>
                <option value="friends">Friends</option>
                <option value="public">Public</option>
                <option value="justme">Just me</option>
              </select>
            </div>

            <div className="col-sm-4">
              <input
                type="submit"
                className="btn btn-primary btn-block"
                disabled={btnDisabled}
                value="Publish"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakePost;
