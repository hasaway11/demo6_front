import { useSearchParams } from "react-router-dom";
import { getPageno } from "../../util/functions";
import useFetch from '../../hooks/useFetch';
import LoadingSpinner from '../../component/common/LoadingSpinner';
import Posts from '../../component/post/Posts';
import Paginations from '../../component/post/Paginations';

function PostList() {
  const [params] = useSearchParams();
  const pageno = getPageno(params.get('pageno'));
  const [data, loading, error] = useFetch(`/posts?pageno=${pageno}`);

  if(loading) return <LoadingSpinner />
  if(error) return <div>{error.message}</div>;
  if(!data) return null;

  return (
    <>
      <Posts posts={data.posts} />
      <Paginations data={data} />
    </>
  )
}

export default PostList