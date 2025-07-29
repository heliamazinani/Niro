import React from "react";
import { motion } from "framer-motion";
import sq from "/assets/imgs/about/02.JPG";
const Why = () => {
  return (
    <section className="serv-intro section-padding sub-bg">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h6 className="dot-titl mb-15 ">خدمات برجسته </h6>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 md-mb80">
            <div className="img mb-50">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={sq}
                  style={{
                    height: "10%",
                  }}
                  alt=""
                />
              </motion.div>
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
                <h5 className="fw-700 mt-1">
                  چرا شرکت خدمات انرژی صنعت نیرو را انتخاب می‌کنیم؟
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="cont mb-50">
                <span className="sub-title mb-15">آنچه ما ارائه می دهیم</span>
                <h3>
                  برتری در کیفیت، قابلیت اجرا با دقت بالا{" "}
                  <span className="stroke">و تخصص فراگیر</span>
                </h3>
                <div className="row mt-50">
                  <div className="col-lg-11 offset-lg-1">
                    <p>
                      وجه تمایز ما در کیفیت بالا ، دقت در جزئیات و کنترل بودجه
                      است .تیم ما از افراد مجرب و متعهد تشکیل شده است که از
                      فناوری‌های پیشرفته و مدرن استفاده میکنند.
                    </p>

                    <div className="list-arrow mt-50">
                      <ul className="rest">
                        <li className="mb-20">
                          <span className="icon main-color3">
                            <i className="fas fa-check-double"></i>
                          </span>
                          رشد پایدار و بهبود مداوم در همه جنبه‌های فعالیت‌هایمان
                        </li>{" "}
                        <li className="mb-20">
                          <span className="icon main-color3">
                            <i className="fas fa-check-double"></i>
                          </span>
                          استفاده از تجهیزات پیشرفته و بهره‌گیری از فناوری برای
                          رشد پایدار
                        </li>
                        <li className="mb-20">
                          <span className="icon main-color3">
                            <i className="fas fa-check-double"></i>
                          </span>
                          رعایت استاندارد‌های بین‌المللی کیفیت در تمامی
                          فعالیت‌هایمان
                        </li>
                      </ul>
                    </div>

                    <div className="pt-50 mt-50 bord-thin-top">
                      <p className="fz-13">
                        ما باور داریم که ترکیب دانش دانشگاهی تجربه صنعتی و
                        فناوریهای روز نه تنها صنعت انرژی را متحول می کند بلکه به
                        صنایع کشور کمک میکند تا با مصرف بهینه ،انرژی بهره‌وری
                        خود را به سطح جهانی ارتقا دهند.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
