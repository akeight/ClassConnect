import {Link} from "react-router-dom"

const Sidebar = () => {
    return ( 
        <aside className="card">
            
                <div className="sidebar-components">
                    <h3>Hello "username"</h3>
                    <ul>
                    <li className="button"><Link to="/">Log In</Link></li>
                    <li className="button"><Link to="/dashboard/new-post">Create Post</Link></li>
                    <li className="button"><Link to="/dashboard">All Posts</Link></li>
        
                    </ul>
                </div>
         
        </aside>
     );
}
 
export default Sidebar;