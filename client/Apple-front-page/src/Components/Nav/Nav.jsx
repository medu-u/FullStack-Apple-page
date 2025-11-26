import React from 'react'
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import logo from '../../assets/images/icons/logo-sm.png';
import search from '../../assets/images/icons/search-icon-sm.png';
import cart from '../../assets/images/icons/cart-sm.png';

import NavbarList from '../NavbarList/NavbarList';


function Nav() {
  return (
    <div className={`${style.navWrapper} fixed-top`}>
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <NavbarList LinkUrl="/mac" LinkName="Mac" />
              <NavbarList LinkUrl="/iphone" LinkName="iphone" />
              <NavbarList LinkUrl="/ipad" LinkName="ipad" />
              <NavbarList LinkUrl="/watch" LinkName="watch" />
              <NavbarList LinkUrl="/tv" LinkName="Tv" />
              <NavbarList LinkUrl="/Music" LinkName="Music" />
              <NavbarList LinkUrl="/Support" LinkName="Support" />

              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/search/">
                  <img src={search} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/cart/">
                  <img src={cart} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav
