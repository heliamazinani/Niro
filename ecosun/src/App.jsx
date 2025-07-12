import "./assets/dark/css/plugins.css";
import "./assets/dark/css/style.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import SingleBlog from "./pages/SingleBlog"

function App() {
  return (
    <>
      <BrowserRouter>
        <div class="home-corp main-bg">
          <Loader></Loader>
          <div id="smooth-wrapper">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<AboutUs />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/contact" element={<ContactUs />}></Route>
              <Route path="/posts/:id" element={<SingleBlog></SingleBlog>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
