const Filters = ({ filters, setFilters }) => {
    
  return (
    <div className="filters-aside">
      <h2>
        Filter Posts
        <label>
          <i className="fa-jelly fa-regular fa-lg fa-filter"></i>
        </label>
      </h2>

      <div className="filter-search">
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
            <i className="fa-jelly-duo fa-regular fa-font-awesome"></i> Announcements
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
            <i className="fa-jelly-duo fa-regular fa-pencil"></i> Sign Ups
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
            <i className="fa-jelly-duo fa-regular fa-question"></i> Questions
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
