import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { password } from "../../assets/svg";
import { useAuth } from "../../context/authContext";
import { useHandleGoogleSignin } from "../../utils/signin-with-google";
import Container from "../container";

//styles
import { WrapperForm } from "./Login.styles";

type User = {
  email?: string;
  password?: string;
  target?: any;
};

const Login = () => {
  const { login }: any = useAuth();
  const { handleGoogleSignin } = useHandleGoogleSignin();
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: User) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setError(false);
      await login(user?.email, user?.password);
      navigate("/");
    } catch (err) {
      if (err) setError(true);
    }
    e.target.reset();
  };

  console.log(error);

  return (
    <Container>
      <WrapperForm>
        <h2>Iniciar sesión</h2>
        <div className="wrapper-btn">
          <button onClick={() => handleGoogleSignin()}>Google Login</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="content-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} />
          </div>
          <div className="content-input">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
            <img src={password} alt="show password" />
          </div>
          <p>¿Olvidaste tu contraseña?</p>
          <div className="wrapper-btn">
            <button type="submit">INICIAR SESIÓN</button>
          </div>
        </form>
      </WrapperForm>
    </Container>
  );
};

export default Login;
