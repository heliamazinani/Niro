import React from "react";
import sq1 from "../assets/dark/imgs/about/sq3.jpg";
import sq2 from "../assets/dark/imgs/about/sq2.jpg";
const About = () => {
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
                  درباره انرژی صنعت نیرو توس
                  <span className="stroke fw-700 opacity-7">
                    آینده را روشن می‌کنیم
                  </span>
                  .
                </h3>
                <p>
                  ما در انرژی صنعت نیرو توس با تکیه بر دانش فنی، تجربه و فناوری
                  روز دنیا، خدمات تخصصی در زمینه طراحی و اجرای سیستم‌های فیبر
                  نوری، انرژی خورشیدی و تابلوهای برق ارائه می‌دهیم. با ما، انرژی
                  را هوشمندانه و پایدار تجربه کنید.
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
                          <span>استراتژی </span>
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
                          <span>طراحی</span>
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
                          <span>تولید بی نظیر</span>
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
                          <span>هویت سازمانی</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a
                  href="page-about.html"
                  className="butn butn-md butn-bord radius-30 mt-50"
                >
                  <span>بیشتر کاوش کنید</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
