import React from 'react';

const Post = () => {
  return (
    <div className="card mt-3">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <div className="input-group">
          <div className="input-group-prepend">
            <button type="submit" className="btn btn-outline-secondary">
              Edit
            </button>
            <button type="submit" className="btn btn-outline-secondary">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
