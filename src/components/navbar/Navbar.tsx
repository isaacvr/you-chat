import React from 'react';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav>
      <ul className="menu">
        <li>Inicio</li>
        <li>Menú</li>
        <li>Ayuda</li>
        <li>Soporte</li>
      </ul>
      <ul className="user-actions">
        <li>Sign In</li>
        <li>Register</li>
      </ul>
    </nav>
  )
}