import { useState } from "react";
import { supabase } from "../client"; 


const Counter = ({ post }) => {
    const [count, setCount] = useState(post.upvote || 0);
    const [animUp, setAnimUp] = useState("");


    const upVote = async () => {
        const newCount = count + 1;
        setCount(newCount);
        setAnimUp("fa-bounce");
        setTimeout(() => setAnimUp(""), 1000);
       

        const { error } = await supabase
            .from("posts")
            .update({ upvote: newCount })
            .eq("id", post.id);

        if (error) console.error("Upvote failed", error);
};    
    

    return (
        <div className="votes">
            <div>
                <h3>{count}</h3>
            </div>
            <button className="vote-button" onClick={upVote}><i class={`fa-jelly-duo fa-regular fa-lg fa-thumbs-up ${animUp}`}></i></button>
    
        </div>
     );
}
 
export default Counter;