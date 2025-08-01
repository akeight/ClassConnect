const EditPostForm = ({ postData, setPostData, onSubmit, onDelete, loading }) => {
  if (!postData) return <p>Loading post form…</p>;

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };



  return (
    <form onSubmit={onSubmit} className="hard-shadow">

      <div className="category">
        <label>Choose Post Category:</label>
        <select value={postData.class} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Question">Question</option>
          <option value="Opinion">Opinion</option>
          <option value="For_Sale">For Sale</option>
        </select>
      </div>

      <label>Title:</label>
        <input
          type="text"
          name="title"
          value={postData.title || ""}
          onChange={handleChange}
        />

      <label>Content:</label>
        <input
          type="text"
          name="content"
          value={postData.content || ""}
          onChange={handleChange}
        />

      {/* Add other fields here the same way */}

      <button type="submit" disabled={loading} value="Save Changes">
        Save
      </button>
      <button type="button" className="deleteBtn" disabled={loading} onClick={onDelete}>
        Delete
      </button>
    </form>
  );
};

export default EditPostForm;