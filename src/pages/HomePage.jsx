import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import Login from "../components/Login";

const HomePage = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async ({ userName, role, userImg }) => {
    setLoading(true);

    const randomUserId = `user-${Math.floor(Math.random() * 100000)}`;

    const { data: newUser, error } = await supabase
      .from("user")
      .insert([{
        user_id: randomUserId,
        user_name: userName,
        role,
        user_img: userImg,
      }])
      .select()
      .single();

    setLoading(false);
    console.log("newUser type:", Array.isArray(newUser) ? "array" : typeof newUser, newUser);


    if (!error && newUser) {
      console.log("New user created:", newUser);
      setCurrentUser(newUser); 
      navigate("/dashboard");
    } else {
      console.error("Error creating user:", error);
    }
  };


  return (
      <Login onSubmit={handleLogin} loading={loading} />
   
  );
};

export default HomePage;

