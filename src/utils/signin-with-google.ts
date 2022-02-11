import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const useHandleGoogleSignin = () => {
  const { loginWhitGoogle }: any = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignin = async () => {
    try {
      await loginWhitGoogle();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return { handleGoogleSignin };
};
