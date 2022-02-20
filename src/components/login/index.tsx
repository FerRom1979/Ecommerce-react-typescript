import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useHandleGoogleSignin } from "../../utils/signin-with-google";
import Container from "../container";
import swal from "sweetalert";
import { User } from "./types";
import Input from "../form/input/Input";

//styles
import { WrapperForm } from "./Login.styles";

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
      if (err)
        swal({
          text: "Wrong email or password!!!",
          icon: "error",
          timer: 2000,
        });
    }
    e.target.reset();
  };

  return (
    <Container>
      <WrapperForm>
        <h2>Iniciar sesión</h2>
        <div className="wrapper-btn">
          <button onClick={() => handleGoogleSignin()}>Google Login</button>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            label="Email"
            id="email"
            handleChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            label="Contraseña"
            id="password"
            handleChange={handleChange}
            required
          />
          <p>¿Olvidaste tu contraseña?</p>
          <Link to={"/register"}>
            <p>Aun no tenes cuenta.</p>
          </Link>

          <div className="wrapper-btn">
            <button type="submit">INICIAR SESIÓN</button>
          </div>
        </form>
      </WrapperForm>
    </Container>
  );
};

export default Login;
