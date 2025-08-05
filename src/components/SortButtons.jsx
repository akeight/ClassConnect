import {useState} from "react";


const SortButtons = ({ sortOption, setSortOption }) => {
  const [isNewest, setNewest] = useState(true);

  const toggleSort = () => {
    const nextSort = isNewest ? "oldest" : "newest";
    setNewest(!isNewest);
    setSortOption(nextSort);
  }

  return (
    <div className="sort-buttons">
     <button onClick={toggleSort}>
        {isNewest ? "Sort Oldest" : "Sort Newest"}
      </button>
      <button
        className={sortOption === "upvotes" ? "active" : ""}
        onClick={() => setSortOption("upvotes")}
      >
        Most Upvotes
      </button>
    </div>
  );
};

export default SortButtons;
