import {Link} from "react-router-dom"

const Sidebar = ({currentUser}) => {
    return ( 
        <aside className="card">
            
                <div className="sidebar-components">
                    <h3>Hello, {currentUser?.user_name || "Guest"}</h3>
                    <ul>
                    <li className="button"><i class="fa-jelly fa-regular fa-lg fa-house"></i> <Link to="/">Log In</Link></li>
                    <li className="button"><i class="fa-jelly fa-regular fa-lg fa-plus"></i> <Link to="/dashboard/new-post">Create Post</Link></li>
                    <li className="button"><i class="fa-jelly fa-regular fa-lg fa-expand"></i> <Link to="/dashboard">All Posts</Link></li>
        
                    </ul>
                </div>
         
        </aside>
     );
}
 
export default Sidebar;