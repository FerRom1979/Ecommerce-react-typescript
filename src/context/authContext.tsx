import { createContext, useContext } from "react";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};
interface AuthContextProps {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const loginWhitGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = async (email: string) => await sendPasswordResetEmail(auth, email);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWhitGoogle,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
