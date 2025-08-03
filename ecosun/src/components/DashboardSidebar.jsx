import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const DashboardSidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const location = useLocation();
  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "خانه  ", path: "/" },
    { name: "مدیریت مقالات", path: "/dashboard/essays" },
    { name: "مدیریت محصولات", path: "/dashboard/products" },
    { name: "مدیریت پست‌های اینستاگرام", path: "/dashboard/insta" },
  ];

  return (
    <>
      {/* Hamburger Button (Mobile) */}
      <div
        style={{
          position: "fixed",
          top: "15px",
          left: "15px",
          zIndex: 2000,
          background: "#ffaa17",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
          display: window.innerWidth < 768 ? "block" : "none",
        }}
        onClick={toggleSidebar}
      >
        ☰
      </div>

      {/* Sidebar */}
      <div
        style={{
          width: isOpen ? "250px" : "0px",
          height: "100vh",
          background: "#111",
          color: "#fff",
          position: "fixed",
          borderRight: "1px solid gray ",
          top: 0,
          left: 0,
          overflowX: "hidden",
          transition: "0.3s",
          padding: isOpen ? "20px" : "0px",
          zIndex: 1500,
        }}
      >
        {isOpen && (
          <>
            <h2
              style={{
                color: "#ffaa17",
                marginBottom: "30px",
                fontSize: "20px",
              }}
            >
              داشبورد
            </h2>
            <nav>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    display: "block",
                    padding: "12px 15px",
                    color: location.pathname === item.path ? "#ffaa17" : "#fff",
                    backgroundColor:
                      location.pathname === item.path
                        ? "#2a2a40"
                        : "transparent",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    textDecoration: "none",
                    transition: "0.3s",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default DashboardSidebar;
