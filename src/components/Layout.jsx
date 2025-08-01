import {Outlet} from "react-router-dom" 
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightPanel from "./RightPanel";

const Layout = () => {
    return ( 
        <>
        <Header />
          <div className="app-container">
            <RightPanel />
            <Sidebar />
            <div className="primary-content">
                <Outlet />
            </div>
          </div>
        </>
     );
}
 
export default Layout;