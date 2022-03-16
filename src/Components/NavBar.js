import React from 'react';
import logo from '../Img/AutoFix3.png'

const NavBar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} alt="" class="me-2 log"/>AutoFIX</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tires</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tools</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Accessories</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Chosse the Brand
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Audi</a></li>
            <li><a class="dropdown-item" href="#">Citroen</a></li>
            <li><a class="dropdown-item" href="#">Peugeot</a></li>
            <li><a class="dropdown-item" href="#">Opel</a></li>
            <li><a class="dropdown-item" href="#">VW</a></li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    );
  };
  
  export default NavBar;
  