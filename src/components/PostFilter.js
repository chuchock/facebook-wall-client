import React, { useContext, useState, useEffect } from 'react';

import postContext from '../context/posts/postContext';

const PostFilter = () => {
  const postsContext = useContext(postContext);
  const { getPosts } = postsContext;

  const [selectedTab, setSelectedTab] = useState('all');

  // useEffect(() => {
  //   if (selectedFilter !== '') {
  //     setSelectedTab(selectedFilter);
  //   }
  // }, [selectedFilter]);

  const handleClick = async (filter) => {
    await getPosts(filter);
    setSelectedTab(filter);
    window.scrollTo(0, 300);
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Filter posts</h5>
        <span>Privacy</span>

        <div className="btn-group ml-2" role="group" aria-label="Basic example">
          <button
            type="button"
            className={
              selectedTab === 'all'
                ? 'btn btn-outline-secondary active'
                : 'btn btn-outline-secondary'
            }
            onClick={() => handleClick('all')}
          >
            All
          </button>
          <button
            type="button"
            className={
              selectedTab === 'public'
                ? 'btn btn-outline-secondary active'
                : 'btn btn-outline-secondary'
            }
            onClick={() => handleClick('public')}
          >
            Public
          </button>
          <button
            type="button"
            className={
              selectedTab === 'friends'
                ? 'btn btn-outline-secondary active'
                : 'btn btn-outline-secondary'
            }
            onClick={() => handleClick('friends')}
          >
            Friends
          </button>
          <button
            type="button"
            className={
              selectedTab === 'justme'
                ? 'btn btn-outline-secondary active'
                : 'btn btn-outline-secondary'
            }
            onClick={() => handleClick('justme')}
          >
            Just me
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostFilter;
