import React from "react";
import b1 from "../assets/dark/imgs/blog/b1.jpg";
import b2 from "../assets/dark/imgs/blog/b2.jpg";
import b3 from "../assets/dark/imgs/blog/b3.jpg";

const Blog = () => {
  return (
    <>
      <section className="blog-crev section-padding">
        <div className="container">
          <div className="sec-lg-head mb-80">
            <div className="row">
              <div className="col-lg-8">
                <div className="position-re">
                  <h6 className="dot-titl colorbg-3 mb-10">وبلاگ ما</h6>
                  <h2 className="fz-60 fw-700">آخرین اخبار</h2>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-center">
                <div className="full-width d-flex justify-content-end justify-end">
                  <div className="vew-all wow fadeIn">
                    <a href="blog-classNameic.html">
                      نمایش تمام اخبار
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
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="cont">
                  <h6>
                    <a href="blog-details.html">
                      تبلیغات خلاق در زندگی ما به یک اطلاعات تبدیل شد سر و صدا
                    </a>
                  </h6>
                  <div className="info mt-20 mb-20 pt-20 bord-thin-top">
                    <span className="by">
                      <a href="blog-classNameic.html">
                        <i className="far fa-user fz-14 mr-10"></i> توسط ادمین
                      </a>
                    </span>
                    <span className="dot main-colorbg3"></span>
                    <span className="date">
                      <a href="blog-details.html">
                        <i className="far fa-calendar-alt fz-14 mr-10"></i>
                        22 شهریور 1402
                      </a>
                    </span>
                  </div>
                </div>
                <div className="img">
                  <img src={b1} alt="" />
                  <a href="blog-details.html" className="main-colorbg3">
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
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="cont">
                  <h6>
                    <a href="blog-details.html">
                      ما برای موفقیت شما در آینده مواردی ایجاد می کنیم رشد
                    </a>
                  </h6>
                  <div className="info mt-20 mb-20 pt-20 bord-thin-top">
                    <span className="by">
                      <a href="blog-classNameic.html">
                        <i className="far fa-user fz-14 mr-10"></i> توسط ادمین
                      </a>
                    </span>
                    <span className="dot main-colorbg3"></span>
                    <span className="date">
                      <a href="blog-details.html">
                        <i className="far fa-calendar-alt fz-14 mr-10"></i>
                        22 شهریور 1402
                      </a>
                    </span>
                  </div>
                </div>
                <div className="img">
                  <img src={b3} alt="" />
                  <a href="blog-details.html" className="main-colorbg3">
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
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="cont main-bg">
                  <h6>
                    <a href="blog-details.html">
                      تبلیغات خلاق در زندگی ما به یک اطلاعات تبدیل شد سر و صدا
                    </a>
                  </h6>
                  <div className="info mt-20 mb-20 pt-20 bord-thin-top">
                    <span className="by">
                      <a href="blog-classNameic.html">
                        <i className="far fa-user fz-14 mr-10"></i> توسط ادمین
                      </a>
                    </span>
                    <span className="dot main-colorbg3"></span>
                    <span className="date">
                      <a href="blog-details.html">
                        <i className="far fa-calendar-alt fz-14 mr-10"></i>
                        22 شهریور 1402
                      </a>
                    </span>
                  </div>
                </div>
                <div className="img">
                  <img src={b2} alt="" />
                  <a href="blog-details.html" className="main-colorbg3">
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
