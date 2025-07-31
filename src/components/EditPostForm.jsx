const EditPostForm = ({ postData, setPostData, onSubmit, onDelete }) => {
  if (!postData) return <p>Loading post form…</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="hard-shadow">
      <label>Name:</label>
      <input
        type="text"
        name="user"
        value={postData.user}
        onChange={handleChange}
      />

      <div className="category">
        <label>Choose Post Category:</label>
        <select value={postData.class} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Question">Question</option>
          <option value="Opinion">Opinion</option>
          <option value="For_Sale">For Sale</option>
        </select>
      </div>

      <label>Name:</label>
        <input
          type="text"
          name="user"
          placeholder="eg PookieFace"
          value={postData.user}
          onChange={handleChange}
        />

      <label>Title:</label>
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={handleChange}
        />

      <label>Content:</label>
        <input
          type="text"
          name="content"
          value={postData.content}
          onChange={handleChange}
        />

      {/* Add other fields here the same way */}

      <input type="submit" value="Save Changes" />
      <button type="button" className="deleteBtn" onClick={onDelete}>
        Delete
      </button>
    </form>
  );
};

export default EditPostForm;