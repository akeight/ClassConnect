

const ViewComments = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return <h4>No comments yet. Be the first!</h4>;
  }

  return (
 
   <div className="comments-section">
      {comments.map((c) => (
        <div key={c.id} className="comment">
          <div className="comment-header">
            <img
              src={c.user?.user_img}
              alt={c.user?.user_name}
              className="comment-avatar"
            />
            <h5>{c.user?.user_name || "Unknown User"}</h5>
          </div>
          <div className="comment-content">
            <i class="fa-jelly fa-regular fa-lg fa-comment"></i>
            <p>{c.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewComments;
