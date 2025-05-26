import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Nav() {
  const { principal, setLogout } = useAuthStore();
  const logout=(e)=>{
    e.preventDefault();
    setLogout();
  }

  console.log(principal)

  if(!principal) {
    return (
      <nav>
        <ul>
          <li><Link to={"/"} style={{color:'white'}}>HOME</Link></li>
          <li><Link to={"/member/join"}>회원가입</Link></li>
          <li><Link to={"/member/find-username"}>아이디 찾기</Link></li>
          <li><Link to={"/member/login"}>로그인</Link></li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav>
        <ul>
          <li><Link to={"/"} style={{color:'white'}}>HOME</Link></li>
          <li><Link to={"/member/read"}>내정보</Link></li>
          <li><Link to={"/post/write"} >글쓰기</Link></li>
          <li><Link to={"#"} onClick={logout}>로그아웃</Link></li>
        </ul>     
      </nav>
    )
  }
}

export default Nav