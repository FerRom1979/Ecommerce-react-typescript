import React from "react";
import { password } from "../../assets/svg";
import Container from "../container";

//styles
import { WrapperForm } from "./Register.styles";

const Register = () => {
  return (
    <Container>
      <WrapperForm>
        <h2>Crear Cuenta</h2>

        <div className="wrapper-btn">
          <button>Google Login</button>
        </div>
        <form>
          <div className="content-input">
            <label htmlFor="name">Nombre</label>
            <input type="name" name="name" id="name" placeholder="ej: Juan Perez" />
          </div>
          <div className="content-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="ej: Tunombre@email.com" />
          </div>
          <div className="content-input">
            <label htmlFor="phone">Telefono (opcional)</label>
            <input type="phone" name="phone" id="phone" placeholder="ej: 1134567823" />
          </div>
          <div className="content-input">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" />
            <img src={password} alt="show password" />
          </div>
          <div className="content-input">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input type="Password" name="confirmPassword" id="confirmPassword" />
          </div>
        </form>
      </WrapperForm>
    </Container>
  );
};

export default Register;
