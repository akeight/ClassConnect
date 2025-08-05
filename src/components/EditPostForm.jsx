const EditPostForm = ({ postData, setPostData, onSubmit, loading }) => {
  if (!postData) return <p>Loading post form…</p>;

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };



  return (
    <>
      <div className="post-details">
        <div className="card-header">
           <h2>Edit Your Post</h2>
        </div>
      <form onSubmit={onSubmit} className="add-post">

      <div className="category">
        <label>Post Category:</label>
        <select value={postData.post_type} onChange={handleChange} name="post_type">
          <option value="">-- Select --</option>
          <option value="Question">Question</option>
          <option value="Announcement">Announcement</option>
          <option value="Resource">Resource</option>
          <option value="Random">Random</option>
          <option value="Sign_Up">Sign Up</option>
        </select>
      </div>

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
          
          </div>

        <div className="post-content">
          <div className="content"><label>Post Content:</label>
            <textarea
              rows="4"
              cols="30"
              placeholder="type content here... (optional)"
              className="content-input"
              name="content"
              value={postData.content || ""}
              onChange={handleChange}
            />
          </div>
        
        </div>
       
        </div>

      {/* Add other fields here the same way */}

      <button className="button" type="submit" disabled={loading} value="Save Changes">
       <i class="fa-jelly-duo fa-regular fa-lg fa-circle-plus"></i> Save
      </button>
    </form></div>
    </>
  );
};

export default EditPostForm;