import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRole, children }) => {
 const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signup");
      return;
    }

    fetch("https://api.ecosunir.ir/api/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // This is how most APIs expect tokens
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        console.log(data);
        setUser(data);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/signup");
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <div>در حال بارگذاری اطلاعات...</div>;

  if (!user) return <div>اطلاعات یافت نشد.</div>;
  // Role doesn’t match → send to homepage
  if (allowedRole && user.userRole !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  // ✅ Allowed → render child component
  return children;
};

export default ProtectedRoute;
