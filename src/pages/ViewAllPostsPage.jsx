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

        console.log("Fetched posts:", data);
        console.log("Supabase error:", error);

      if (!error && data) {
        setPostData(data);
        }
        setLoading(false);
    };

    fetchPosts();
  }, []);

   
    // ADD LOADER DELAY AND POSITION

  return ( 
      <>
        <div className="card-header">
          <h1>Class Posts</h1>
        </div>

        {loading && <span class="loader"></span>}
        {!loading && (!postData || postData.length === 0) && <p>No posts found!</p>}
        {!loading && postData.length > 0 && (
          <PostList postData={postData} currentUser={currentUser} />
        )}

        <Outlet />
      </>
  );
}

export default ViewAllPostsPage;
