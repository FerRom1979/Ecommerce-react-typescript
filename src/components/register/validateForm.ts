import { User } from "./types";

export const validateError = (user: User) => {
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  let error = { name: "", password: "", email: "", confirmPassword: "" };

  if (!user.name?.trim()) {
    error.name = "Este campo es requerido";
  } else if (!regexName.test(user.name?.trim())) {
    error.name = "El campo solo acepta letras y espacios en blanco";
  } else if (user.name?.trim()) error.name = "";

  if (!user.email?.trim()) {
    error.email = "Este campo es requerido";
  } else if (!regexEmail.test(user.email?.trim())) {
    error.name = "Este email es incorrecto";
  }

  if (!user.password?.trim()) {
    error.password = "Este campo es requerido";
  } else if (user.password.length < 8) {
    error.password = "La contraseña no puede tener menos de 8 caracteres";
  }

  if (!user.confirmPassword?.trim()) {
    error.confirmPassword = "Este campo es requerido";
  } else if (user.confirmPassword?.trim() !== user.password?.trim()) {
    error.confirmPassword = "No coiniden las contraseñas";
  }

  return error;
};
