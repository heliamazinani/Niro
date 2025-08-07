import React from "react";
import SecureVideoPlayer from "../components/SecureVideoPlayer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Video = () => {
  return (
    <div id="smooth-wrapper">
      <Navbar />
      <div id="smooth-content">
        <main className="main-bg">
          <div className="text-center">
            <h1>Secure Video Player</h1>
            <SecureVideoPlayer
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              poster="https://via.placeholder.com/800x400"
            />
          </div>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Video;
