import React, { useState } from "react";
import cars from "../../data";
import CarList from "../carList/CarList";
import Navbar from "../navbar/Navbar";
import fb from "../../firebase";
import { Redirect } from "react-router-dom";
import { useFirestoreDocDataOnce } from "reactfire";
export default function Home() {
  const [currentUser, setCurrentUser] = useState(fb.auth().currentUser);
  const signout = () => {
    setCurrentUser(null);
  };
  return (
    <>
      <Navbar />
      <a className='btn btn-link float-right' onClick={signout}>
        Cerrar Sesión
      </a>
      <CarList carList={cars} />
    </>
  );
}
