import { useState } from "react";
import ReactQuill from "react-quill-new";
import { useNavigate } from "react-router-dom";
import 'react-quill-new/dist/quill.snow.css';
import { Button, Form } from "react-bootstrap";
import './PostWrite.css'
import useInput from "../../hooks/useInput";
import api from "../../util/aplClient";

function PostWrite() {
  const [isSubmitting, setSubmitting] = useState(false);
  const vTitle = useInput();
  const [content, setContent] = useState('');
  const navigate = useNavigate();
 
  const modules = {
    toolbar: {
      container: [['image'], [{ header: [1, 2, 3, 4, 5, false] }], ['bold', 'underline']]
    }
  };
  
  const doWrite =async()=>{
    if (isSubmitting) 
      return;
    setSubmitting(true);
    try {
      console.log(vTitle.check())
      if (!(vTitle.check())) 
        return;
      const requestForm = {title:vTitle.value, content:content};
      const {data} = await api.post('/api/members/new', new URLSearchParams(requestForm));
      navigate(`/post/read?pno=${data.pno}`);
    } catch(err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>제목:</Form.Label>
        <Form.Control type="text" name="title" onChange={vTitle.change} onBlur={vTitle.check} />
      </Form.Group>
      <ReactQuill theme="snow" name="content" modules={modules}  value={content} onChange={(value)=>setContent(value)} style={{ height: '600px' }}/>
      <div className="d-grid gap-2 mb-3 mt-3">
        <Button variant="outline-primary" size="lg" onClick={doWrite}>글쓰기</Button>
      </div>
    </>
  )
}

export default PostWrite