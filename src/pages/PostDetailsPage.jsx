import PostDetails from "../components/PostDetails";
import {useParams, Outlet} from "react-router-dom"
import { useState, useEffect } from "react";
import { supabase } from "../client";

const PostDetailsPage = ({currentUser}) => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

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

   // ADD LOADER DELAY AND POSITION
    if (loading) return <span class="loader"></span>;
    if (!post) return <p>No post found!</p>;

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
        </div>
     );
}
 
export default PostDetailsPage;