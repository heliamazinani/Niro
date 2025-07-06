import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import React from "react";
import test4 from "../assets/dark/imgs/testim/4.jpg";
import test1 from "../assets/dark/imgs/testim/01.png";
import quote from "../assets/dark/imgs/svg-assets/quote.png";
import darkdots from "../assets/dark/imgs/patterns/dots.png";
import lightdots from "../assets/light/imgs/patterns/dots.png";
const Testimonials = () => {
  const { theme } = useContext(ThemeContext);
  const dots = theme === "dark" ? darkdots : lightdots;
  // const test1 = require("../assets/dark/imgs/testim/01.png");
  return (
    <>
      <section className="testim-crv2 sub-bg position-re">
        <div className="container section-padding position-re">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div
                className="testim-swiper mt-80"
                data-carousel="swiper"
                data-items="1"
                data-loop="true"
                data-space="30"
              >
                <div
                  id="content-carousel-container-unq-testim"
                  className="swiper-container"
                  data-swiper="container"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item">
                        <div className="cont mb-30">
                          <div className="rate-stars mb-20 fz-14">
                            <span className="rate main-color3">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </span>
                          </div>
                          <h5 className="fw-400">
                            من در این مورد مردم را استخدام کرده ام فضا برای
                            چندین سال و من هرگز این سطح را ندیده ام حرفه ای
                            گری.واقعاً مثل شما احساس می شود کار با تیمی که می
                            تواند کار را بدست آورد انجام شده.
                          </h5>
                        </div>
                        <div className="line-icon mb-20 d-flex">
                          <div className="ml-auto">
                            <div className="img sub-bg">
                              <img src={quote} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="img circle-60">
                              <img src={test4} alt="" className="circle-img" />
                            </div>
                          </div>
                          <div className="ml-30">
                            <div className="info">
                              <h6 className="fz-16">محمد محمدی</h6>
                              <span className="opacity-7 sub-title">
                                مدیر عامل
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-controls testim-controls arrow-out d-flex mt-50">
                <div className="swiper-button-next">
                  <span className="right">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="swiper-button-prev ml-50">
                  <span className="left">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="half-img-left bg-img ontop md-hide"
            style={{
              backgroundImage: `url(${test1})`,
            }}
          ></div>
        </div>
        <div
          className="bg-pattern bg-repeat bg-img opacity-1"
          style={{
            backgroundImage: `url(${dots})`,
          }}
        ></div>
      </section>
    </>
  );
};

export default Testimonials;
