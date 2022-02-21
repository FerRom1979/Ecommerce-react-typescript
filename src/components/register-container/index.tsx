import React, { FC } from "react";
import { Link } from "react-router-dom";
import { user5 } from "../../assets/svg";
import { useAuth } from "../../context/authContext";
import { RegisterContainerProps } from "./types";
import ButtonComponent from "../button";

// styles
import { WrapperRegister } from "./RegisterContainer.styles";

const RegisterContainer: FC<RegisterContainerProps> = ({ showSearch }) => {
  const { logout }: any = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <WrapperRegister showSearch={showSearch}>
      <p>
        <Link to={"/register"} style={{ textDecoration: "none" }}>
          <img src={user5} alt="user" /> <span className="register">CREAR CUENTA</span>
        </Link>
        -{" "}
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <span className="login"> INICIAR SESIÓN</span>
        </Link>
        -
        <ButtonComponent onClick={handleLogout} className="btn-link" link>
          LOGOUT
        </ButtonComponent>
      </p>
    </WrapperRegister>
  );
};

export default RegisterContainer;
