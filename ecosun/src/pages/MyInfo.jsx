import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar";

function MyInfo() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("https://api.ecosunir.ir:5000/api/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // This is how most APIs expect tokens
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        console.log(data);
        setUser(data);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/login");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>در حال بارگذاری اطلاعات...</div>;

  if (!user) return <div>اطلاعات یافت نشد.</div>;

  return (
    <>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <div className="container mt-5">
              <h2>اطلاعات حساب کاربری</h2>
              <p>
                <strong>نام:</strong> {user.Username}
              </p>
              <p>
                <strong>ایمیل:</strong> {user.Email}
              </p>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyInfo;
