import Navbar from "./Navbar.jsx";
import React, { useState } from "react";
import Footer from "./Footer.jsx";
import ASlider from "./ASlider.jsx";
import Team from "./Team.jsx";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signing up with:", { name, email, password });
  };
  return (
    <>
      <div className="full-width">
        <form id="contact-form" method="post" action="#">
          <div className="messages"></div>

          <div className="controls row">
            <div className="col-12">
              <div className="form-group mb-30">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="نام کاربری "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required="required"
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
                  required="required"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="form-group mb-30">
                <input
                  id="form_name"
                  type="password"
                  name="name"
                  placeholder="رمز عبور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required="required"
                />
              </div>
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="butn butn-md butn-bg main-colorbg3 text-dark "
                style={{ borderRadius: "10px" }}
              >
                <span className="text">ثبت نام </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
