import React, { useContext, useState, useEffect } from 'react';
import friendsFilter from '../assets/friends.png';
import publicFilter from '../assets/public.png';
import lockFilter from '../assets/lock.png';
import postContext from '../context/posts/postContext';

const Post = ({ post }) => {
  const postsContext = useContext(postContext);
  const { deletePost, updatePost } = postsContext;

  const [isEdit, setIsEdit] = useState(false);

  const [postInfo, setPostInfo] = useState({
    _id: post._id,
    content: '',
    filter: 'friends',
  });

  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    let date = new Date(post.creationDate);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    setPostInfo({
      ...postInfo,
      content: post.content,
      filter: post.filter,
      creationDate: date.toLocaleDateString('en-us', options),
    });
  }, []);

  const handleDelete = (id) => {
    deletePost(id);
  };

  const handleEdit = () => {
    setPostInfo({
      ...postInfo,
      content: post.content,
      filter: post.filter,
    });

    setBtnDisabled(false);
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
  };

  const handleSaveChanges = () => {
    if (postInfo.content === '') {
      return;
    }

    updatePost(postInfo);
    setIsEdit(false);
  };

  const onChangePost = (e) => {
    if (e.target.name === 'content' && e.target.value.trim() !== '') {
      setBtnDisabled(false);
    } else if (e.target.name === 'content' && e.target.value.trim() === '') {
      setBtnDisabled(true);
    }

    setPostInfo({
      ...postInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="mb-2">
          <h6 className="card-title mb-0">{`${post.user.name} ${post.user.lastName}`}</h6>
          <div>
            <span className="small">{postInfo.creationDate}</span>
            <img
              src={
                post.filter === 'public'
                  ? publicFilter
                  : post.filter === 'friends'
                  ? friendsFilter
                  : lockFilter
              }
              className="ml-1"
              style={{ width: '12px' }}
              alt="..."
            />
          </div>
        </div>

        {isEdit ? (
          <>
            <div className="form-group">
              <textarea
                name="content"
                rows="5"
                maxLength="1000"
                className="form-control"
                style={{ resize: 'none' }}
                value={postInfo.content}
                onChange={onChangePost}
              />
            </div>
            <div className="form-group">
              <select
                name="filter"
                value={postInfo.filter}
                className="form-control col-md-4"
                onChange={onChangePost}
              >
                <option value="friends">Friends</option>
                <option value="public">Public</option>
                <option value="justme">Just me</option>
              </select>
            </div>
          </>
        ) : (
          <p className="card-text">{post.content}</p>
        )}

        <div className="form-group">
          <div className="form-separator" />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            {isEdit ? (
              <>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={() => handleCancelEdit()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => handleSaveChanges()}
                  disabled={btnDisabled}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <button type="submit" className="btn btn-light" onClick={() => handleEdit()}>
                  Edit
                </button>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
