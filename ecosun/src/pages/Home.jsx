import Navbar from "../components/Navbar";
import Slider from "../components/Slider.jsx";
import About from "../components/About.jsx";
import Loader from "../components/Loader.jsx";
import Spin from "../components/Spin.jsx";
import Services from "../components/Services.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Numbers from "../components/Numbers.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Block from "../components/Block.jsx";
import Why from "../components/Why.jsx";
import IS from "../components/instaSlider.jsx";
import Blog from "../components/Blog.jsx";
import Footer from "../components/Footer.jsx";
import FAQs from "../components/FAQs.jsx";
import ScrollToTop from "../components/ScrolltoTopButton.jsx";
import postsData from "../data/posts.json";

import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

function Home() {
      const [posts, setPosts] = useState([]);

      useEffect(() => {
        // Load from localStorage first, or fallback to JSON file
        const savedPosts = JSON.parse(localStorage.getItem("posts"));
        setPosts(savedPosts || postsData.posts);
      }, []);

      // Save changes to localStorage whenever posts update
      useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts));
      }, [posts]);


  return (
    <>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Slider></Slider>
            <About></About>
            <IS></IS>
            <Services></Services>
            <Spin></Spin>
            {/* <Portfolio></Portfolio> */}
            {/* <Numbers></Numbers> */}
            {/* <Testimonials></Testimonials> */}
            <Why></Why>
            {/* <Block></Block> */}
            <FAQs></FAQs>
            {/* <Pricing></Pricing> */}
            <section className="blog-crev section-padding">
              <div className="container">
                <div className="sec-lg-head mb-80">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="position-re">
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        >
                          <h6 className="dot-titl colorbg-3 mb-10">وبلاگ ما</h6>
                        </motion.div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center">
                      <div className="full-width d-flex justify-content-end justify-end">
                        <div className="vew-all wow fadeIn">
                          <a href="blog-classNameic.html">
                            نمایش تمام مقاله ها
                            <span>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                className="mirror"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {posts.slice(-3).map((item) => (
                    <Blog
                      key={item.id}
                      date={item.date}
                      img={item.img}
                      link={`/posts/${item.id}`}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
            </section>
            ;
          </main>
          <Footer></Footer>
        </div>
   
      </div>
    </>
  );
};

export default Home;
