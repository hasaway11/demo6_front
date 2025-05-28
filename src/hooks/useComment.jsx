import { useState } from "react";
import api from "../util/aplClient";
import usePostStore from "../store/postStore";

function useComment() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const {fetchComments} = usePostStore();

  const change = e=>setValue(e.target.value);

  const check=()=>{
    setMessage('');
    if(value!=='')
      return true;
    setMessage('필수입력입니다');
    return false;
  }

  const write=async(pno)=>{
    const result = check();
    if(!result) 
      return;
    const requestForm =  {pno: pno, content:value};
    try {
      const response = await api.post(`/api/comments`, new URLSearchParams(requestForm));
      setValue('');
      fetchComments(response.data);
    } catch(err) {
      console.log(err);
    }
  }

  const remove=async(cno, pno)=>{
    try {
      // post, put, patch는 body를 사용하는 것이 일반적
      // get, delete는 쿼리스트링을 사용한다
      const response = await api.delete(`/api/comments?cno=${cno}&pno=${pno}`);
      console.log(response.data);
      fetchComments(response.data);
    } catch(err) {
      console.log(err);
    }
  }

  return {value, message, check, change, write, remove};
}

export default useComment