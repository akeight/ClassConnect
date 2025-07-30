import AddPostForm from "../components/AddPostForm";
import { supabase } from "../client";
import { useState } from "react";

const AddPostPage = () => {
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState({
        user: '',
        class: '',
        title: '',
        content: '',
        user_img: '',
    });

    // const classOption = {
    // Question: [
    //   '<i class="fa-jelly-duo fa-regular fa-circle-question fa-lg" style="--fa-primary-color: #B197FC; --fa-secondary-color: #B197FC; --fa-secondary-opacity: 0.2;"></i>'
    // ],
    // Opinion: [
    //  '<i class="fa-jelly-duo fa-regular fa-font-awesome fa-lg" style="--fa-primary-color: #74C0FC; --fa-secondary-color: #74C0FC; --fa-secondary-opacity: 0.2;"></i>'
    // ],
    // For_Sale: [
    //   '<i class="fa-jelly-duo fa-regular fa-tag fa-lg" style="--fa-primary-color: #63E6BE; --fa-secondary-color: #63E6BE; --fa-secondary-opacity: 0.2;"></i>'
    // ],
    // };

    const userAvatar = [
            "/src/assets/girl-1.png",
            "/src/assets/girl-2.png",
            "/src/assets/girl-3.png",
            "/src/assets/girl-4.png",
            "/src/assets/boy-1.png",
            "/src/assets/boy-2.png",
            "/src/assets/boy-3.png",
            "/src/assets/boy-4.png"
        ]


    const addPost = async (event) => {
        event.preventDefault();
        setLoading(true);
        const { data, error } = await supabase
            .from('forum-posts')
            .insert([postData]);

            if (error) {
                console.error('Error adding post:', error);
            } else {
                console.log('Post added:', data);
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

    const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
    };

    const handleCategoryChange = (e) => {
        setPostData(prev => ({ ...prev, class: e.target.value, user_img: '' }));
    };

    const handleImageSelect = (img) => {
        setPostData(prev => ({ ...prev, user_img: img }));
    }; 

    return ( 
        <>
            <h1>Add Post</h1>
            <AddPostForm 
                postData={postData}
                handleImageSelect={handleImageSelect}
                handleCategoryChange={handleCategoryChange}
                handleChange={handleChange}
                onSubmit={addPost}
                userAvatar={userAvatar}
                loading={loading}
             />
        </>
     );
}
 
export default AddPostPage;