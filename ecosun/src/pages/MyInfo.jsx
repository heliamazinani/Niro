import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar";
function MyInfo() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");


    if (!token || !storedUser) {
     
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <div>در حال بارگذاری اطلاعات...</div>;
  }

  return (
        <>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
    <div className="container mt-5">
      <h2>اطلاعات حساب کاربری</h2>
      <p>
        <strong>نام:</strong> {user.name}
      </p>
      <p>
        <strong>ایمیل:</strong> {user.email}
      </p>
    </div>
              </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default MyInfo;
