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
            <aside className="sidebar">
              <Sidebar role={role} />
            </aside>
            <main className="card">
              <Outlet /> {/* Renders nested dashboard pages */}
            </main>
            <aside className="right-panel">
              <RightPanel role={role} />
            </aside>
        </div>
    </>
  );
};

export default DashboardPage;
