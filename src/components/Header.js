import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="logo">Responsive</div>
          </div>
          <div className="col-sm-6 hidden-xs">
            <div className="row">
              <div className="col-sm-5">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email Address" />
                  <div className="login-bottom-text checkbox hidden-sm">
                    <label>
                      <input type="checkbox" id />
                      Keep me sign in
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Password" />
                  <div className="login-bottom-text hidden-sm"> Forgot your password?</div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-group">
                  <input
                    type="button"
                    defaultValue="login"
                    className="btn btn-default btn-header-login"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
