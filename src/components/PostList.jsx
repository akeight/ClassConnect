import PostCard from './PostCard';

function PostList({ postData, currentUser }) {

  return (
  
    <div className="grid">
      {postData.map((post) => (
        <PostCard key={post.id} postData={post} currentUser={currentUser} />
      ))}
    </div>
    
  );
}

export default PostList;