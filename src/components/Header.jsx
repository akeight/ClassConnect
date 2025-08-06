import { useEffect, useState } from "react";

const Header = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Load saved theme on mount
        const savedTheme = localStorage.getItem("theme") || "light";
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
            setTheme(newTheme);
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
    };

    return ( 
        <div className="card header">
            <h1>ClassConnect</h1>
            
            <button className="button" onClick={toggleTheme}>
                {theme === "dark" ? 
                    <i class="fa-jelly fa-regular fa-sun fa-xl"></i> 
                : 
                    <i class="fa-jelly fa-regular fa-moon fa-xl"></i>
                }
            </button>
        </div>
     );
}
 
export default Header;