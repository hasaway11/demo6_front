import { useState } from "react";

const pattern =  /^[0-9a-zA-Z]{6,10}$/;

function usePassword() {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const change = e=>setValue(e.target.value);

  const check=()=>{
    setMessage('');
    const testResult = pattern.test(value);
    setIsValid(testResult);
    setMessage(testResult?'':'비밀번호는 영숫자 6~10자입니다');
  }

  return {isValid, message, check, change};
}

export default usePassword