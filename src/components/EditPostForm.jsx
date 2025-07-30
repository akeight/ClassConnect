const EditPostForm = ({ postData, setCharacter, onSubmit, onDelete }) => {
  if (!postData) return <p>Loading post form…</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="hard-shadow">
      <label>Name:</label>
      <input
        type="text"
        name="character_name"
        value={postData.character_name}
        onChange={handleChange}
      />

      <div className="category">
        <label>Choose Post Category:</label>
        <select value={postData.class} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Question">Question</option>
          <option value="Opinion">Opinion</option>
          <option value="Cozy_Creature">For Sale</option>
        </select>
      </div>

      <label>Protection:</label>
      <input
        type="number"
        name="protection"
        value={postData.protection}
        onChange={handleChange}
      />

      <label>Agility:</label>
      <input
        type="number"
        name="agility"
        value={postData.agility}
        onChange={handleChange}
      />

      <label>Speed:</label>
      <input
        type="number"
        name="speed"
        value={postData.speed}
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