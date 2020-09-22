import React from 'react';

const PostFilter = () => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Posts</h5>
        <button type="button" className="btn">
          Public
        </button>
        <button type="button" className="btn">
          Friends
        </button>
      </div>
    </div>
  );
};

export default PostFilter;
