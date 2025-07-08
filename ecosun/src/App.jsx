import "./assets/dark/css/plugins.css";
import "./assets/dark/css/style.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
