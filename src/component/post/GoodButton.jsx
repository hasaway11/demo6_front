import { useState } from 'react'
import { Badge, Button } from 'react-bootstrap'
import api from '../../util/aplClient';


function GoodButton({pno, initialGoodCnt}) {
  const [goodCnt, setGoodCnt] = useState(initialGoodCnt);

  const recommend=async ()=>{
    try {
      const result = await api.put(`/api/posts/good/${pno}`);
      setGoodCnt(result.data);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <Button variant="primary" onClick={recommend}>
      추천 <Badge bg="secondary">{goodCnt}</Badge>
    </Button>
  )
}

export default GoodButton