import { Link } from "react-router-dom";  

const PostCard = ({postData}) => {

    return ( 
        <div className="card">
            {/* <img src={postData.user_img} alt={postData.user} /> */}
            <p>{postData.user}</p>
            <h4>{postData.class} Post</h4>
            <h3>Title: {postData.title}</h3>
            <p>Content: {postData.content}</p>
            <Link to={`/post/${postData.id}`}>More Details</Link>
        </div>
     );
}
 
export default PostCard;