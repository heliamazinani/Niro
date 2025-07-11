import React from "react";

const Footer = () => {
  return (
    <>
      <div className="sub-bg">
        <div className="footer-container">
          <div className="container pb-80 pt-80 ontop">
            <div className="call-box text-center mb-80">
              <h2>
                <a href="page-contact.html">
                  بیایید <span className="stroke"> صحبت کنیم</span>
                </a>
                <span className="arrow main-color3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{ transform: "scale(-1,1)" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="colum md-mb50">
                  <div className="tit mb-20">
                    <h6>آدرس</h6>
                  </div>
                  <div className="text">
                    <p>ایران، مشهد سنایی 12 پلاک 121</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="colum md-mb50">
                  <div className="tit mb-20">
                    <h6>در تماس باشید</h6>
                  </div>
                  <div className="text">
                    <p className="mb-10">
                      <a href="#0">hello@design.com</a>
                    </p>
                    <h5>
                      <a href="#">0912 123 12 23</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 md-mb50">
                <div className="tit mb-20">
                  <h6>شبکه های مجازی</h6>
                </div>
                <ul className="rest social-text">
                  <li>
                    <a href="#0">Facebook</a>
                  </li>
                  <li>
                    <a href="#0">Twitter</a>
                  </li>
                  <li>
                    <a href="#0">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#0">Instagram</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div className="tit mb-20">
                  <h6>خبرنامه</h6>
                </div>
                <div className="subscribe">
                  <form action="#">
                    <div className="form-group rest">
                      <input type="email" placeholder="آدرس ایمیل شما" />
                      <button type="submit">
                        <i className="fas fa-arrow-left"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
            <div className="container">
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-8">
                  <div className="copyright d-flex">
                    <div className="ml-auto">
                      <p className="fz-13">
                        © 2023 Geekfolio ارائه در{" "}
                        <span className="underline">
                          <a href="#" target="_blank">
                            راستچین
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
