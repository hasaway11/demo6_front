import { useState } from "react";

function useConfirmPassword(password, confirmPassword) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  
  const change = e=>setValue(e.target.value);

  const check=()=>{
    if(confirmPassword==='') {
      setIsValid(false);
      setMessage('확인을 위해 비밀번호를 다시 입력해주세요');
    } else {
      const isEqual = password===confirmPassword;
      setIsValid(isEqual);
      setMessage(isEqual?'':'새 비밀번호가 일치하지 않습니다');
    }
  }

  return {isValid, message, check, change};
}

export default useConfirmPassword