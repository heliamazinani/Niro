import Navbar from "./Navbar.jsx";
import React, { useState } from "react";
import Footer from "./Footer.jsx";
import ASlider from "./ASlider.jsx";
import Team from "./Team.jsx";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
   e.preventDefault();

   console.log("Name before submit:", name);
   
   try {
     const response = await fetch("http://api.ecosunir.ir:3000/api/register", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ name, email, password }),
     });
     console.log(JSON.stringify({ name, email, password }));
     const data = await response.json();
     console.log("Register Response:", data);

     if (!response.ok) {
       throw new Error(data.message || "Signup failed");
     }

     // ✅ If register does not return token, login now
     const loginResponse = await fetch(
       "http://api.ecosunir.ir:3000/api/login",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ email, password }),
       }
     );

     const loginData = await loginResponse.json();

     if (!loginResponse.ok) {
       throw new Error(loginData.message || "Login failed");
     }

    
     localStorage.setItem("token", loginData.token);
     window.location.href = "/";
   } catch (error) {
     console.error("Signup error:", error.message);
     alert("Signup failed: " + error.message);
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
                  id="form_name"
                  type="text"
                  name="Name"
                  placeholder="نام کاربری "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

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
                <span className="text">ثبت نام</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
