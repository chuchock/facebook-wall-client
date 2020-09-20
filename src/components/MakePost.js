import React from 'react';

const MakePost = () => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Create post</h5>

        <form>
          <div className="form-group">
            <textarea
              placeholder="What's happening?"
              rows="5"
              className="form-control"
              name="post"
            />
          </div>
        </form>

        <div>
          <a href="#" className="btn btn-primary w-100">
            Publish
          </a>
        </div>
      </div>
    </div>
  );
};

export default MakePost;
