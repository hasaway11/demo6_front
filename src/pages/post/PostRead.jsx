import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useFetch from '../../hooks/useFetch';
import LoadingSpinner from '../../component/common/LoadingSpinner';
import GoodButton from '../../component/post/GoodButton';
import { Button } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import ConditionalRenderer from '../../component/conditional/ConditionalRenderer';
import DisabledIf from '../../component/conditional/DisabledIf';
import CommentInput from '../../component/comment/CommentInput';
import CommentList from '../../component/comment/CommentList';

function PostRead() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const pno = params.get('pno');
  if(!pno)
    navigate("/");

  const [post, loading, error] = useFetch(`/posts/post?pno=${pno}`);
  const { principal} = useAuthStore();

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
        <ConditionalRenderer condition={principal && principal.username!==post.writer} >
          <GoodButton pno={post.bno} initialGoodCnt={post.goodCnt} />
        </ConditionalRenderer>
      </div>
      <div style={{width: "834px", overflow: "hidden", minHeight:"600px"}} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
      <DisabledIf condition={principal && principal.username===post.writer} >
         <Button variant="success" onClick={()=>navigate(`/board/update?bno=${post.pno}`)}>변경하기</Button>
      </DisabledIf>
      {/* <div style={{width: "834px"}}>
        <CommentInput isLogin={principal? true:false} onWriteComment={onWriteComment} />
        <CommentList loginId={principal && principal.username} comments={board.comments} onDeleteComment={onDeleteComment} />
      </div> */}
    </>
  )
}

export default PostRead