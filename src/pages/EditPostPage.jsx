import EditPostForm from "../components/EditPostForm";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

const EditPostPage = ({currentUser}) => {
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        post_type: ""
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPost() {
            const { data, error } = await supabase
                .from("posts")
                .select(`
                    *,
                    user:user_id (user_name, role, user_img)
                `)
                .eq('id', id)
                .single();

                if (error) {
                    console.error('Error fetching post:', error);
                    setLoading(false);
                    return;
                } else {
                    setPostData({
                        title: data.title || "",
                        content: data.content || "",
                        post_type: data.post_type || "",
                    });
                setLoading(false);
                }
        }
        fetchPost();
        }, [id]);


    const handleUpdate = async (event) => {
        
        event.preventDefault();
        if (!currentUser) {
            alert("You must be logged in to edit a post!");
        return;
        }

        const user = Array.isArray(currentUser) ? currentUser[0] : currentUser;
        
        setLoading(true);

        const { data, error } = await supabase
            .from("posts")
            .update({
                ...postData,
                user_id: user.user_id,
            }) 
            .eq("id", id)
            .select()
            .single();

        setLoading(false);

        if (!error) {
            console.log("Post updated:", data);
            navigate(`/dashboard/post/${id}`);
        } else {
            console.error("Error updating post:", error);
        }
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

    if (loading) return <p>Loading post...</p>;
    if (!postData) return <p>Post not found.</p>;

    return ( 
        <>
            <EditPostForm 
                postData={postData} 
                setPostData={setPostData} 
                onSubmit={handleUpdate} 
                onDelete={handleDelete}
            />
        </>
     );
}
 
export default EditPostPage;