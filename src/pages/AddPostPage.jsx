import AddPostForm from "../components/AddPostForm";
import { supabase } from "../client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPostPage = ({ currentUser }) => {
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({
    post_type: '',
    title: '',
    content: '',
    content_img: '',
  });

  const navigate = useNavigate();

  const handleSumbit = async (event) => {
    event.preventDefault();
    if (!currentUser) {
      alert("You must be logged in to create a post!");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("posts")
      .insert([{
        ...postData,
        user_id: currentUser.user_id,
      }])
      .select()
      .single();

    setLoading(false);

    if (!error) {
      console.log('Post added:', data);
      console.log("Inserting post:", { ...postData, user_id: currentUser.user_id });
      navigate("/dashboard"); 
    } else {
      console.error('Error adding post:', error);
    }
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setPostData((prev) => ({ ...prev, post_type: e.target.value }));
  };

  return ( 
    
      <AddPostForm 
        postData={postData}
        handleChange={handleChange}
        handleCategoryChange={handleCategoryChange}
        onSubmit={handleSumbit}
        loading={loading}
      />
  
  );
}
 
export default AddPostPage;
