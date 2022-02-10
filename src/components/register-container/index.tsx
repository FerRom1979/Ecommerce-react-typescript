import React, { FC } from "react";
import { Link } from "react-router-dom";
import { user5 } from "../../assets/svg";

//types
type RegisterContainerProps = {
  showSearch?: boolean;
};

// styles
import { WrapperRegister } from "./RegisterContainer.styles";

const RegisterContainer: FC<RegisterContainerProps> = ({ showSearch }) => {
  return (
    <div>
      <WrapperRegister showSearch={showSearch}>
        <p>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <img src={user5} alt="user" /> <span className="register">CREAR CUENTA</span>
          </Link>
          -<span className="login"> INICIAR SESIÓN</span>
        </p>
      </WrapperRegister>
    </div>
  );
};

export default RegisterContainer;
