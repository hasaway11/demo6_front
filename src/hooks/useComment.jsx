import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const write=async(pno)=>{
    const requestForm =  {pno: pno, content:value};
    try {
      await axios.post(`/api/comments`, requestForm);
      navigate(`/posts/read?pno=${pno}`)
    } catch(err) {
      console.log(err);
    }
  }

  return {value, message, check, change, write};
}

export default useComment