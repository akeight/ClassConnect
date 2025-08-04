import { Link } from "react-router-dom";
// import { Counter } from "./Counter";

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

        {/* <div className="vote-container">
          <Counter postId={post.id} />
        </div> */}
    
      <h5>{post.post_type}</h5>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <small>
        Posted By: {author.user_name || "Anonymous"} ({author.role || "guest"})
        Post id#: {post.id}
        Created: {formatted}
      </small>

      
      {isOwner && (
      <div className="details-btn">
        <button className="button">
          <Link to={`/dashboard/edit/${post.id}`}><i class="fa-jelly-duo fa-regular fa-lg fa-pencil"></i> Edit Post</Link>
        </button>
      </div>
      )}
    </div>
  );
}
 
export default PostDetails;