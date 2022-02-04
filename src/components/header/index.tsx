import React, { useState } from "react";
import { user5, cart1, menu, search } from "../../assets/svg";
import Container from "../container";
import Search from "../search";
import useResize from "../../hooks/useResize";

// styled
import { WrapperRegister, WrapperHeader } from "./Header.styles";

const Header = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const { width } = useResize();

  return (
    <div>
      <div style={{ background: "#e6e2e2" }}>
        <WrapperRegister showSearch={showSearch}>
          <p>
            <img src={user5} alt="user" /> <span className="register">CREAR CUENTA</span> -
            <span className="login"> INICIAR SESIÓN</span>
          </p>
        </WrapperRegister>
      </div>
      <Container>
        <WrapperHeader showSearch={showSearch}>
          <div className="menu">
            <button onClick={() => console.log("opening menu")} className="btn-menu">
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
      </Container>
    </div>
  );
};

export default Header;
