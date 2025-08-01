import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Blog = ({ date, img, title, link }) => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <>
      <div className="col-lg-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="item md-mb50">
            <div className="cont">
              <h6>
                <Link to={link} onClick={scrollToTop}>
                  {title}
                </Link>
              </h6>
              <div className="info mt-20 mb-20 pt-20 bord-thin-top">
                <span className="by">
                  <a>
                    <i className="far fa-user fz-14 mr-10"></i> توسط ادمین
                  </a>
                </span>
                <span className="dot main-colorbg3"></span>
                <span className="date">
                  <Link to={link}>
                    <i className="far fa-calendar-alt fz-14 mr-10"></i>
                    {date}
                  </Link>
                </span>
              </div>
            </div>
            <div style={{ width: "100%", height: "220px", overflow: "hidden" }}>
              <img
                src={img}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Link to={link} className="main-colorbg3" onClick={scrollToTop}>
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
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Blog;
