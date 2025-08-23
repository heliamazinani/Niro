import React, { useState } from "react";
import Footer from "./Footer.jsx";
import ASlider from "./ASlider.jsx";
import Team from "./Team.jsx";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://api.ecosunir.ir:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
    if (data.userRole === "Admin") {
      navigate("/dashboard"); // go to admin dashboard
    } else {
      navigate("/"); // go to homepage (or user dashboard)
    }
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <>
      <div className="full-width">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="messages"></div>

          <div className="controls row">
            <div className="col-12">
              <div className="form-group mb-30">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <div className="form-group mb-30">
                <input
                  id="form_password"
                  type="password"
                  name="password"
                  placeholder="رمز عبور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="butn butn-md butn-bg main-colorbg3 text-dark"
                style={{ borderRadius: "10px" }}
              >
                <span className="text">ورود</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
