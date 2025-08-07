import { useState } from "react";
import boy1 from "/assets/boy-1.png";
import boy2 from "/assets/boy-2.png";
import boy3 from "/assets/boy-3.png";
import boy4 from "/assets/boy-4.png";
import girl1 from "/assets/girl-1.png";
import girl2 from "/assets/girl-2.png";
import girl3 from "/assets/girl-3.png";
import girl4 from "/assets/girl-4.png";

const Login = ({ onSubmit, loading }) => {
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [userImg, setUserImg] = useState("");

  const userAvatars = [
    girl1,
    girl2,
    girl3,
    girl4,
    boy1,
    boy2,
    boy3,
    boy4,
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
    <div className="login-container">
      <div className="card">
        <div className="card-header">
          <h1>ClassConnect</h1><br />
          <p>Enter your name, select your role, and choose an avatar:</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
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
                      ? "3px solid #000"
                      : "3px solid transparent",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
          
          <button className="button" type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Enter Dashboard"}
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
