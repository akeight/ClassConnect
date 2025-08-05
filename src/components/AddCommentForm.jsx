import { useState } from "react";
import { supabase } from "../client";

const AddCommentForm = ({ postId, currentUser, onCommentAdded }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    // Insert comment into Supabase
    const { data, error } = await supabase
      .from("comments")
      .insert([
        {
          post_id: postId,
          user_id: currentUser.id,
          content: comment,
        },
      ])
      .select(`
        *,
        user:user_id (user_name, user_img)
      `);

    if (!error) {
      setComment("");
      onCommentAdded(data[0]); // callback to refresh ViewComments
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment-form">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        rows={3}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default AddCommentForm;
