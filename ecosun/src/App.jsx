import "./assets/css/plugins.css";
import "./assets/css/style.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import SingleBlog from "./pages/SingleBlog";
import React, { useState, useEffect } from "react";
import Auth from "./pages/Auth";
import Team from "./pages/Team";
import Calc from "./pages/Calc";
import MyInfo from "./pages/MyInfo";
import Shop from "./pages/Shop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching or loading process
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <>
      <BrowserRouter>
        <div class="home-corp main-bg">
          {loading ? (
            <Loader />
          ) : (
            <>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<AboutUs />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/contact" element={<ContactUs />}></Route>
                <Route path="/signup" element={<Auth />}></Route>
                <Route path="/team" element={<Team />}></Route>
                <Route path="/calc" element={<Calc />}></Route>
                <Route path="/info" element={<MyInfo />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/posts/:id" element={<SingleBlog></SingleBlog>} />
              </Routes>
            </>
          )}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
