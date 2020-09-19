import React, { useState } from 'react';
import LoginFooter from '../components/LoginFooter';
import './styles/Login.css';
import facebook from '../assets/facebook.svg';

const Login = (props) => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [validForm, setValidForm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState('');

  const [btnClass, setBtnClass] = useState('btn btn-primary btn-block disabled');

  const validateInputs = () => {
    const usernameRule = /^(?=.*[A-Za-z])[A-Za-z\d|"$%&/]{8,20}$/;
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[|"$%&/])[A-Za-z\d|"$%&/]{8,20}$/;

    setTimeout(() => {
      if (usernameRule.test(username) && passwordRule.test(password)) {
        setMessage('');
        setValidForm(true);
        setBtnClass('btn btn-primary btn-block');
      } else {
        setValidForm(false);
        setBtnClass('btn btn-primary btn-block disabled');
      }
    }, 1000);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    props.history.push('/wall');

    // if (validForm) {
    //   setLoading(true);

    //   setTimeout(() => {
    //     authenticationService.login(username, password).then(
    //       (response) => {
    //         setLoading(false);
    //         if (response && response.length) {
    //           window.location.reload();
    //         } else {
    //           const resMessage = 'Username or Password incorrect';
    //           setMessage(resMessage);
    //         }
    //       },
    //       (error) => {
    //         const resMessage = 'Error';

    //         setLoading(false);
    //         setMessage(resMessage);
    //       }
    //     );
    //   }, 1000);
    // } else {
    //   setMessage('There are errors in the fields');
    // }
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
                <h2>
                  Facebook te ayuda a comunicarte y compartir con las personas que forman parte de
                  tu vida.
                </h2>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-login">
                <form onSubmit={handleLogin} className="form-login">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Username"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      onBlur={validateInputs}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      onBlur={validateInputs}
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className={btnClass} disabled={loading}>
                      {loading && <span className="spinner-border spinner-border-sm"></span>}
                      <span>Login</span>
                    </button>
                  </div>

                  {message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    </div>
                  )}
                </form>

                <div className="text-center">
                  <a href="https://www.facebook.com/recover/initiate/?ars=facebook_login">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <div className="form-separator" />

                <div className="text-center">
                  <button type="button" className="btn btn-success">
                    Create new account
                  </button>
                </div>
              </div>

              <div className="form-msg">
                <p className="text-wrap">
                  <b>Crea una página</b> para un personaje público, un grupo de música o un negocio.
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
