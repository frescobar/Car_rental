import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import "firebase/auth";

export default function NavBar() {
  return (
    <header>
      <ul>
        <NavLink to='/'>
          <li>Inicio</li>
        </NavLink>
        <NavLink to='/my-profile'>
          <li>Mi Perfil</li>
        </NavLink>
        <NavLink to='/nosotros'>
          <li>Nosotros</li>
        </NavLink>
        <NavLink to='/contacto'>
          <li>Contacto</li>
        </NavLink>
      </ul>
    </header>
  );
}
