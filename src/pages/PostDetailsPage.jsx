import PostDetails from "../components/PostDetails";
import {useParams, Outlet} from "react-router-dom"
import { useState, useEffect } from "react";
import { supabase } from "../client";

const PostDetailsPage = () => {
    const { id } = useParams();
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
        const { data, error } = await supabase
            .from('forum-posts')
            .select()
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error fetching post:', error);
        } else {
            setPostData(data);
            console.log(data);
            
        }
        setLoading(false);
        }

        fetchPost();
    }, [id]);

   
    if (loading) return <p>Loading post details…</p>;
    if (!postData) return <p>No post found!</p>;

    return (
        <div>
            <h2 className="home-landing">Post Details</h2>
            <PostDetails postData={postData} />
            <div className="primary-content">
                <Outlet />
            </div>
        </div>
     );
}
 
export default PostDetailsPage;