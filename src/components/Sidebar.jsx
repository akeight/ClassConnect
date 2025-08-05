import {Link} from "react-router-dom"
import Filters from "./Filters";

const Sidebar = ({currentUser, filters, setFilters}) => {
    return ( 
        <aside className="card">
            
                <div className="sidebar-components">
                    <h3>Hello, {currentUser?.user_name || "Guest"}</h3>
                    <ul>
                    <li className="button"><i class="fa-jelly-duo fa-regular fa-lg fa-house"></i> <Link to="/">Log In</Link></li>
                    <li className="button"><i class="fa-jelly-duo fa-regular fa-lg fa-plus"></i> <Link to="/dashboard/new-post">Create Post</Link></li>
                    <li className="button"><i class="fa-jelly-duo fa-regular fa-lg fa-expand"></i> <Link to="/dashboard">All Posts</Link></li>
        
                    </ul>
                </div>

                <div className="sidebar-components">
                   <Filters filters={filters} setFilters={setFilters} />
                </div>
         
        </aside>
     );
}
 
export default Sidebar;