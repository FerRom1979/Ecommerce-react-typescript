import { User } from "./types";

export const validateError = (user: User) => {
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  let error = { password: "", email: "" };

  if (!user.email?.trim()) {
    error.email = "Este campo es requerido";
  } else if (!regexEmail.test(user.email?.trim())) {
    error.email = "Este email es incorrecto";
  }

  if (!user.password?.trim()) {
    error.password = "Este campo es requerido";
  } else if (user.password.length < 8) {
    error.password = "La contraseña no puede tener menos de 8 caracteres";
  }

  return error;
};
