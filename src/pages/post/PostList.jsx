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
  const {posts, loading, error, fetchPosts} = usePostStore();

  useEffect(() => {
    fetchPosts(pageno);
  }, [pageno, fetchPosts]);


  if(loading) return <LoadingSpinner />
  if(error) return <div>{error.message}</div>;
  if(!posts) return null;

  return (
    <>
      <Posts posts={posts} />
      <Paginations data={posts} />
    </>
  )
}

export default PostList