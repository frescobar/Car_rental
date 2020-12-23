import React, { useCallback } from "react";
import { Link, withRouter } from "react-router-dom";

import fb from "../../firebase";
import "firebase/auth";
import "./signup.css";

const Signup = ({ history }) => {
  const register = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await fb
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

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
          <form onSubmit={register}>
            <h1 className='h3 mb-3 fw-normal text-center text-white'>
              Regístrate
            </h1>
            <p className='text-white'>
              Si ya tienes una cuenta, Inicia Sesión{" "}
              <Link to='/login' className='text-danger'>
                Aquí
              </Link>
            </p>
            <label className='visually-hidden mt-2 text-white'>Email</label>
            <input
              type='text'
              className='form-control '
              placeholder='Email'
              name='email'
              required
            />
            <label className='visually-hidden text-white mt-2'>
              Contraseña
            </label>
            <input
              type='password'
              className='form-control'
              placeholder='Contraseña'
              name='password'
              required
            />
            <button className='w-100 btn btn-lg btn-danger mt-4' type='submit'>
              Registrar
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default withRouter(Signup);
