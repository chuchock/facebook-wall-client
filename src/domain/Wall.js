import React from 'react';
import Header from '../components/Header';
import Biography from '../components/Biography';
import './styles/wall.css';

const Wall = () => {
  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center">
              <img
                className="img-fluid"
                alt=""
                src="https://scontent.fver2-1.fna.fbcdn.net/v/t1.0-0/p235x350/45231189_10215001497368241_4417217393982439424_o.jpg?_nc_cat=106&amp;_nc_sid=e3f864&amp;_nc_eui2=AeEvPfzSKX6X76UjbHfIoHhNwn62_1M-UWLCfrb_Uz5RYlHh_vn91untAiVhL6pLo5M&amp;_nc_ohc=lVN3D3CnwqMAX8ThKMG&amp;_nc_ht=scontent.fver2-1.fna&amp;tp=6&amp;oh=6d20aefc4b456024bddc28fa4bbe3049&amp;oe=5F8B47E3"
              />
            </div>
          </div>

          <div className="mx-auto text-center">
            <div>
              <h1>Jesus Montero</h1>
            </div>
            <div>
              <a href="#" alt="presentation">
                Agregar presentación
              </a>
            </div>
          </div>

          <div className="row">
            <div className="form-separator" />
          </div>

          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Biography />
    </>
  );
};

export default Wall;
