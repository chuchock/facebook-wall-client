import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginFooter from '../../components/LoginFooter';
import './styles/Login.css';
import facebook from '../../assets/facebook.svg';
import AuthContext from '../../context/authentication/authContext';

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { signIn, authenticated, message } = authContext;

  useEffect(() => {
    if (authenticated) {
      props.history.push('/wall');
    }

    if (message) {
      // mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [message, authenticated, props.history]);

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

    // Validar que no haya campos vacios
    if (email.trim() === '' || password.trim() === '') {
      // mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
    }

    signIn({ email, password });
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
                      name="email"
                      value={email}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChange}
                    />
                  </div>

                  <button type="submit" className="btn">
                    Login
                  </button>

                  {/* <div className="form-group">
                    <button type="submit" className={btnClass} disabled={loading}>
                      {loading && <span className="spinner-border spinner-border-sm"></span>}
                      <span>Login</span>
                    </button>
                  </div> */}

                  {/* {message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    </div>
                  )} */}
                </form>

                <div className="text-center">
                  <a href="https://www.facebook.com/recover/initiate/?ars=facebook_login">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <div className="form-separator" />

                <div className="text-center">
                  <Link to="/signup" className="btn btn-success">
                    Obtener Cuenta
                  </Link>
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
