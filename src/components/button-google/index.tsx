import React from "react";
import { useHandleGoogleSignin } from "../../utils/signin-with-google";
import ButtonComponent from "../button";

const ButtonGoogle = () => {
  const { handleGoogleSignin } = useHandleGoogleSignin();
  return (
    <ButtonComponent className="btn-lg" onClick={() => handleGoogleSignin()}>
      Google Login
    </ButtonComponent>
  );
};

export default ButtonGoogle;
