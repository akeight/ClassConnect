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
            <button onClick={upVote}><i class={`fa-jelly-duo fa-regular fa-lg fa-thumbs-up ${animUp}`}></i></button>
            <button onClick={downVote}><i class={`fa-jelly-duo fa-regular fa-lg fa-thumbs-down ${animDown}`}></i></button>
            <h5>{count}</h5>
        </div>
     );
}
 
export default Counter;