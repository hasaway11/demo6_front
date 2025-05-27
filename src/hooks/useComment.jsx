import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../util/aplClient";

function useComment() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const change = e=>setValue(e.target.value);

  const check=()=>{
    setMessage('');
    if(value!=='')
      return true;
    setMessage('필수입력입니다');
    return false;
  }

  const write=async(pno, onUpdate)=>{
    const requestForm =  {pno: pno, content:value};
    try {
      const response = await api.post(`/api/comments`, new URLSearchParams(requestForm));
      onUpdate(response.data);
    } catch(err) {
      console.log(err);
    }
  }

  return {value, message, check, change, write};
}

export default useComment