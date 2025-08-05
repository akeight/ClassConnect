const Filters = ({ filters, setFilters }) => {
    
  return (
    <div className="filters-aside">
      <h3>
        Filter Posts
        <label>
          <i className="fa-jelly fa-regular fa-lg fa-filter"></i>
        </label>
      </h3>

      <div className="post-content">
        <div className="filter-checkboxes">
          <label>
            <input
              type="checkbox"
              checked={filters.post_type.Announcement}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  post_type: {
                    ...prev.post_type,
                    Announcement: !prev.post_type.Announcement,
                  },
                }))
              }
            />
            <i className="fa-jelly-duo fa-regular fa-lg fa-font-awesome"></i> <h4>Announcements</h4>
          </label>

          <label>
            <input
              type="checkbox"
              checked={filters.post_type.Sign_Up}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  post_type: {
                    ...prev.post_type,
                    Sign_Up: !prev.post_type.Sign_Up,
                  },
                }))
              }
            />
            <i className="fa-jelly-duo fa-regular fa-lg fa-pencil"></i> <h4>Sign Ups</h4>
          </label>

          <label>
            <input
              type="checkbox"
              checked={filters.post_type.Question}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  post_type: {
                    ...prev.post_type,
                    Question: !prev.post_type.Question,
                  },
                }))
              }
            />
            <i className="fa-jelly-duo fa-regular fa-lg fa-question"></i> <h4>Questions</h4>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
