import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getPageno } from "../../util/functions";
import LoadingSpinner from '../../component/common/LoadingSpinner';
import Posts from '../../component/post/Posts';
import Paginations from '../../component/post/Paginations';
import usePostStore from "../../store/postStore";

function PostList() {
  const [params] = useSearchParams();
  const pageno = getPageno(params.get('pageno'));
  const {data, loading, error, fetchData} = usePostStore();

  useEffect(() => {
    fetchData(pageno);
  }, [pageno, fetchData]);

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