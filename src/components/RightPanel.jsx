

const RightPanel = () => {

  const tips = [
        "💡 Check announcements from your child’s teacher.",
        "📨 Sign Up for teacher requests.",
        "⭐ Pin posts to review later.",
        "📨 Leave a friendly comment.",
      ];
   

  return (
    <aside className="card">
      <div className="panel-header">
        <h3>Tips</h3>
      </div>

      <ul className="tips-list">
        {tips.map((tip, index) => (
          <li key={index} className="tip-item">
            {tip}
          </li>
        ))}
      </ul>

      <div className="panel-footer">
      </div>
    </aside>
  );
};

export default RightPanel;

