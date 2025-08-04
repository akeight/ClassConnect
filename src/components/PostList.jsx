import PostCard from './PostCard';

function PostList({ postData, currentUser }) {

  return (
  
    <div>
      {postData.map((post) => (
        <PostCard key={post.id} post={post} currentUser={currentUser} />
      ))}
    </div>
    
  );
}

export default PostList;