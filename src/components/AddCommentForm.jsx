import { useState } from "react";
import { supabase } from "../client";

const AddCommentForm = ({ postId, currentUser, onCommentAdded }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    if (!currentUser) {
        alert("User not logged in!");
        return;
    }

    // Insert comment into Supabase
    const { data, error } = await supabase
      .from("comments")
      .insert([
        {
          post_id: postId,
          user_id: currentUser.user_id,
          content: comment,
        },
      ])
      .select(`
        *,
        user:user_id (user_name, user_img)
      `)

    if (!error) {
      console.log("AddCommentForm postId:", postId);
      setComment("");
      onCommentAdded(data[0]); // callback to refresh ViewComments
    }
  };

   if (!currentUser) return <h3>Login to leave a comment.</h3>;

  return (
     <div className="post-details">
        <form onSubmit={handleSubmit} className="add-post">
            <textarea
                className="content-input"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                rows={3}
            />
            <button className="button" type="submit">Add Comment <i class="fa-jelly fa-regular fa-lg fa-comment-dots"></i></button>
        </form>
    </div>
  );
    
};

export default AddCommentForm;
