import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { useEffect } from "react";

const PublicRoute = ({ element }) => {
  const { principal, checkLogin} = useAuthStore();

  useEffect(() => {
    checkLogin();
  }, []);
  return principal ? <Navigate to="/" replace /> : element;
};

export default PublicRoute;