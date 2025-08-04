import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
    const [animUp, setAnimUp] = useState("");
    const [animDown, setAnimDown] = useState("");

    const upVote = () => {
        setCount(count + 1);
        setAnimUp("fa-bounce");
        setTimeout(() => setAnimUp(""), 1000);
    };

     const downVote = () => {
        setCount(count - 1);
        setAnimDown("fa-bounce");
        setTimeout(() => setAnimDown(""), 1000);
    };

    // const handleVote() => {

    // }

    return ( 
        <div className="votes">
            <div>
                <h3>{count}</h3>
            </div>
            <button className="vote-button" onClick={upVote}><i class={`fa-jelly-duo fa-regular fa-lg fa-thumbs-up ${animUp}`}></i></button>
            <button className="vote-button" onClick={downVote}><i class={`fa-jelly-duo fa-regular fa-lg fa-thumbs-down ${animDown}`}></i></button>
        </div>
     );
}
 
export default Counter;