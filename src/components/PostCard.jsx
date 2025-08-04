import { Link } from "react-router-dom";  
import Counter from "./Counter";

const PostCard = ({ post }) => {
    console.log("PostList received:", post);
  if (!post || typeof post !== "object") return null;

  // Format date
  const createdDate = new Date(post.created_at).toLocaleDateString();

  return (
        <div className="post-item">
            <div>
                <h3>{post.title}</h3>

                <div className="vote-container">
                    <Counter postId={post.id} />
                </div>
            </div>

            <p className="post-date">Created: {createdDate}</p>
        

            <button className="button">
                <Link to={`/dashboard/post/${post.id}`} className="details-link">
                    Details
                </Link>
            </button>
        </div>
  );
};

export default PostCard;