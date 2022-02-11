import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { password } from "../../assets/svg";
import { useAuth } from "../../context/authContext";
import Container from "../container";
import { useHandleGoogleSignin } from "../../utils/signin-with-google";

//styles
import { WrapperForm } from "./Register.styles";

type User = {
  name?: string;
  email?: string;
  phone?: number;
  password?: string;
  confirmPassword?: string;
  target?: any;
};

const Register = () => {
  const { handleGoogleSignin } = useHandleGoogleSignin();
  const { signup }: any = useAuth();
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
      await signup(user?.email, user?.password);
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
        <h2>Crear Cuenta</h2>

        <div className="wrapper-btn">
          <button onClick={() => handleGoogleSignin()}>Google Login</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="content-input">
            <label htmlFor="name">Nombre</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="ej: Juan Perez"
              onChange={handleChange}
            />
          </div>
          <div className="content-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ej: Tunombre@email.com"
              onChange={handleChange}
            />
          </div>
          <div className="content-input">
            <label htmlFor="phone">Telefono (opcional)</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="ej: 1134567823"
              onChange={handleChange}
            />
          </div>
          <div className="content-input">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
            <img src={password} alt="show password" />
          </div>
          <div className="content-input">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="Password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChange}
            />
          </div>
          <button type="submit">ENVIAR</button>
        </form>
      </WrapperForm>
    </Container>
  );
};

export default Register;
