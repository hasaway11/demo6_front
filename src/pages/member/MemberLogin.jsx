import useUsername from '../../hooks/useUsername';
import usePassword from '../../hooks/usePassword';
import FormField from '../../component/member/FormField';
import BlockButton from '../../component/common/BlockButton';
import api from '../../util/aplClient';
import useAuthStore from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

function MemberLogin() {
  const vUsername = useUsername();
  const vPassword = usePassword();
  const {setLogin } = useAuthStore();
  const navigate = useNavigate();

  const login=async ()=>{
    const requestForm = {username:vUsername.value, password:vPassword.value};
    try {
      const response = await api.post(`/login`, requestForm);
      setLogin(response.data.username);
      navigate("/");
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <FormField label='아이디' onChange={vUsername.change} onBlur={vUsername.check} message={vUsername.message} />
      <FormField label='비밀번호' onChange={vPassword.change} onBlur={vPassword.check} message={vPassword.message} />
      <BlockButton label="로그인" onClick={doLogin} />
    </div>
  )
}

export default MemberLogin