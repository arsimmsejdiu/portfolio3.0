import React from "react";
import { Link } from "react-router-dom";

import data from './Footer-data';

const Footer = () => {
  return (
    <div className="footer-bottom-area">
      <div>
        <span className="point"></span>
        <Link to="/" class="logo">
          Arsim Sejdiu
        </Link>
      </div>
      <div className="menus">
        <nav>
            {data.menuItem.map((menu,i) => (
                <Link 
                    path={menu.path}
                    key={i}
                    label={menu.label}
                    className="link"
                />
            ))}
        </nav>
      </div>
      <p className='copyright'>
            Copyright by {new Date().getFullYear()} Arsim Sejdiu
          </p>
    </div>
  );
};

export default Footer;
