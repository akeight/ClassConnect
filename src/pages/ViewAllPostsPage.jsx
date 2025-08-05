import { Outlet, useOutletContext } from "react-router-dom"
import PostList from "../components/PostList";
import { supabase } from "../client";
import { useState, useEffect } from "react";
import SortButtons from "../components/SortButtons";

const ViewAllPostsPage = ({currentUser}) => {
  const { filters, setFilters } = useOutletContext();
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("newest");

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

 // 1. Filter posts
const filteredPosts = postData.filter((post) => {
  // Filter by post_type checkboxes
  const activeFilters = Object.entries(filters.post_type || {})
    .filter(([_, value]) => value)
    .map(([key]) => key);

  const typeMatches =
    activeFilters.length === 0 || activeFilters.includes(post.post_type);

  // Filter by search term in title
  const searchTerm = filters.searchTerm?.toLowerCase() || "";
  const searchMatches =
    searchTerm === "" || post.title?.toLowerCase().includes(searchTerm);

  return typeMatches && searchMatches;
});

// 2. Sort filtered posts
const sortedPosts = [...filteredPosts].sort((a, b) => {
  if (sortOption === "newest") {
    return new Date(b.created_at) - new Date(a.created_at);
  } else {
    return new Date(a.created_at) - new Date(b.created_at);
  }
});

  return ( 
      <>
        <div className="card-header">
          <h1>Class Posts</h1>
            <div className="search">
                <input 
                  type="search"
                  value={filters.searchTerm} 
                  className="input" 
                  placeholder="search titles..."
                  onChange={(e) => setFilters((prev) => ({ ...prev, searchTerm: e.target.value }))}
                />
                <button className="button"><i class="fa-jelly fa-regular fa-lg fa-magnifying-glass"></i></button>
            
                <SortButtons sortOption={sortOption} setSortOption={setSortOption} />
            </div>
        </div>

        {loading && <span class="loader"></span>}
        {!loading && sortedPosts.length === 0 && <p>No posts found!</p>}
        {!loading && sortedPosts.length > 0 && (
          <PostList postData={sortedPosts} currentUser={currentUser} />
        )}

        <Outlet />
      </>
  );
}

export default ViewAllPostsPage;
