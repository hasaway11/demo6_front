import { Button, Form } from 'react-bootstrap'

function CommentInput({isLogin, field}) {
  const {value, change, check, message, write } = field;

  return (
    <Form>
      <hr />
      <Form.Group className="mb-3">
        <Form.Label>댓글 작성:</Form.Label>
        <Form.Control as="textarea" rows={5} disabled={!isLogin} style={{resize: 'none'}} placeholder={message} onChange={change} value={value} />
      </Form.Group>
      {
        isLogin && <div style={{display:'flex', justifyContent:'right'}} >
          <Button variant='primary' onClick={write}>작성하기</Button>
        </div>
      }
      <hr />
  </Form>
  )
}

export default CommentInput