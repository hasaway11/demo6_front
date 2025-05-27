import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const PublicRoute = ({ element }) => {
  const { principal} = useAuthStore();

  return principal ? <Navigate to="/" replace /> : element;
};

export default PublicRoute;