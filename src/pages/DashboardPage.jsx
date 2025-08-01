// src/pages/DashboardPage.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import RightPanel from "../components/RightPanel.jsx";
import Header from "../components/Header.jsx";

const DashboardPage = ({ role }) => {
  return (
    <>
        <Header />
        <div className="dashboard-layout">
            <Sidebar role={role} />
            <main className="main-content">
                <Outlet /> {/* Renders nested dashboard pages */}
            </main>
            <RightPanel role={role} />
        </div>
    </>
  );
};

export default DashboardPage;
