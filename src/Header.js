import React from "react";
import './Header.css';
import logo from './Img/ImagenEC.png'

const Header = () => {
  return (
    <div>
        <img src={logo} alt="" />
      <h1>Bienvenido a tu tienda online</h1>
      <nav>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </nav>
    </div>
  );
};

export default Header;
