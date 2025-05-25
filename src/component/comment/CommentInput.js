import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function CommentInput({onWriteComment, isLogin}) {
  const [content, setContent] = useState("");
  const placeholder = isLogin? "명예를 훼손하는 댓글을 운영원칙 및 관련 법률에 따라 제재될 수 있습니다" : "로그인하세요";

  const handleSubmit = ()=>{
    setContent("");
    onWriteComment(content);
  }

  return (
    <Form>
      <hr />
      <Form.Group className="mb-3">
        <Form.Label>댓글 작성:</Form.Label>
        <Form.Control as="textarea" rows={5} disabled={!isLogin} style={{resize: 'none'}} placeholder={placeholder} onChange={e=>setContent(e.target.value)} value={content} />
      </Form.Group>
      {
        isLogin && <div style={{display:'flex', justifyContent:'right'}} >
          <Button variant='primary' onClick={handleSubmit}>작성하기</Button>
        </div>
      }
      <hr />
  </Form>
  )
}

export default CommentInput