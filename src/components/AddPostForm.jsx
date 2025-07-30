import { useFormStatus } from "react-dom"

function AddPostForm({ postData, handleChange, handleCategoryChange, handleImageSelect, onSubmit, userAvatar }) {
    const { pending } = useFormStatus();

  return (
    <>
    <form onSubmit={onSubmit} className="hard-shadow">
      <h1>Craft a Post</h1>

      {/* 1. Category Selection */}
      <div className="category">
        <label>Choose Post Category:</label>
        <select value={postData.class} onChange={handleCategoryChange} name="class">
          <option value="">-- Select --</option>
          <option value="Question">Question</option>
          <option value="Opinion">Opinion</option>
          <option value="For_Sale">For Sale</option>
        </select>
      </div>

      {/* 2. Show Image Options Based on Category */}
      <div className="img-options">
        
          <div>
            <label>Choose an Avatar:</label>
              <div className="images">
                {userAvatar?.map(img => (
                  <img
                    key={img}
                    src={img}
                    alt={postData.user || 'avatar'}
                    style={{
                      width: 100,
                      height: 100,
                      border: postData.user_img === img ? '3px solid #f57150ff' : '1px solid gray',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleImageSelect(img)}
                  />
                ))}
              </div>
          </div>
      </div>

      {/* 3. The rest of your attributes */}
      {postData.user_img && (
        <div className="inputs">
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

          {/* <label>Speed:</label>
          <input
            type="number"
            name="speed"
            value={postData.speed}
            onChange={handleChange}
          /> */}
          

          <button type="submit" disabled={!postData.user || !postData.title || !postData.content || !postData.user_img}>
            {pending ? "Adding..." : "Add Post!"}
          </button>
        </div>
      )}
        
    </form>
    </>
  );
};

export default AddPostForm;