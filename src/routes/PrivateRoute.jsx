import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const PrivateRoute = ({ element }) => {
  const { principal, loading } = useAuthStore();

  // /member/login으로 이동했어...그런데 이동하는 동안 로그인 처리가 완료됐어. 그래서 다시 /member/login접근이 불가능해져서  /로 이동한거구나
  if(loading)
    return null;

  return principal ? element : <Navigate to="/member/login" replace />;
};

export default PrivateRoute;