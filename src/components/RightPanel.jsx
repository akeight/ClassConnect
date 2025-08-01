import { useEffect, useState } from "react";

const RightPanel = ({ role }) => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    if (role === "teacher") {
      setTips([
        "💡 Post updates for your class here.",
        "📢 Pin important announcements for parents.",
        "👀 View which parents have seen your posts.",
      ]);
    } else {
      setTips([
        "💡 Check announcements from your child’s teacher.",
        "📨 Message teachers for quick questions.",
        "⭐ Bookmark posts to review later.",
      ]);
    }
  }, [role]);

  return (
    <aside className="right-panel">
      <div className="panel-header">
        <h3>{role === "teacher" ? "Teacher Tools" : "Parent Tips"}</h3>
      </div>

      <ul className="tips-list">
        {tips.map((tip, index) => (
          <li key={index} className="tip-item">
            {tip}
          </li>
        ))}
      </ul>

      <div className="panel-footer">
        {role === "teacher" ? (
          <button className="quick-action">+ Add Post</button>
        ) : (
          <button className="quick-action">⭐ Favorite Post</button>
        )}
      </div>
    </aside>
  );
};

export default RightPanel;

