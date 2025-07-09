
import React from "react";
import sq1 from "../assets/dark/imgs/about/sq3.jpg";
import sq2 from "../assets/dark/imgs/about/sq2.jpg";
const Why = () => {
  return (
    <section className="serv-intro section-padding sub-bg">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-6">
              <h6 className="dot-titl-non mb-15 wow fadeIn">خدمات برجسته</h6>
              <h2 className="fz-60 fw-700 d-rotate wow animated">
                <span className="rotate-text">خدمات وب</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 md-mb80">
            <div className="img mb-50">
              <img src="assets/imgs/about/03.jpg" alt="" />
              <div className="cont-box main-colorbg3">
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
                <h5 className="fw-700 mt-15">
                  چرا خدمات ما را در مقایسه با دیگری انتخاب می کنیم؟
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cont mb-50">
              <span className="sub-title mb-15">آنچه ما ارائه می دهیم</span>
              <h3>
                راه حل های ویژه برای توسعه وب سایت{" "}
                <span className="stroke">و طراحی آن</span>
              </h3>
              <div className="row mt-50">
                <div className="col-lg-11 offset-lg-1">
                  <p>
                    ما کارهای دیجیتالی حق بیمه را برای وب ، موبایل و تجربیات
                    انجام می دهیم با آژانس های خلاق و مارک های جهانی به طور
                    یکسان - اشتیاق. لذت بردن از لذت نیست.
                  </p>

                  <div className="list-arrow mt-50">
                    <ul className="rest">
                      <li className="mb-20">
                        <span className="icon main-color3">
                          <i className="fas fa-check-double"></i>
                        </span>
                        اولویت بندی ویژگی ها مشتریان شما نیاز دارند
                      </li>{" "}
                      {/* Close the <li> tag here */}
                      <li className="mb-20">
                        <span className="icon main-color3">
                          <i className="fas fa-check-double"></i>
                        </span>
                        همه اطراف را تراز کنید نقشه راه
                      </li>
                      <li>
                        <span className="icon main-color3">
                          <i className="fas fa-check-double"></i>
                        </span>
                        محصول خود را تعریف کنید چشم انداز با بازخورد مشتری
                      </li>
                    </ul>
                  </div>

                  <div className="pt-50 mt-50 bord-thin-top">
                    <p className="fz-13">
                      وقت کمتری را برای نوشتن یک برنامه تجاری و زمان بیشتری برای
                      ساختن مشاغل خود صرف کنید. ما به شما در بهترین ابزارهای
                      مورد نیاز برای برقراری ارتباط بهترین ایده خود به شما کمک
                      می کنیم.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
