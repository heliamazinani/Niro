import React, { useState } from "react";
import Footer from "./Footer.jsx";
import ASlider from "./ASlider.jsx";
import Team from "./Team.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const userInfo = {
  name: name,
  email: email,
};

// Store in localStorage

const handleSubmit1 = (e) => {
  e.preventDefault();

  // Simulate login success
localStorage.setItem("token", "dummy-token");
localStorage.setItem("user", JSON.stringify(userInfo));

  // Redirect to homepage or profile page
  window.location.href = "/";
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-backend-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save JWT token to localStorage
      localStorage.setItem("token", data.token);

      alert("Login successful!");
      // Optional: navigate to another page
      // window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <>
      <div className="full-width">
        <form id="contact-form" onSubmit={handleSubmit1}>
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
