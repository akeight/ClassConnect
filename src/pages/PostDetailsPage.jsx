import PostDetails from "../components/PostDetails";
import {useParams, Outlet, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import { supabase } from "../client";
import AddCommentForm from "../components/AddCommentForm";
import ViewComments from "../components/ViewComments";

const PostDetailsPage = ({currentUser}) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPost() {
        const { data, error } = await supabase
            .from("posts")
            .select(`
                id, title, content, post_type, created_at,
                user_id, content_img, upvote,
                user:user_id (user_name, role, user_img)
            `)
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error fetching post:', error);
        } else {
            setPost(data);
            console.log(data);
            
            // Fetch comments for this post
            const { data: commentData } = await supabase
                .from('comments')
                .select(`
                    *,
                    user:user_id (user_name, user_img)
                `)
                
                .eq('post_id', data.id)
                .order('created_at', { ascending: true });

            setComments(commentData || []);
            console.log(commentData);
        }

        setLoading(false);
        }

        fetchPost();
    }, [id]);

    const handleNewComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  const handleDelete = async () => {
        if (!currentUser) {
            alert("You must be logged in to delete a post!");
            return;
        }

        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
            if (!confirmDelete) return;

        const { error } = await supabase
            .from("posts")
            .delete()
            .eq("id", id);

        if (!error) {
            console.log("Post deleted");
            navigate("/dashboard");
        } else {
            console.error("Error deleting post:", error);
        }
    };


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
                onDelete={handleDelete}
            />
            <div className="primary-content">
                <Outlet />
            </div>

            <div className="comment-form">
        
                <AddCommentForm
                    postId={post.id}
                    currentUser={currentUser}
                    onCommentAdded={handleNewComment}
                />
                <ViewComments comments={comments} />
            </div>
      </div>

     );
}
 
export default PostDetailsPage;