import PostCard from './PostCard';

function PostList({ postData }) {
  if (!postData || postData.length === 0) {
    return <p>No posts found!</p>;
  }

  return (
  
    <div className="grid">
      {postData.map((posts) => (
        <PostCard key={posts.id} postData={posts} />
      ))}
    </div>
    
  );
}

export default PostList;