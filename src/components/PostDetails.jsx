import { Link } from "react-router-dom";

const PostDetails = ({postData}) => {

  const createdAtUTC = postData.created_at;
  const localDate = new Date(createdAtUTC);
  const formatted = localDate.toLocaleString();

  return (
    <div className="card">
      <img src={postData.user_img} alt={postData.user} />
      <h2>{postData.user}</h2>
      <p>Post Type: {postData.class}</p>
      <p>Title: {postData.tilte}</p>
      <p>Content: {postData.content}</p>
      <p>Created: {formatted}</p>
      {/* Add more spicy details here */}
      <Link to={`/edit/${postData.id}`}>Edit Post</Link>
    </div>
  );
}
 
export default PostDetails;