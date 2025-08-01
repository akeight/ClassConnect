import { useState } from "react";

const Login = ({ onSubmit, loading }) => {
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [userImg, setUserImg] = useState("");

  const userAvatars = [
    "/src/assets/girl-1.png",
    "/src/assets/girl-2.png",
    "/src/assets/girl-3.png",
    "/src/assets/girl-4.png",
    "/src/assets/boy-1.png",
    "/src/assets/boy-2.png",
    "/src/assets/boy-3.png",
    "/src/assets/boy-4.png",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!userName.trim() || !role || !userImg) {
      alert("Please enter your name, select a role, and pick an avatar.");
      return;
    }
    onSubmit({ userName, role, userImg });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Parent-Teacher Connect</h1>
      <p>Enter your name, select your role, and choose an avatar:</p>

      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="name-input"
      />

      <div className="role-buttons">
        <button
          type="button"
          className={role === "parent" ? "selected" : ""}
          onClick={() => setRole("parent")}
        >
          Parent
        </button>
        <button
          type="button"
          className={role === "teacher" ? "selected" : ""}
          onClick={() => setRole("teacher")}
        >
          Teacher
        </button>
      </div>

      <div className="avatar-select">
        {userAvatars.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="avatar"
            onClick={() => setUserImg(img)}
            style={{
              cursor: "pointer",
              border:
                userImg === img
                  ? "3px solid var(--primary)"
                  : "3px solid transparent",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Creating Account..." : "Enter Dashboard"}
      </button>
    </form>
  );
};

export default Login;
