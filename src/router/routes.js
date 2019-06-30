import NotFound from '../views/NotFound'
import PostList from '../views/PostList'
import PostDisplay from '../views/PostDisplay'

const routes = [
  { path: '/', component: PostList },
  { path: '/:slug', component: PostDisplay },
  { path: '*', component: NotFound }
]

export default routes
