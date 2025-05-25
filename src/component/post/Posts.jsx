import { Link } from 'react-router-dom'

function Posts({posts}) {
  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th>번호</th><th>제목</th><th>작성자</th><th>작성일</th><th>읽기</th>
        </tr>
      </thead>
      <tbody>
        {
          posts.map(post=>{
            return (
              <tr key={post.pno}>
                <td>{post.pno}</td>
                <td>
                  <Link to={`/post/read?pno=${post.pno}`}>{post.title}</Link>
                </td>
                <td>{post.writer}</td>
                <td>{post.writeTime}</td>
                <td>{post.readCnt}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Posts