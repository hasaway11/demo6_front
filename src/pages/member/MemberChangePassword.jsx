import BlockButton from '../../component/common/BlockButton';
import FormField from '../../component/member/FormField';
import useConfirmPassword from '../../hooks/useConfirmPassword';
import usePassword from '../../hooks/usePassword';

function MemberChangePassword() {
  const password = usePassword();
  const confirmPassword = useConfirmPassword();

  const changePassword=()=>{
    const r1 = password.check();
    const r2 = confirmPassword.check();
    if (!(r1 && r2)) 
      return;
  }

  return (
    <div>
      <FormField label='비밀번호' onChange={password.change} onBlur={password.check} message={password.message} />
      <FormField label='비밀번호 확인' onChange={confirmPassword.change} onBlur={confirmPassword.check} message={confirmPassword.message} />
      <BlockButton label="이메일 변경" onClick={changePassword} />
    </div>
  )
}

export default MemberChangePassword