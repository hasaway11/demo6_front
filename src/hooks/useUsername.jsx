import { useState } from "react";
import api from "../util/aplClient";

const pattern =  /^[0-9a-z]{6,10}$/;

function useUsername(availableChcek=false) {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [available, setAvailable] = useState(false);

  const change = e=>setValue(e.target.value);

  const check = async()=>{
    setMessage('');
    const testResult = pattern.test(value);
    if (!testResult) {
      setMessage('아이디는 소문자와 숫자 6~10자입니다');
      return;
    }
    if (availableChcek) {
      setAvailable(true);
      try {
        const res = await api.get(`/api/members/check-username?username=${value}`);
        if (res.data.available) {
        } else {
          setMessage('사용중인 아이디입니다');
        }
      } catch (err) {
        setMessage('서버 오류로 확인할 수 없습니다');
      } finally {
        setAvailable(false);
      }
    }
  }

  return { value, message, change, check };
}

export default useUsername