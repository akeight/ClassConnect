import './App.css';
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import EditPostPage from './pages/EditPostPage.jsx';
import AddPostPage from './pages/AddPostPage.jsx';
import ViewAllPostsPage from './pages/ViewAllPostsPage.jsx';
import PostDetailsPage from './pages/PostDetailsPage.jsx';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const routes = [
    {
      path: "/",
      element: <HomePage setCurrentUser={setCurrentUser} />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage currentUser={currentUser} />,
      children: [
        { index: true, element: <ViewAllPostsPage currentUser={currentUser} /> },
        { path: "new-post", element: <AddPostPage currentUser={currentUser} /> },
        { path: "post/:id", element: <PostDetailsPage currentUser={currentUser} /> },
        { path: "edit/:id", element: <EditPostPage currentUser={currentUser} /> },
      ],
    },
  ];

  return useRoutes(routes);
}

export default App;


