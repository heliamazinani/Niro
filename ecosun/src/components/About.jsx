import React from "react";
import sq1 from "/assets/imgs/about/sq3.jpg";
import sq2 from "/assets/imgs/about/sq2.jpg";
import { Link } from "react-router-dom";
const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="intro-corp section-padding sub-bg">
        <div className="container">
          <div className="row lg-marg">
            <div className="col-lg-6 md-mb50">
              <div className="imgs mb-80">
                <div
                  className="img1 main-color3 wow fadeIn"
                  data-wow-delay=".3s"
                >
                  <img src={sq1} alt="" />
                </div>
                <div className="img2 wow fadeInLeft" data-wow-delay=".6s">
                  <img src={sq2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 valign">
              <div className="cont">
                <h6 className="sub-title mb-15">درباره شرکت</h6>
                <h3 className="mb-15">
                  درباره خدمات انرژی صنعت نیرو توس
                  <span className="stroke fw-700 opacity-7">
                    رهبران صنعت، خالقان انرژی فردا
                  </span>
                  .
                </h3>
                <p>
                  شرکت خدمات انرژی صنعت نیرو توس وابسته به{" "}
                  <span className=" fw-700  text-colorh opacity-7">
                    {" "}
                    شرکت صنعت نیرو{" "}
                  </span>{" "}
                  ( اولین تولید کننده تابلوهای برق صنعتی در شرق کشور از سال 1351
                  تاکنون ) با نام اختصاری اکوسانیر (Ecosunir) و با بهره گیری از
                  تجربیات ارزشمند و دانش فنی متخصصین برجسته در صنعت و دانشگاه با
                  هدف ارتقاء سطح کیفی خدمات در حوزه انرژی های تجدیدپذیر و بهینه
                  سازی مصرف انرژی در صنعت و ساختمان تأسیس شده است.
                </p>
                <div className="mt-50 pt-30 bord-thin-top">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="rest list-arrow">
                        <li className="mt-20">
                          <span className="icon">
                            <svg
                              width="100%"
                              className="mirror"
                              height="100%"
                              viewBox="0 0 9 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                                fill="#000"
                              ></path>
                            </svg>
                          </span>
                          <span>کیفیت بالا </span>
                        </li>
                        <li className="mt-20">
                          <span className="icon">
                            <svg
                              width="100%"
                              className="mirror"
                              height="100%"
                              viewBox="0 0 9 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                                fill="#000"
                              ></path>
                            </svg>
                          </span>
                          <span>دقت در جزئیات</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="rest list-arrow">
                        <li className="mt-20">
                          <span className="icon">
                            <svg
                              width="100%"
                              className="mirror"
                              height="100%"
                              viewBox="0 0 9 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                                fill="#000"
                              ></path>
                            </svg>
                          </span>
                          <span> کنترل بودجه </span>
                        </li>
                        <li className="mt-20">
                          <span className="icon">
                            <svg
                              width="100%"
                              className="mirror"
                              height="100%"
                              viewBox="0 0 9 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                                fill="#000"
                              ></path>
                            </svg>
                          </span>
                          <span>استاندارد بین‌المللی </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Link to="/about" smooth={true} duration={500} onClick={scrollToTop}>
                  <div
                   
                    className="butn butn-md butn-bord radius-30 mt-50"
                  >
                    <span>بیشتر کاوش کنید</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
