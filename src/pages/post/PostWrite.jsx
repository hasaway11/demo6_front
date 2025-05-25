import { useState } from "react";
import ReactQuill from "react-quill-new";
import { useNavigate } from "react-router-dom";
import 'react-quill-new/dist/quill.snow.css';
import { Button, Form } from "react-bootstrap";
import './PostWrite.css'

function PostWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const modules = {
    toolbar: {
      container: [['image'], [{ header: [1, 2, 3, 4, 5, false] }], ['bold', 'underline']]
    }
  };
  
  const write =()=>{
    if(title===''||content==='') {
      window.alert("제목과 내용을 입력하세요");
      return;
    }
    const params = {title:title, content: content};
    console.log(params);
  }

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>제목:</Form.Label>
        <Form.Control type="text" name="title" onChange={e=>setTitle(e.target.value)} />
      </Form.Group>
      <ReactQuill theme="snow" name="content" modules={modules}  value={content} onChange={(value)=>setContent(value)} style={{ height: '600px' }}/>
      <div className="d-grid gap-2 mb-3 mt-3">
        <Button variant="outline-primary" size="lg" onClick={write}>글쓰기</Button>
      </div>
    </>
  )
}

export default PostWrite