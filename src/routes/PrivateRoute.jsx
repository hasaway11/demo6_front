import { Navigate } from "react-router-dom";
import LoadingSpinner from "../component/common/LoadingSpinner";
import useAuthStore from "../store/authStore";
import { useEffect } from "react";

const PrivateRoute = ({ element }) => {
  const { principal, loading, checkLogin } = useAuthStore();

  useEffect(() => {
    checkLogin();
  }, []);

  if (loading) 
    return <LoadingSpinner />

  return principal ? element : <Navigate to="/member/login" replace />;
};

export default PrivateRoute;