import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Container from "../container";
import Input from "../form/input/Input";
import Message from "../form/message";
import { User } from "./types";
import { initialStateRegister } from "../../constants/imitial-values-register";
import { validateError } from "./validateForm";
import ButtonComponent from "../button";
import { password } from "../../assets/svg";

//styles
import { WrapperForm } from "./Register.styles";
import ButtonGoogle from "../button-google";

const Register = () => {
  const { signup }: any = useAuth();
  const [user, setUser] = useState<User>(initialStateRegister);
  const [error, setError] = useState<boolean>(false);
  const [formError, setFormError] = useState<User>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: User) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleBlur = (e: User) => {
    handleChange(e);
    setFormError(validateError(user));
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

  return (
    <Container>
      <WrapperForm>
        <h2>Crear Cuenta</h2>
        <ButtonGoogle />
        <form onSubmit={handleSubmit}>
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="ej: Juan Perez"
            label="Nombre"
            handleChange={handleChange}
            required
            onBlur={handleBlur}
            error={formError?.name ? true : false}
          />
          {formError?.name && <Message msg={formError.name} className="error" />}
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="ej: Tunombre@email.com"
            label="Email"
            handleChange={handleChange}
            required
            onBlur={handleBlur}
          />
          {formError?.email && <Message msg={formError.email} className="error" />}
          <Input
            type="phone"
            name="phone"
            id="phone"
            placeholder="ej: 1134567823"
            label="Telefono (opcional)"
            handleChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            id="password"
            label="Contraseña"
            placeholder="********"
            handleChange={handleChange}
            required
            onBlur={handleBlur}
            showPassword={showPassword}
          >
            <div className="wrapper-password ">
              <ButtonComponent
                className="btn-icon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <img src={password} alt="password" />
              </ButtonComponent>
            </div>
          </Input>
          {formError?.password && <Message msg={formError.password} className="error" />}
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            label="Confirmar Contraseña"
            placeholder="********"
            handleChange={handleChange}
            required
            onBlur={handleBlur}
            showPassword={showPassword}
          />
          {formError?.confirmPassword && (
            <Message msg={formError.confirmPassword} className="error" />
          )}
          <Link to={"/login"}>
            <p>Ya tenes cuenta.</p>
          </Link>
          <ButtonComponent className="btn-lg" type="submit">
            Enviar
          </ButtonComponent>
        </form>
      </WrapperForm>
    </Container>
  );
};

export default Register;
