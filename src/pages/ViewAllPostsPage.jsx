import { Outlet } from "react-router-dom"
import PostList from "../components/PostList";
import { supabase } from "../client";
import { useState, useEffect } from "react";

const ViewAllPostsPage = ({currentUser}) => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("posts")
        .select(
            `*,
            user:user_id (user_name, role, user_img)
        `)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setPostData(data);
        }
        setLoading(false);
    };

    fetchPosts();
  }, []);

    if (loading) return <p>Loading posts...</p>;
    if (!postData || postData.length === 0) return <p>No posts found!</p>;

  return ( 
    <>
      {/* Left sidebar & right panel would be here if you want */}
      <main className="main-content">
        <h1>Community Posts</h1>
        <PostList postData={postData} currentUser={currentUser} />
        <Outlet />
      </main>
    </>
  );
}

export default ViewAllPostsPage;
