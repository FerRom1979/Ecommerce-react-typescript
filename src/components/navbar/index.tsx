import React, { FC, useState } from "react";
import RegisterContainer from "../register-container";
import { NavbarProps, ShowMenuProps } from "./types";
import { arrowDown, arrowRigth } from "../../assets/svg";
import useResize from "../../hooks/useResize";

// styles
import { WrapperNavbar } from "./Navbar.styles";
import LinkComponent from "../link/index";
import { useProducts } from "../../context/productContext";
import { Link } from "react-router-dom";
import ButtonComponent from "../button/index";

const NavBar: FC<NavbarProps> = ({ hideMenu, setHideMenu }) => {
  const { getProducts }: any = useProducts();
  const { width } = useResize();
  const [showMenu, setShowMenu] = useState<ShowMenuProps>({
    paletas: false,
    calzados: false,
    accesorios: false,
  });

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
      <ul className="ul-menu">
        <li>
          <a
            href="//"
            className="open-close-sub-nav"
            onClick={() =>
              setShowMenu({ paletas: !showMenu.paletas, calzados: false, accesorios: false })
            }
          >
            Paletas
            {!showMenu?.paletas ? (
              <img src={arrowDown} alt="arrow rigth" style={{ background: "grey" }} />
            ) : (
              <img src={arrowRigth} alt="arrow rigth" style={{ background: "grey" }} />
            )}
          </a>
          {(showMenu?.paletas || width > 889) && (
            <ul className="sub-menu">
              <li>
                <ButtonComponent className="btn-link" onClick={() => getProducts("")}>
                  <LinkComponent routed="/products" className="link" text="Todas las paletas" />
                </ButtonComponent>
              </li>
              <li>
                <ButtonComponent className="btn-link" onClick={() => getProducts("sane")}>
                  <LinkComponent routed="/products" className="link" text="Sane" />
                </ButtonComponent>
              </li>
              <li>
                <ButtonComponent className="btn-link" onClick={() => getProducts("adidas")}>
                  <LinkComponent routed="/products" className="link" text="Adidas" />
                </ButtonComponent>
              </li>
              <li>
                <ButtonComponent className="btn-link" onClick={() => getProducts("bullpadel")}>
                  <LinkComponent routed="/products" className="link" text="BullPadel" />
                </ButtonComponent>
              </li>
              <li>
                <ButtonComponent className="btn-link" onClick={() => getProducts("nox")}>
                  <LinkComponent routed="/products" className="link" text="Nox" />
                </ButtonComponent>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a
            href="//"
            className="open-close-sub-nav"
            onClick={() =>
              setShowMenu({ paletas: false, calzados: !showMenu.calzados, accesorios: false })
            }
          >
            Calzados
            {!showMenu?.calzados ? (
              <img src={arrowDown} alt="arrow rigth" style={{ background: "grey" }} />
            ) : (
              <img src={arrowRigth} alt="arrow rigth" style={{ background: "grey" }} />
            )}
          </a>
          {(showMenu?.calzados || width > 889) && (
            <ul className="sub-menu">
              <li>
                <a href="//">Adidas</a>
              </li>
              <li>
                <a href="//">Topper</a>
              </li>
              <li>
                <a href="//">Balbolat</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a
            href="//"
            className="open-close-sub-nav"
            onClick={() =>
              setShowMenu({ paletas: false, calzados: false, accesorios: !showMenu.accesorios })
            }
          >
            Accesorios
            {!showMenu?.accesorios ? (
              <img src={arrowDown} alt="arrow rigth" style={{ background: "grey" }} />
            ) : (
              <img src={arrowRigth} alt="arrow rigth" style={{ background: "grey" }} />
            )}
          </a>
          {(showMenu?.accesorios || width > 889) && (
            <ul className="sub-menu">
              <li>
                <a href="//">Ropa</a>
              </li>
              <li>
                <a href="//">Bolsos</a>
              </li>
              <li>
                <a href="//">Pelotas</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </WrapperNavbar>
  );
};

export default NavBar;
