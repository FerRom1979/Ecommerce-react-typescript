import styled from "styled-components";
import { NavbarPropsStyles } from "./types";

export const WrapperNavbar = styled.nav<NavbarPropsStyles>`
  z-index: 9999;
  width: 80%;
  background-color: #0095ff;
  position: fixed;
  left: ${({ hideMenu }) => (hideMenu ? 0 : "-80%")};
  top: 0;
  transition: 0.1s ease;
  li {
    border-top: thin solid #fff;
    border-bottom: thin solid #fff;
  }
  .btn-close {
    display: flex;
    align-items: center;
    padding: 5px;
    button {
      border: none;
      color: #fff;
      background: transparent;
      cursor: pointer;
    }
    button svg {
      fill: #fff;
      width: 15px;
    }
  }
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  li a {
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    display: inline-block;
  }
  .open-close-sub-nav {
    display: flex;
    justify-content: space-between;
  }
  .open-close-sub-nav svg {
    fill: #fff;
    background-color: #817d7d;
    padding: 4px;
  }
  .sub-menu {
    background-color: #348ecd;
  }
  .sub-menu a {
    padding-left: 30px;
  }
  @media (min-width: 790px) {
    position: inherit;
    background-color: transparent;
    .ul-menu {
      display: flex;
    }
    li a {
      color: #000;
    }
    .sub-menu {
      z-index: 2;
      position: absolute;
      background-color: #fff;
      border: 1px solid #817d7d;
      border-radius: 10px #817d7d;
      display: none;
    }
    li a:hover {
      opacity: 0.7;
    }
    li a:hover ~ .sub-menu {
      display: block;
    }
    .sub-menu:hover {
      display: block;
    }
    .btn-close {
      display: none;
    }
    img {
      display: none;
    }
  }
`;
