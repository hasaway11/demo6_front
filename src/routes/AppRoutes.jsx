import { Route, Routes } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import PostList from '../pages/post/PostList'
import PostWrite from '../pages/post/PostWrite'
import PostUpdate from '../pages/post/PostUpdate'
import PostRead from '../pages/post/PostRead'
import MemberJoin from '../pages/member/MemberJoin'
import MemberLogin from '../pages/member/MemberLogin'
import MemberFindUsername from '../pages/member/MemberFindUsername'
import MemberChangePassword from '../pages/member/MemberChangePassword'
import MemberRead from '../pages/member/MemberRead'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/post/write" element={<PrivateRoute element={<PostWrite />}  />} />
      <Route path="/post/read" element={<PostRead />} />
      <Route path="/post/update" element={<PrivateRoute element={<PostUpdate />}  />} />
      <Route path="/member/join" element={<PublicRoute element={<MemberJoin />}  />} />
      <Route path="/member/login" element={<PublicRoute element={<MemberLogin />} /> } />
      <Route path="/member/find-username" element={<PublicRoute element={<MemberFindUsername />} /> } />
      <Route path="/member/change-password" element={<PrivateRoute element={<MemberChangePassword />} />} />
      <Route path="/member/read" element={<PrivateRoute element={<MemberRead />} />} />
       <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes