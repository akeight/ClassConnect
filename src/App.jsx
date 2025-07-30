import { useRoutes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import EditPostPage from './pages/EditPostPage.jsx'
import AddPostPage from './pages/AddPostPage.jsx'
import ViewAllPostsPage from './pages/ViewAllPostsPage.jsx'
import PostDetailsPage from './pages/PostDetailsPage.jsx'
import Layout from './components/Layout.jsx'

function App() {

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'new-post', element: <AddPostPage /> },
        { path: 'posts', element: <ViewAllPostsPage /> },
        { path: 'post/:id', element: <PostDetailsPage /> },
        { path: 'edit/:id', element: <EditPostPage /> },
      ],
    },
  ]

  const element = useRoutes(routes)
  return element
}

export default App
