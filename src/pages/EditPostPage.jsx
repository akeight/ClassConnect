import EditPostForm from "../components/EditPostForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

const EditPostPage = () => {
    const { id } = useParams();
    console.log("Edit route ID:", id);

    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState({
        user: '',
        class: '',
        title: '',
        content: '',
        user_img: '',
    });

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
                }
        }

        fetchPost();
        }, [id]);


    const editPost = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { data, error } = await supabase
            .from("forum-posts")
            .update(postData) // character comes from state
            .eq("id", id);

        if (error) {
            console.error("Error updating post:", error);
        } else {
            console.log("Updated!", data);
            window.location = "/posts";
        }

         setLoading(false);
            if (error) {
                console.error('Error adding post:', error);  
            } else {
                console.log('Post added:', data);  
                window.location = '/posts';
            }
    };


    const deletePost = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase
            .from('forum-posts')
            .delete()
            .eq('id', id);

        if (error) {
            console.error("Error deleting post:", error);
        } else {
            window.location = '/posts';
        }
        setLoading(false);
            if (error) {
                console.error('Error deleting post:', error);  
            } else {
                console.log('Post deleted:');  
                window.location = '/posts';
            }
    };
    return ( 
        <>
            <h1>Edit Post</h1>
            <EditPostForm 
            postData={postData} 
            setPostData={setPostData} 
            onSubmit={editPost} 
            onDelete={deletePost}
            loading={loading} />
        </>
     );
}
 
export default EditPostPage;