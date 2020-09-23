import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginFooter from '../../components/LoginFooter';
import AuthContext from '../../context/authentication/authContext';

const NewAccount = (props) => {
  const authContext = useContext(AuthContext);
  const { registerUser, authenticated, message } = authContext;

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
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, lastName, email, password, confirmPassword } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      setError('There are empty fields');
      return;
    }

    if (password.length < 6) {
      setError('The password most be at least 6 characters');
      return;
    }

    const emailRule = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRule.test(email)) {
      setError('Email is invalid');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    setError(undefined);

    registerUser({
      name,
      lastName,
      email,
      password,
    });
  };

  return (
    <>
      <div className="login-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-login pb-0">
                <div className="pl-3">
                  <h1>SignUp</h1>
                  <h5>It´s Fast an easy</h5>
                </div>

                <form onSubmit={onSubmit} className="form-login">
                  <div className="form-group">
                    <div className="form-separator" />
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        maxLength="20"
                        placeholder="Name"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={onChange}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        maxLength="30"
                        placeholder="Last name"
                        className="form-control"
                        name="lastName"
                        value={lastName}
                        onChange={onChange}
                      />
                    </div>
                  </div>

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

                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      maxLength="20"
                      className="form-control"
                      name="confirmPassword"
                      value={confirmPassword}
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

                  <div className="text-center mb-1">
                    <button
                      type="submit"
                      value="Signup"
                      className="btn btn-primary btn-block btn-login"
                      disabled={loading}
                    >
                      {loading && <span className="spinner-border spinner-border-sm" />}
                      <span> Sign up</span>
                    </button>
                  </div>

                  <div className="text-center">
                    <Link to="/" className="btn -btn-link">
                      Return to login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LoginFooter />
    </>
  );
};

export default NewAccount;
