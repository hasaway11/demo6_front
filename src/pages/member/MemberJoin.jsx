import BlockButton from "../../component/common/BlockButton";
import FormField from "../../component/member/FormField";
import ProfileField from "../../component/member/ProfileField";
import useConfirmPassword from "../../hooks/useConfirmPassword";
import useEmail from "../../hooks/useEmail";
import usePassword from "../../hooks/usePassword";
import useProfile from "../../hooks/useProfile";
import useUsername from "../../hooks/useUsername";

function MemberJoin() {
  const profile = useProfile();
  const username = useUsername();
  const password = usePassword();
  const confirmPassword = useConfirmPassword();
  const email = useEmail();

  const join=()=>{
    const results = [username, password, confirmPassword, email].map(field => field.check());
    if (!results.every(r=>r)) 
      return;
  }

  return (
    <div>
      <ProfileField name='photo' label='사진' onChange={profile.change} photoUrl={profile.photoUrl} alt='미리보기' />
      <FormField label='아이디' onChange={username.change} onBlur={username.check} message={username.message} />
      <FormField label='이메일' onChange={email.change} onBlur={email.check} message={email.message} />
      <FormField label='비밀번호' onChange={password.change} onBlur={password.check} message={password.message} />
      <FormField label='비밀번호 확인' onChange={confirmPassword.change} onBlur={confirmPassword.check} message={confirmPassword.message} />
      <BlockButton label="회원 가입" onClick={join} />
    </div>
  )
}

export default MemberJoin