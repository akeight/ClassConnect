import { Link } from "react-router-dom";

const PostDetails = ({post, isOwner}) => {

  const author = post.user || {};

  const createdAtUTC = post.created_at;
  const localDate = new Date(createdAtUTC);
  const formatted = localDate.toLocaleString();

  return (
    <div className="post-details">
      {author.user_img && (
        <img src={author.user_img}
        className="avatar-large" />
      )}
     
      <p>Post Type: {post.post_type}</p>
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>

      <small>
        By {author.user_name || "Anonymous"} ({author.role || "guest"})
      </small>

      <p>Created: {formatted}</p>
    
      {isOwner && (
      <div>
        <Link to={`/edit/${post.id}`}>Edit Post</Link>
      </div>
      )}
    </div>
  );
}
 
export default PostDetails;