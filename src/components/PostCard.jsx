import { Link } from "react-router-dom";  
import Counter from "./Counter";

const PostCard = ({ post }) => {
    
  if (!post || typeof post !== "object") return null;

  // Format date
  const createdDate = new Date(post.created_at).toLocaleDateString();

  const iconMap = {
    Question: "fa-regular fa-xl fa-question",
    Announcement: "fa-regular fa-xl fa-font-awesome",
    Resource: "fa-regular fa-xl fa-book-open",
    Random: "fa-regular fa-xl fa-face-smile",
    Sign_Up: "fa-regular fa-xl fa-pencil",
    Repost: "fa-regular fa-xl fa-arrows-rotate",
    };

    const iconClass = iconMap[post.post_type] || "fa-regular fa-comment-dots";


  return (
        <div className="post-item">
            <div className="post-item-header">
                <h3>{post.title}</h3>

                <div className="vote-container">
                    <Counter post={post} />
                </div>
            </div>

            <div className="post-date">
                <p>Created:</p>
                <p>{createdDate}</p>
            </div>

            <div className="card-flag-details">
                <i className={`fa-jelly-duo ${iconClass}`}></i>

                <button className="button">
                    <Link to={`/dashboard/post/${post.id}`} className="details-link">
                        Details
                    </Link>
                </button>
            </div>
        </div>
  );
};

export default PostCard;