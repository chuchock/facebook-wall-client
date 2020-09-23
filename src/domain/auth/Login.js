import React, { useState, useContext, useEffect } from 'react';
import LoginFooter from '../../components/LoginFooter';
import './styles/Login.css';
import facebook from '../../assets/facebook.svg';
import AuthContext from '../../context/authentication/authContext';

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { signIn, authenticated, message, resetMesssage } = authContext;

  const [error, setError] = useState(undefined);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authenticated) {
      props.history.push('/wall');
    }

    if (message) {
      setLoading(false);
      setError(message);
    }
    // eslint-disable-next-line
  }, [message, authenticated, props.history, error]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setError('There are empty fields');
      return;
    }

    const emailRule = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRule.test(email)) {
      setError('Email is invalid');
      return;
    }

    setLoading(true);
    setError(false);
    signIn({ email, password });
  };

  const handleSignup = () => {
    resetMesssage();
    props.history.push('/signup');
  };

  return (
    <>
      <div className="login-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img className="login-brand" src={facebook} alt="facebook" />
              </div>
              <div>
                <h2 className="login-text">
                  Facebook helps you communicate and share with the people who are part of your
                  life.
                </h2>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-login">
                <form onSubmit={handleLogin} className="form-login mb-0 pb-0">
                  <div className="form-group">
                    <input
                      type="email"
                      maxLength="30"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      maxLength="20"
                      placeholder="Password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChange}
                    />
                  </div>

                  {error && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-login"
                    disabled={loading}
                  >
                    {loading && <span className="spinner-border spinner-border-sm" />}
                    <span>Login</span>
                  </button>
                </form>

                <div className="card-body mb-1">
                  <div className="form-separator" />
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-success btn-signup"
                    onClick={handleSignup}
                  >
                    Create an account
                  </button>
                </div>
              </div>

              <div className="form-msg">
                <p className="text-wrap">
                  <b>Create a page</b> for a public figure, a music group or a business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginFooter />
    </>
  );
};

export default Login;
