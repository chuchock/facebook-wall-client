import React, { useContext, useState, useEffect } from 'react';
import friendsFilter from '../assets/friends.png';
import publicFilter from '../assets/public.png';
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

  useEffect(() => {
    setPostInfo({
      ...postInfo,
      content: post.content,
      filter: post.filter,
    });
  }, []);

  const handleDelete = (id) => {
    deletePost(id);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
  };

  const handleSaveChanges = () => {
    if (postInfo.content === '') {
      // showError();
      return;
    }

    updatePost(postInfo);
    setIsEdit(false);
  };

  const onChangePost = (e) => {
    setPostInfo({
      ...postInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card mt-3 overflow-auto" style={{ maxHeight: '350px' }}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <div className="mb-2">
          <h6 className="card-title mb-0">{`${post.user.name} ${post.user.lastName}`}</h6>
          <span className="small">{post.creationDate}</span>
          <img
            src={post.filter === 'public' ? publicFilter : friendsFilter}
            style={{ width: '12px' }}
            alt="..."
          />
        </div>

        {isEdit ? (
          <>
            <div className="form-group">
              <textarea
                name="content"
                rows="5"
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
                <option value="public">public</option>
              </select>
            </div>
          </>
        ) : (
          <p className="card-text">{post.content}</p>
        )}

        <div className="input-group">
          <div className="input-group-prepend">
            {isEdit ? (
              <>
                <button
                  type="submit"
                  className="btn btn-outline-secondary"
                  onClick={() => handleCancelEdit()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => handleSaveChanges()}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="btn btn-outline-secondary"
                  onClick={() => handleEdit()}
                >
                  Edit
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-secondary"
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
