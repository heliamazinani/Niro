import React, { useState, useEffect } from "react";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [sidebarWidth, setSidebarWidth] = useState(sidebarOpen ? 250 : 0);

  // Update on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
        setSidebarWidth(250);
      } else {
        setSidebarOpen(false);
        setSidebarWidth(0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarToggle = (isOpen) => {
    setSidebarOpen(isOpen);
    setSidebarWidth(isOpen ? 250 : 0);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <DashboardSidebar isOpen={sidebarOpen} onToggle={handleSidebarToggle} />

      {/* Main Content */}
      <div
        style={{
          marginLeft: window.innerWidth >= 768 ? `${sidebarWidth}px` : "0",
          width: "100%",
          transition: "margin-left 0.3s ease",
          background: "transparent",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
