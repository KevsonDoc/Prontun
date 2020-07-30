import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import './Menu.css';

function Menu() {
  return (
      <nav className="Menu">
          <Link to="/">
            <h1 className="title">PROCTUN</h1>
          </Link>
          <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Add Video
          </Button>
      </nav>
  );
}

export default Menu;