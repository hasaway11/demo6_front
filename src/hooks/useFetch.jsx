// api 서버에서 데이터를 받아와 저장하는 커스텀 훅(상태 + 함수)

import { useEffect, useState } from "react"
import api from "../util/aplClient";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    async function fetch() {
      try {
        const response = await api.get(url);
        setData(response.data);
      } catch(err) {
        console.log(err);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [url]);

  // 댓글만 갱신하는 함수
  const updateComments = (newComments) => {
    setData((prevData) => ({...prevData, comments: newComments }));
  };

  return [data, loading, error, updateComments]
}

export default useFetch