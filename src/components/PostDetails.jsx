import { Link } from "react-router-dom";
import Counter from "./Counter";


const PostDetails = ({post, isOwner, onDelete, loading}) => {

  const author = post.user || {};

  const createdAtUTC = post.created_at;
  const localDate = new Date(createdAtUTC);
  const formatted = localDate.toLocaleString();

  const iconMap = {
    Question: "fa-regular fa-2xl fa-question",
    Announcement: "fa-regular fa-2xl fa-font-awesome",
    Resource: "fa-regular fa-2xl fa-book-open",
    Random: "fa-regular fa-2xl fa-face-smile",
    Sign_Up: "fa-regular fa-2xl fa-pencil",
    Repost: "fa-regular fa-2xl fa-arrows-rotate",
    };

    const iconClass = iconMap[post.post_type] || "fa-regular fa-comment-dots";


  return (
    <div className="post-details">
      {author.user_img && (
        <img src={author.user_img}
        className="avatar-large" />
      )}
    
      <div className="post-type">
        <i className={`fa-jelly-duo ${iconClass}`}></i>
      </div>
      <br/>
      
      <h2>{post.title}</h2>


      {post.repost && (
        <div className="repost-content repost-card">
          <div className="repost-header">
            <p>{post.user.user_name} Reposted:</p>
          </div>
            <h3>{post.repost.title}</h3>
            <div className="repost-contents">
              {post.repost.content_img && (
              <img src={post.repost.content_img} className="repost-img" />
            )}

            <p>{post.repost.content}</p>

            <div className="repost-link">
              <i className="fa-jelly-duo fa-solid fa-arrow-right"></i>
              <Link to={`/dashboard/post/${post.repost.id}`} className="repost-anchor">
                View Original Post
              </Link>
            </div>
            <p className="repost-date">
              Originally posted by {post.repost.user.user_name} on{" "}
              {new Date(post.repost.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}


      {post.content_img && (
      <div className="post-image">
        <img src={post.content_img}></img>
      </div>
      )}
      <h4>{post.content}</h4>

      <div className="post-snips">
        <p>Posted By:  <strong>{author.user_name || "Anonymous"} ({author.role || "guest"})</strong><br/>
        Post id#:  <strong>{post.id}</strong><br/>
        Created:  <strong>{formatted}</strong></p>
      </div>

      <div className="vote-container">
          <Counter post={post} />
      </div>

      
      {isOwner && (
      <div className="details-btn">
        <button className="button edit">
          <Link to={`/dashboard/edit/${post.id}`}><i class="fa-jelly-duo fa-regular fa-lg fa-pencil"></i> Edit Post</Link>
        </button>
        <button className="button delete" disabled={loading} onClick={onDelete}>
          <i class="fa-jelly-duo fa-regular fa-lg fa-trash"></i> Delete
        </button>
      </div>
      )}
      
    </div>
  );
}
 
export default PostDetails;