import PostDetails from "../components/PostDetails";
import {useParams, Outlet} from "react-router-dom"
import { useState, useEffect } from "react";
import { supabase } from "../client";
import AddCommentForm from "../components/AddCommentForm";
import ViewComments from "../components/ViewComments";

const PostDetailsPage = ({currentUser}) => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchPost() {
        const { data, error } = await supabase
            .from("posts")
            .select(`
                id, title, content, post_type, created_at,
                user_id,
                user:user_id (user_name, role, user_img)
            `)
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error fetching post:', error);
        } else {
            setPost(data);
            console.log(data);
            
        }
        setLoading(false);
        }

        fetchPost();
    }, [id]);

   useEffect(() => {
  async function fetchPostAndComments() {
    const { data: postData, error } = await supabase
      .from('posts')
      .select(`
        *,
        user:user_id (user_name, user_img)
      `)
      .eq('id', postId)  // use your route param here
      .single();

    if (postData) {
      setPost(postData);

      // Fetch comments only **after** post exists
      const { data: commentData } = await supabase
        .from('comments')
        .select(`
          *,
          user:user_id (user_name, user_img)
        `)
        .eq('post_id', postData.id);

      setComments(commentData || []);
    }

    setLoading(false);
  }

  fetchPostAndComments();
}, [postId]);

   // ADD LOADER DELAY AND POSITION
    if (loading) return <span class="loader"></span>;
    if (!post) return <p>No post found!</p>;
    if (!post) return <p>Loading post...</p>;

    const isOwner = post?.user_id === currentUser?.user_id;

    return (
        <div>
            <PostDetails 
                post={post}
                isOwner={isOwner}
            />
            <div className="primary-content">
                <Outlet />
            </div>

            <div className="comment-form">
                <h3>Add Comment</h3>
                <AddCommentForm
                    postId={post.post_id}
                    currentUser={currentUser}
                    onCommentAdded={(newComment) => setComments((prev) => [...prev, newComment])}
                />
                <ViewComments comments={comments} />
            </div>
      </div>

     );
}
 
export default PostDetailsPage;