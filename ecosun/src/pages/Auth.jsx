import Navbar from "../components/Navbar.jsx";
import React, { useState } from "react";
import Footer from "../components/Footer.jsx";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

function Auth() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign Up

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle the state
  };

  return (
    <>
      <Navbar></Navbar>

      <main className="main-bg">
        <section className="contact-crev section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-9">
                <div className="sec-head text-center">
                  <div className="row">
                    <div className="col">
                      <h6
                        className={isLogin ? "active" : "inactive"}
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={toggleForm}
                      >
                        ورود
                      </h6>
                    </div>
                    <div className="col">
                      <h6
                        className={!isLogin ? "active" : "inactive"}
                        onClick={toggleForm}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        ثبت نام
                      </h6>
                    </div>
                  </div>
                  {isLogin ? <Login /> : <SignUp />}{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Auth;
