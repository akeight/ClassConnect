// src/pages/DashboardPage.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import RightPanel from "../components/RightPanel.jsx";
import Header from "../components/Header.jsx";
import { useState } from "react";

const DashboardPage = ({ role, currentUser }) => {
  const [filters, setFilters] = useState({
  searchTerm: "",
  post_type: {
    Announcement: false,
    Sign_Up: false,
    Question: false
  }
});

  return (
    <>
        <Header />
        <div className="dashboard-layout">
            <aside className="sidebar">
              <Sidebar role={role} currentUser={currentUser} filters={filters} setFilters={setFilters} />
            </aside>
            <main className="card">
              <Outlet context={{ filters, setFilters, currentUser }} /> {/* Renders nested dashboard pages */}
            </main>
            <aside className="right-panel">
              <RightPanel role={role} />
            </aside>
        </div>
    </>
  );
};

export default DashboardPage;
