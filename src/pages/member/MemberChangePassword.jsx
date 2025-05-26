import { useState } from 'react';
import BlockButton from '../../component/common/BlockButton';
import FormField from '../../component/member/FormField';
import useConfirmPassword from '../../hooks/useConfirmPassword';
import usePassword from '../../hooks/usePassword';
import api from '../../util/aplClient';

function MemberChangePassword() {
  const [isSubmitting, setSubmitting] = useState(false);
  const vCurrentPassword = usePassword();
  const vNewPassword = usePassword();
  const vConfirmPassword = useConfirmPassword(vNewPassword);

  const changePassword=async ()=>{
    const r1 = vCurrentPassword.check();
    const r2 = vNewPassword.check();
    const r3 = vConfirmPassword.check();
    if (!(r1 && r2 && r3)) 
      return;
   
    const requestForm = {currentPassword:vCurrentPassword.value, newPassword:vNewPassword.value};
    setSubmitting(true); 

    try {
      await api.patch('/api/members/password', requestForm);
      window.alert('비밀번호 변경')
    } catch(err) {
      if(err.status===409) 
        window.alert('비밀번호 변경 실패');
      console.log(err);
    } finally {
      setSubmitting(false); 
    }
  }

  return (
    <div>
      <FormField label='기존 비밀번호' name='current-password' field={vCurrentPassword} />
      <FormField label='새 비밀번호' name='new-password' field={vNewPassword} />
      <FormField label='비밀번호 확인' name='confirm-passwor' field={vConfirmPassword} />
      <BlockButton label="이메일 변경" onClick={changePassword} />
    </div>
  )
}

export default MemberChangePassword