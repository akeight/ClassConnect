const ViewComments = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return <p>No comments yet. Be the first!</p>;
  }

  return (
    <div className="comments-section">
      {comments.map((c) => (
        <div key={c.id} className="comment-card">
          <strong>{c.user?.user_name || "Anonymous"}:</strong> {c.content}
        </div>
      ))}
    </div>
  );
};

export default ViewComments;

