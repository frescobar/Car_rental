import React, { useContext, useCallback } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import fb from "../../firebase";
import { AuthContext } from "../../Auth";
import "firebase/auth";
import "./login.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;

      try {
        await fb.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <h3 className='text-center text-danger font-weight-light my-4'>
        Car Rental App,{" "}
        <span className='font-italic font-weight-light'>
          donde puedes alquilar tu auto.
        </span>
      </h3>
      <main className='form-signin bg-signup'>
        <div className='col-md-10 col-lg-6 my-5 mx-auto'>
          <form onSubmit={handleLogin}>
            <h1 className='h3 mb-3 fw-normal text-center text-white'>
              Inicia Sesión
            </h1>
            <p className='text-white'>
              Si no tienes una cuenta, Regístrate{" "}
              <Link className='text-danger' to='/signup'>
                Aquí
              </Link>
            </p>
            <label className='visually-hidden text-white'>Email</label>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              required
              autoFocus
            />
            <label className='visually-hidden mt-2 text-white'>Password</label>
            <input
              type='password'
              className='form-control '
              placeholder='Password'
              required
            />
            <button className='w-100 btn btn-lg btn-danger mt-4' type='submit'>
              Iniciar Sesión
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default withRouter(Login);
