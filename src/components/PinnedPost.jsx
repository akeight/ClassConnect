import { useState } from "react";

const PinnedPost = () => {
    const [pin, setPin] = useState(null);

    const togglePin = () => {
        setPin(prev => (prev === "" ? "-duo" : "")); 
    }

    return ( 
        <div className="pin">
            <i class={`fa-jelly${pin} fa-regular fa-thumbtack fa-lg pin-icon`} onClick={togglePin}></i>
        </div>
     );
}
 
export default PinnedPost;