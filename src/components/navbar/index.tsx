import React, { FC } from "react";
import RegisterContainer from "../register-container";
import { NavbarProps } from "./types";

// styles
import { WrapperNavbar } from "./Navbar.styles";

const NavBar: FC<NavbarProps> = ({ hideMenu, setHideMenu }) => {
  return (
    <WrapperNavbar hideMenu={hideMenu}>
      <div className="btn-close">
        <RegisterContainer />
        <button onClick={() => setHideMenu && setHideMenu(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </button>
      </div>
      <ul>
        <li>
          <a href="//" className="open-close-sub-nav">
            Paletas
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </a>
          <ul className="menu-paddles">
            <li>
              <a href="//">items</a>
            </li>
            <li>
              <a href="//">items</a>
            </li>
            <li>
              <a href="//">items</a>
            </li>
            <li>
              <a href="//">items</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="//" className="open-close-sub-nav">
            Calzados
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </a>
          <ul>
            <li>
              <a href="//">items</a>
            </li>
            <li>
              <a href="//">items</a>
            </li>
            <li>
              <a href="//">items</a>
            </li>
            <li>
              <a href="//">items</a>
              <ul>
                <li>
                  <a href="//">items</a>
                </li>
                <li>
                  <a href="//">items</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="//" className="open-close-sub-nav">
            Accesorios
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </a>
          <ul>
            <li>
              <a href="//">items</a>
            </li>
            <li>
              <a href="//">items</a>
            </li>
            <li>
              <a href="//">items</a>
            </li>
            <li>
              <a href="//">items</a>
            </li>
          </ul>
        </li>
      </ul>
    </WrapperNavbar>
  );
};

export default NavBar;
