import useUsername from '../../hooks/useUsername';
import usePassword from '../../hooks/usePassword';
import FormField from '../../component/member/FormField';
import BlockButton from '../../component/common/BlockButton';
import api from '../../util/aplClient';
import useAuthStore from '../../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function MemberLogin() {
  const [isSubmitting, setSubmitting] = useState
  (false);

  const vUsername = useUsername();
  const vPassword = usePassword();
  const {setLogin } = useAuthStore();
  const navigate = useNavigate();

  const doLogin=async ()=>{
    const r1 = vUsername.check();
    const r2 = vPassword.check();
    if(!(r1 && r2))
      return;

    const requestForm = {username:vUsername.value, password:vPassword.value};
    setSubmitting(true); 

    try {
      const response = await api.post(`/login`, requestForm);
      setLogin(response.data.username);
      setSubmitting(false);
      navigate("/");
    } catch(err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  }

  // navigate()는 화면 이동만 하기 때문에 렌더링 로직과 충돌되면 UX 이슈가 생깁니다.
  // if(isSubmitting) return <LoadingSpinner />

  return (
    <div>
      <FormField label='아이디' name="username" field={vUsername} />
      <FormField label='비밀번호' name="password" field={vPassword} />
      <BlockButton label={isSubmitting ? "로그인 중..." : "로그인"} onClick={doLogin} style='primary' />
    </div>
  )
}

export default MemberLogin