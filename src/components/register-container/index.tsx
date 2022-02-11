import React, { FC } from "react";
import { Link } from "react-router-dom";
import { user5 } from "../../assets/svg";

//types
type RegisterContainerProps = {
  showSearch?: boolean;
};

// styles
import { WrapperRegister } from "./RegisterContainer.styles";
import { useAuth } from "../../context/authContext";

const RegisterContainer: FC<RegisterContainerProps> = ({ showSearch }) => {
  const { logout }: any = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div>
      <WrapperRegister showSearch={showSearch}>
        <p>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <img src={user5} alt="user" /> <span className="register">CREAR CUENTA</span>
          </Link>
          -{" "}
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <span className="login"> INICIAR SESIÓN</span>
          </Link>
          -<button onClick={handleLogout}>LOGOUT</button>
        </p>
      </WrapperRegister>
    </div>
  );
};

export default RegisterContainer;
