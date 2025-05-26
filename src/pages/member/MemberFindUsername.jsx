import { useState } from "react";
import FormField from "../../component/member/FormField";
import useEmail from "../../hooks/useEmail";
import api from "../../util/aplClient";

function MemberFindUsername() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const vEmail = useEmail();

  const findUsername=async ()=>{
    if (!vEmail.check()) return;
    if (isSubmitting) return;

    setSubmitting(true); 
    try {
      const response = await api.get(`/api/members/username?email=${vEmail.value}`);
      setUsername(response.data);
    } catch(err) {
      if(err.status===409) 
        setMessage("사용자를 찾지 못했습니다");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h1>아이디 찾기</h1>
      {username && <span style={{color:'green'}}>아이디 : {username}</span>}
      {message && <span style={{color:'red'}}>{message}</span>}
      <FormField label='이메일' onChange={vEmail.change} onBlur={vEmail.check} message={vEmail.message} />
      <BlockButton BlockButton label={isSubmitting ? "찾는 중..." : "아이디 찾기"} onClick={findUsername} style='success' />
    </div>
  )
}

export default MemberFindUsername