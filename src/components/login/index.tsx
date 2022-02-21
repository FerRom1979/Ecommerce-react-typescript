import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Container from "../container";
import swal from "sweetalert";
import { User } from "./types";
import Input from "../form/input/Input";

//styles
import { WrapperForm } from "./Login.styles";
import ButtonGoogle from "../button-google";
import ButtonComponent from "../button";
import { validateError } from "./validateForm";
import Message from "../form/message";

const Login = () => {
  const { login }: any = useAuth();
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [error, setError] = useState<boolean>(false);
  const [formError, setFormError] = useState<User>();
  const navigate = useNavigate();

  const handleChange = (e: User) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleBlur = (e: User) => {
    handleChange(e);
    setFormError(validateError(user));
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
        <ButtonGoogle />
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            label="Email"
            id="email"
            handleChange={handleChange}
            required
            onBlur={handleBlur}
          />
          {formError?.email && <Message msg={formError.email} className="error" />}
          <Input
            type="password"
            name="password"
            label="Contraseña"
            id="password"
            handleChange={handleChange}
            required
            onBlur={handleBlur}
          />
          {formError?.password && <Message msg={formError.password} className="error" />}
          <p>¿Olvidaste tu contraseña?</p>
          <Link to={"/register"}>
            <p>Aun no tenes cuenta.</p>
          </Link>
          <ButtonComponent type="submit" className="btn-lg">
            INICIAR SESIÓN
          </ButtonComponent>
        </form>
      </WrapperForm>
    </Container>
  );
};

export default Login;
