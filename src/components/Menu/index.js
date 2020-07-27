import React from 'react';

import Button from '../Button';
// import ButtonLink from "./components/ButtonLink";
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu() {
  return (
      <nav className="Menu">
          <a href="/">
            <img className="Logo" src={Logo} alt="Logo PROTUN"/>
          </a>
          <Button as="a" className="ButtonLink" href="/">
            Add Video
          </Button>
      </nav>
  );
}

export default Menu;