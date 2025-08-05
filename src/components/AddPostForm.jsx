import { useFormStatus } from "react-dom"

function AddPostForm({ postData, handleChange, handleCategoryChange, onSubmit}) {
    const { pending } = useFormStatus();

  return (
    <>
      <div className="card-header">
         <h1>Craft New Post</h1>
      </div>
    <form onSubmit={onSubmit} className="add-post">

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
          <option value="Repost">Repost</option>
        </select>
      </div>

      {/* 2. Show Image Options Based on Category */}
    

      {/* 3. The rest of your attributes */}
     
      <div className="inputs">
        
          <div className="category"><label>Title:</label>
            <input
              type="text"
              placeholder="required"
              className="input"
              name="title"
              value={postData.title}
              onChange={handleChange}
          />
        </div>
        
        <div className="post-text">
          
          <label className="labels"><i class="fa-jelly fa-regular fa-lg fa-link"></i></label>
            <input
              type="text"
              placeholder="image url (optional)"
              className="input"
              name="content_img"
              value={postData.content_img || ""}
              onChange={handleChange}
          />
         
          <div className="labels"><label><i class="fa-jelly fa-regular fa-lg fa-arrows-rotate"></i></label></div>
            <input
              type="text"
              placeholder="repost post id# (optional)"
              className="input"
              name="content"
              value={postData.id || ""}
              onChange={handleChange}
          />
        </div>

        <div className="post-content">
          <div className="content"><label>Post Content:</label>
            <textarea
              rows="4"
              cols="40"
              placeholder="type content here... (optional)"
              className="content-input"
              name="content"
              value={postData.content || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="role-buttons">
        <button className="button" type="submit" disabled={!postData.title}>
          <i class="fa-jelly fa-regular fa-xl fa-circle-plus"></i> {pending ? "Adding..." : "Add Post!"}
        </button>
      </div>
        
    </form>
    </>
  );
};

export default AddPostForm;