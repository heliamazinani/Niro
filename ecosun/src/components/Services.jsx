import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import darkp0 from "/assets/imgs/serv-icons/0.png";
import lightp0 from "/assets/imgs/light/serv-icons/0.png";
import darkp1 from "/assets/imgs/serv-icons/1.png";
import lightp1 from "/assets/imgs/light/serv-icons/1.png";
import darkp2 from "/assets/imgs/serv-icons/2.png";
import lightp2 from "/assets/imgs/light/serv-icons/2.png";
import { motion } from "framer-motion";
const Services = () => {
  const { theme } = useContext(ThemeContext);

  const p0 = theme === "dark" ? darkp0 : lightp0;
  const p1 = theme === "dark" ? darkp1 : lightp1;
  const p2 = theme === "dark" ? darkp2 : lightp2;
  return (
    <section class="serv-box section-padding">
      <div class="container">
        <div class="sec-lg-head mb-80">
          <div class="row">
            <div class="col-lg-8">
              <div class="position-re">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h6 className="dot-titl mb-15  "> فضای مجازی</h6>
                </motion.div>
                <h2 class="fz-60 fw-700">خدمات ما</h2>
              </div>
            </div>
            <div class="col-lg-3 d-flex align-items-center">
              <div class="text">
                <p>
                  شرکت خدمات انرژی صنعت نیرو با بیش از پنج دهه تجربه مدیران تخصص
                  و توانمندی‌های برتر خود بهترین خدمات را ارائه می ‌دهد.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div class="serv-item md-mb50 radius-5  ">
                <div class="icon-img-50 mb-40">
                  <img src={p0} alt="" />
                </div>

                <h6 class="mb-15"> نیروگاه‌های خورشیدی </h6>
                <p class="fz-14">
                  نصب راه اندازی و بهره برداری نیروگاه‌های خورشیدی
                </p>
                <div class="underline">
                  <a class="mt-30 ls1 fz-12 text-u">
                    بیشتر بخوانید
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      class="mirror"
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
            </motion.div>
          </div>

          <div class="col-lg-3">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div class="serv-item md-mb50 radius-5  ">
                <div class="icon-img-50 mb-40">
                  <img src={p1} alt="" />
                </div>

                <h6 class="mb-15"> فیبر نوری </h6>
                <p class="fz-14">
                  مشاوره، طراحی و اجرا FTTX – FTTO FTTH – FTTC - FTTB
                </p>
                <div class="underline">
                  <a class="mt-30 ls1 fz-12 text-u">
                    بیشتر بخوانید
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      class="mirror"
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
            </motion.div>
          </div>

          <div class="col-lg-3">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div class="serv-item md-mb50 radius-5 ">
                <div class="icon-img-50 mb-40">
                  <img src={p2} alt="" />
                </div>

                <h6 class="mb-15"> تابلو‌های برق صنعتی </h6>
                <p class="fz-14">
                  طراحی ساخت و نصب و راه اندازی انواع تابلو‌های برق صنعتی
                </p>
                <div class="underline">
                  <a class="mt-30 ls1 fz-12 text-u">
                    بیشتر بخوانید
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      class="mirror"
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
            </motion.div>
          </div>

          <div class="col-lg-3">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div class="serv-item md-mb50 radius-5  ">
                <div class="icon-img-50 mb-40">
                  <img src={p0} alt="" />
                </div>

                <h6 class="mb-15">تاسیسات الکتریکی </h6>
                <p class="fz-14">
                  طراحی نظارت و اجرای در کارخانجات و ساختمانهای تجاری و هتل
                </p>
                <div class="underline">
                  <a class="mt-30 ls1 fz-12 text-u">
                    بیشتر بخوانید
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      class="mirror"
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
