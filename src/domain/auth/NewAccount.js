import React, { useState, useContext, useEffect } from 'react';
import LoginFooter from '../../components/LoginFooter';
import AuthContext from '../../context/authentication/authContext';

const NewAccount = (props) => {
  const authContext = useContext(AuthContext);
  const { registerUser, authenticated, message } = authContext;

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
      // mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
    }

    // Password minimo de 6 caracteres
    if (password.length < 6) {
      // mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
      return;
    }

    // Los 2 passwords son iguales
    if (password !== confirmPassword) {
      // mostrarAlerta('Los passwords no son iguales', 'alerta-error');
      return;
    }

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
              <div className="card-login">
                <div className="pl-2">
                  <h1>SignUp</h1>
                  <h5>It´s Fast an easy</h5>
                </div>
                <div className="form-separator" />
                <form onSubmit={onSubmit} className="form-login">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
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
                      type="text"
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
                      className="form-control"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={onChange}
                    />
                  </div>

                  <p>
                    Al hacer clic en "Registrarte", aceptas nuestras
                    <a href="/legal/terms/update" id="terms-link" target="_blank" rel="nofollow">
                      Condiciones
                    </a>
                    , la
                    <a
                      href="/about/privacy/update"
                      id="privacy-link"
                      target="_blank"
                      rel="nofollow"
                    >
                      Política de datos
                    </a>
                    y la
                    <a
                      href="/policies/cookies/"
                      id="cookie-use-link"
                      target="_blank"
                      rel="nofollow"
                    >
                      Política de cookies
                    </a>
                    . Es posible que te enviemos notificaciones por SMS, que puedes desactivar
                    cuando quieras.
                  </p>

                  <div className="text-center">
                    <button type="submit" value="Signup" className="btn btn-signup">
                      Signup
                    </button>
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
