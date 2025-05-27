import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useFetch from '../../hooks/useFetch';
import LoadingSpinner from '../../component/common/LoadingSpinner';
import GoodButton from '../../component/post/GoodButton';
import { Button } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import CommentInput from '../../component/comment/CommentInput';
import CommentList from '../../component/comment/CommentList';
import useComment from '../../hooks/useComment';

function PostRead() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const pno = params.get('pno');
  if(!pno)
    navigate("/");

  const [post, loading, error, updateComments] = useFetch(`/posts/post?pno=${pno}`);
  const vComment = useComment();
  const { principal} = useAuthStore();

  const deletePost = ()=>{}


  if(loading) return <LoadingSpinner />
  if(error) return <div>{error.message}</div>
  if(!post) return null;

  return (
    <>
      <div className="read-title mb-2">
        {post.title}
      </div>
      <div className="mb-3" style={{display:'flex', justifyContent:'space-between'}}>
        <div>
          <span className='read-value'>{post.writer}</span>
          <span className='read-value'> | </span>
          <span className="read-key">글번호 </span>
          <span className='read-value'>{post.bno}</span>
          <span className='read-value'> | </span>
          <span className='read-value'>{post.writeTime}</span>
          <span className='read-value'> | </span> 
          <span className="read-key">조회 </span>
          <span className='read-value'>{post.readCnt}</span>
          <span className='read-value'> | </span> 
          <span className="read-key">추천 </span>
          <span className='read-value'>{post.goodCnt}</span>
        </div>
        {
          (principal!=null && principal.username===post.writer) &&
          <GoodButton pno={post.bno} initialGoodCnt={post.goodCnt} />
        }
      </div>
      
      <div style={{minHeight:"400px", backgroundColor:'#eee'}} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
      
      {
        (principal!=null && principal.username===post.writer) &&
        <div className='mt-3 mb-3'>
          <Button variant="success" onClick={()=>navigate(`/board/update?bno=${post.pno}`)} className="me-3">변경으로</Button>
          <Button variant="danger" onClick={deletePost}>삭제하기</Button>
        </div>
      }

      <div className='mt-3 mb-3'>
        { principal!=null && <CommentInput pno={pno} field={vComment} onUpdate={updateComments} /> }
        <CommentList loginId={principal && principal.username} comments={post.comments} />
      </div>
    </>
  )
}

export default PostRead