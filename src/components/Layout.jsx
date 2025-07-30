import {Outlet} from "react-router-dom" 
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
    return ( 
        <>
        <Header />
          <div className="app-container">
            <Sidebar />
            <div className="primary-content">
                <Outlet />
            </div>
          </div>
        </>
     );
}
 
export default Layout;