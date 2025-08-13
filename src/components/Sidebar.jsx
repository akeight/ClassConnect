import {Link} from "react-router-dom"
import Filters from "./Filters";

const Sidebar = ({currentUser, filters, setFilters}) => {
    return ( 
        <aside className="card">
            
                <div className="sidebar-components">
                    <h3>Hello, {currentUser?.user_name || "Guest"}</h3>
                    <ul>
                    <Link to="/"><li className="button"><i class="fa-jelly-duo fa-regular fa-lg fa-house"></i>Log In</li></Link>
                    <Link to="/dashboard/new-post"><li className="button"><i class="fa-jelly-duo fa-regular fa-lg fa-plus"></i>Create Post</li></Link>
                    <Link to="/dashboard"><li className="button"><i class="fa-jelly-duo fa-regular fa-lg fa-expand"></i>All Posts</li></Link>
        
                    </ul>
                </div>

                <div className="sidebar-components">
                   <Filters filters={filters} setFilters={setFilters} />
                </div>
         
        </aside>
     );
}
 
export default Sidebar;
