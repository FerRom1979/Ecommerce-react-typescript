import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { ProtectedRouteProps } from "./types";

const ProtectedRoute: FC = ({ children }: ProtectedRouteProps) => {
  const { user, loading }: any = useAuth();

  if (loading) {
    <h1>loading....</h1>;
  }
  if (!user) return <Navigate to={"/loading"} />;
  return <>{children}</>;
};

export default ProtectedRoute;
