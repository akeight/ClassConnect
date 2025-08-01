import {Link} from "react-router-dom"

const Sidebar = () => {
    return ( 
        <aside className="sidebar">
            <div className="sidebar-components">
                <ul>
                  <li><Link to="/">Log In</Link></li>
                  <li><Link to="/dashboard/new-post">Create Post</Link></li>
                  <li><Link to="/dashboard">View All Posts</Link></li>
        
                </ul>
            </div>
        </aside>
     );
}
 
export default Sidebar;