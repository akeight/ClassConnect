import { useFormStatus } from "react-dom"

function AddPostForm({ postData, handleChange, handleCategoryChange, onSubmit}) {
    const { pending } = useFormStatus();

  return (
    <>
    <form onSubmit={onSubmit} className="hard-shadow">
      <h1>Craft a Post</h1>

      {/* 1. Category Selection */}
      <div className="category">
        <label>Choose Post Category:</label>
        <select value={postData.post_type} onChange={handleCategoryChange} name="post_type">
          <option value="">-- Select --</option>
          <option value="Question">Question</option>
          <option value="Announcement">Announcement</option>
          <option value="Resource">Resource</option>
          <option value="Random">Random</option>
          <option value="Sign_Up">Sign Up</option>
        </select>
      </div>

      {/* 2. Show Image Options Based on Category */}
    

      {/* 3. The rest of your attributes */}
     
      <div className="inputs">
        
        <label>Title:</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
        />

        <label>Post Content:</label>
          <input
            type="text"
            name="content"
            value={postData.content || ""}
            onChange={handleChange}
        />
      </div>

      <div className="input-btns">
        <button type="submit" disabled={!postData.title}>
          {pending ? "Adding..." : "Add Post!"}
        </button>
      </div>
        
    </form>
    </>
  );
};

export default AddPostForm;