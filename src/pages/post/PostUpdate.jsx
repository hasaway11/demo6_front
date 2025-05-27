import { useNavigate, useSearchParams } from "react-router-dom";
import ReactQuill from "react-quill-new";

import useFetch from '../../hooks/useFetch';
import LoadingSpinner from "../../component/common/LoadingSpinner";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import usePostStore from "../../store/postStore";


function PostUpdate() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const pno = params.get('pno');
  if(!pno)
    navigate("/");

  const {post, loading, error} = usePostStore();
  const { principal} = useAuthStore();
  const vTitle = useFo

  const modules = {
    toolbar: {
      container: [['image'], [{ header: [1, 2, 3, 4, 5, false] }], ['bold', 'underline']]
    }
  };

  useEffect(() => {
    fetchPost(pno);
  }, [pno, fetchPost]);

  if(loading) return <LoadingSpinner />
  if(error) return <div>{error.message}</div>
  if(!post) return null;

  const update=()=>{}

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>제목:</Form.Label>
        <Form.Control type="text" name="title" onChange={e=>setTitle(e.target.value)} />
      </Form.Group>
      <ReactQuill theme="snow" name="content" modules={modules}  value={content} onChange={(value)=>setContent(value)} style={{ height: '600px' }}/>
      <div className="d-grid gap-2 mb-3 mt-3">
        <Button variant="outline-primary" size="lg" onClick={update}>글쓰기</Button>
      </div>
    </>
  )
}

export default PostUpdate