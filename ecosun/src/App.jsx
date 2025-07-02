import "./App.css";
import Navbar from "./components/Navbar.jsx";
import "../public/assets/assets/css/plugins.css";
import "../public/assets/assets/css/style.css";
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader.jsx";
import useScript from "./components/useScript";
import Slider from "./components/Slider.jsx";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading complete after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="main-app">
          <div classame="cursor"></div>
          <div className="progress-wrap cursor-pointer">
            <svg
              className="progress-circle svg-content"
              width="100%"
              height="100%"
              viewBox="-1 -1 102 102"
            >
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
          </div>
          <div className="home-corp main-bg">
            <div id="smooth-wrapper">
              <Navbar></Navbar>
              <Slider></Slider>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
