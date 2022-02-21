import styled from "styled-components";
import { NavbarPropsStyles } from "./types";

export const WrapperNavbar = styled.nav<NavbarPropsStyles>`
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
    background-color: gray;
    padding: 4px;
  }
  .menu-paddles {
    display: none;
  }
  @media (max-width: 790px) {
    .wrapper-register {
      margin-left: -80%;
    }
  }
`;
