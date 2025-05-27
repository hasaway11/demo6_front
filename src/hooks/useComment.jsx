import { useState } from "react";
import api from "../util/aplClient";

function useComment() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const {fetchPost} = usePostStore();

  const change = e=>setValue(e.target.value);

  const check=()=>{
    setMessage('');
    if(value!=='')
      return true;
    setMessage('필수입력입니다');
    return false;
  }

  const write=async(pno)=>{
    const requestForm =  {pno: pno, content:value};
    try {
      const response = await api.post(`/api/comments`, new URLSearchParams(requestForm));
      fetchPost(response.data);
    } catch(err) {
      console.log(err);
    }
  }

  return {value, message, check, change, write};
}

export default useComment