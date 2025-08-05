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
          <Counter postId={post} />
        </div> */}
    
      <h5>{post.post_type}</h5>
      <h2>{post.title}</h2>

      {post.content_img && (
      <div className="image-block">
        <img src={post.content_img}></img>
      </div>
      )}
      <h4>{post.content}</h4>

      <div className="post-snips">
        <p>Posted By:  <strong>{author.user_name || "Anonymous"} ({author.role || "guest"})</strong><br/>
        Post id#:  <strong>{post.id}</strong><br/>
        Created:  <strong>{formatted}</strong></p>
      </div>

      
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