import {Link} from "react-router-dom"

const Sidebar = () => {
    return ( 
        <aside className="sidebar">
            <div className="sidebar-components">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/new-post">Create Post</Link></li>
                  <li><Link to="/posts">View All Posts</Link></li>
        
                </ul>
            </div>
        </aside>
     );
}
 
export default Sidebar;