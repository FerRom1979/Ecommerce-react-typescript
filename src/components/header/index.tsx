import React, { useState } from "react";
import { cart1, menu, search } from "../../assets/svg";
import Container from "../container";
import Search from "../search";
import useResize from "../../hooks/useResize";

// styled
import { WrapperHeader } from "./Header.styles";
import NavBar from "../navbar";
import RegisterContainer from "../register-container";

const Header = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [hideMenu, setHideMenu] = useState<boolean>(false);
  const { width } = useResize();
  console.log(hideMenu);
  return (
    <div>
      <div style={{ background: "#e6e2e2" }}>
        <RegisterContainer showSearch={showSearch} />
      </div>
      <Container>
        <WrapperHeader showSearch={showSearch}>
          <div className="menu">
            <button onClick={() => setHideMenu(true)} className="btn-menu">
              <img src={menu} alt="menu" />
            </button>
          </div>
          <h1>Padel World Store</h1>
          {(showSearch || width > 789) && (
            <Search setShowSearch={setShowSearch} showSearch={showSearch} />
          )}
          {!showSearch && (
            <div className="icon-search">
              <button onClick={() => setShowSearch(true)}>
                <img src={search} alt="icon search" />
              </button>
            </div>
          )}
          <div className="wrapper-cart">
            <p>
              <i>0 items </i> / $0
            </p>
            <div className="img-cart">
              <img src={cart1} alt="cart" width={30} />
            </div>
          </div>
        </WrapperHeader>
        <NavBar hideMenu={hideMenu} setHideMenu={setHideMenu} />
      </Container>
    </div>
  );
};

export default Header;
