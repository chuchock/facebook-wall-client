import React, { useEffect, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Post from './Post';
import MakePost from './MakePost';
import PostFilter from './PostFilter';
import './styles/biography.css';
import postContext from '../context/posts/postContext';

const Biography = () => {
  const postsContext = useContext(postContext);
  const { posts, getPosts } = postsContext;

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="biography-container mb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="card mt-3">
                  <div className="card-body">
                    <h5 className="card-title">Details</h5>
                  </div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">
                    <h5 className="card-title">Photos</h5>
                  </div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">
                    <h5 className="card-title">Friends</h5>
                  </div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">
                    <h5 className="card-title">Important events</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <MakePost />
            <PostFilter />
            <TransitionGroup>
              {posts.map((post) => (
                <CSSTransition key={post._id} timeout={400} classNames="post">
                  <Post post={post} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
