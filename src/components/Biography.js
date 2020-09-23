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
                <div className="card mt-3">Detalles</div>
              </div>

              <div className="col-md-12">
                <div className="card">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        alt=""
                        src="https://scontent.fver2-1.fna.fbcdn.net/v/t1.0-0/p235x350/45231189_10215001497368241_4417217393982439424_o.jpg?_nc_cat=106&amp;_nc_sid=e3f864&amp;_nc_eui2=AeEvPfzSKX6X76UjbHfIoHhNwn62_1M-UWLCfrb_Uz5RYlHh_vn91untAiVhL6pLo5M&amp;_nc_ohc=lVN3D3CnwqMAX8ThKMG&amp;_nc_ht=scontent.fver2-1.fna&amp;tp=6&amp;oh=6d20aefc4b456024bddc28fa4bbe3049&amp;oe=5F8B47E3"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        alt=""
                        src="https://scontent.fver2-1.fna.fbcdn.net/v/t1.0-0/p235x350/45231189_10215001497368241_4417217393982439424_o.jpg?_nc_cat=106&amp;_nc_sid=e3f864&amp;_nc_eui2=AeEvPfzSKX6X76UjbHfIoHhNwn62_1M-UWLCfrb_Uz5RYlHh_vn91untAiVhL6pLo5M&amp;_nc_ohc=lVN3D3CnwqMAX8ThKMG&amp;_nc_ht=scontent.fver2-1.fna&amp;tp=6&amp;oh=6d20aefc4b456024bddc28fa4bbe3049&amp;oe=5F8B47E3"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        alt=""
                        src="https://scontent.fver2-1.fna.fbcdn.net/v/t1.0-0/p235x350/45231189_10215001497368241_4417217393982439424_o.jpg?_nc_cat=106&amp;_nc_sid=e3f864&amp;_nc_eui2=AeEvPfzSKX6X76UjbHfIoHhNwn62_1M-UWLCfrb_Uz5RYlHh_vn91untAiVhL6pLo5M&amp;_nc_ohc=lVN3D3CnwqMAX8ThKMG&amp;_nc_ht=scontent.fver2-1.fna&amp;tp=6&amp;oh=6d20aefc4b456024bddc28fa4bbe3049&amp;oe=5F8B47E3"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        alt=""
                        src="https://scontent.fver2-1.fna.fbcdn.net/v/t1.0-0/p235x350/45231189_10215001497368241_4417217393982439424_o.jpg?_nc_cat=106&amp;_nc_sid=e3f864&amp;_nc_eui2=AeEvPfzSKX6X76UjbHfIoHhNwn62_1M-UWLCfrb_Uz5RYlHh_vn91untAiVhL6pLo5M&amp;_nc_ohc=lVN3D3CnwqMAX8ThKMG&amp;_nc_ht=scontent.fver2-1.fna&amp;tp=6&amp;oh=6d20aefc4b456024bddc28fa4bbe3049&amp;oe=5F8B47E3"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        alt=""
                        src="https://scontent.fver2-1.fna.fbcdn.net/v/t1.0-0/p235x350/45231189_10215001497368241_4417217393982439424_o.jpg?_nc_cat=106&amp;_nc_sid=e3f864&amp;_nc_eui2=AeEvPfzSKX6X76UjbHfIoHhNwn62_1M-UWLCfrb_Uz5RYlHh_vn91untAiVhL6pLo5M&amp;_nc_ohc=lVN3D3CnwqMAX8ThKMG&amp;_nc_ht=scontent.fver2-1.fna&amp;tp=6&amp;oh=6d20aefc4b456024bddc28fa4bbe3049&amp;oe=5F8B47E3"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        alt=""
                        src="https://scontent.fver2-1.fna.fbcdn.net/v/t1.0-0/p235x350/45231189_10215001497368241_4417217393982439424_o.jpg?_nc_cat=106&amp;_nc_sid=e3f864&amp;_nc_eui2=AeEvPfzSKX6X76UjbHfIoHhNwn62_1M-UWLCfrb_Uz5RYlHh_vn91untAiVhL6pLo5M&amp;_nc_ohc=lVN3D3CnwqMAX8ThKMG&amp;_nc_ht=scontent.fver2-1.fna&amp;tp=6&amp;oh=6d20aefc4b456024bddc28fa4bbe3049&amp;oe=5F8B47E3"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        alt=""
                        src="https://scontent.fver2-1.fna.fbcdn.net/v/t1.0-0/p235x350/45231189_10215001497368241_4417217393982439424_o.jpg?_nc_cat=106&amp;_nc_sid=e3f864&amp;_nc_eui2=AeEvPfzSKX6X76UjbHfIoHhNwn62_1M-UWLCfrb_Uz5RYlHh_vn91untAiVhL6pLo5M&amp;_nc_ohc=lVN3D3CnwqMAX8ThKMG&amp;_nc_ht=scontent.fver2-1.fna&amp;tp=6&amp;oh=6d20aefc4b456024bddc28fa4bbe3049&amp;oe=5F8B47E3"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        alt=""
                        src="https://scontent.fver2-1.fna.fbcdn.net/v/t1.0-0/p235x350/45231189_10215001497368241_4417217393982439424_o.jpg?_nc_cat=106&amp;_nc_sid=e3f864&amp;_nc_eui2=AeEvPfzSKX6X76UjbHfIoHhNwn62_1M-UWLCfrb_Uz5RYlHh_vn91untAiVhL6pLo5M&amp;_nc_ohc=lVN3D3CnwqMAX8ThKMG&amp;_nc_ht=scontent.fver2-1.fna&amp;tp=6&amp;oh=6d20aefc4b456024bddc28fa4bbe3049&amp;oe=5F8B47E3"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        alt=""
                        src="https://scontent.fver2-1.fna.fbcdn.net/v/t1.0-0/p235x350/45231189_10215001497368241_4417217393982439424_o.jpg?_nc_cat=106&amp;_nc_sid=e3f864&amp;_nc_eui2=AeEvPfzSKX6X76UjbHfIoHhNwn62_1M-UWLCfrb_Uz5RYlHh_vn91untAiVhL6pLo5M&amp;_nc_ohc=lVN3D3CnwqMAX8ThKMG&amp;_nc_ht=scontent.fver2-1.fna&amp;tp=6&amp;oh=6d20aefc4b456024bddc28fa4bbe3049&amp;oe=5F8B47E3"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="card">Amigos</div>
              </div>

              <div className="col-md-12">
                <div className="card">Acontecimientos importantes</div>
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
