import React from 'react';
import moon from '../../img/moon.png';
import { Link } from 'react-router-dom';
import './Homebutton.scss';

export default function Homebutton() {
  return (
    <Link to="/">
      <div id="Homebutton">
        <img id="logo" src={moon} alt="Home" />
        <span>Níìì ë°¤</span>
      </div>
    </Link>
  );
}
