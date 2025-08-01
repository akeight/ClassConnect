import { Link } from "react-router-dom";  
import Counter from "./Counter";
import PinnedPost from "./PinnedPost"

const PostCard = ({post}) => {
    if (!post) return null;
    const author = post.user || {};

    return ( 
        <div className="card">
            <PinnedPost />

            {author.user_img && (
                <img
                    src={author.user_img}
                />
            )}
            <h4>{post.post_type} Post</h4>
            <h3>Title: {post.title}</h3>
            <p>{post.content?.slice(0, 100)}...</p>

            <small>
                By {author.user_name || "Anonymous"} ({author.role || "guest"})
            </small>

            <div className="vote-container">
                <Counter />
            </div>
            <Link key={post.id} to={`/dashboard/post/${post.id}`}>More Details</Link>
        </div>
     );
}
 
export default PostCard;