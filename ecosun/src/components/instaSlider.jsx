import React, { useEffect, useRef } from "react";
import p1 from "/posts/p1.jpg";
import p2 from "/posts/p2.jpg";
import p3 from "/posts/p3.jpg";
import p4 from "/posts/p4.jpg";
import p5 from "/posts/p5.jpg";
import p6 from "/posts/p6.jpg";

const IS = () => {
  const swiperRef = useRef(null);
const slidesData = [
  {
    image: p1,
    link: "https://www.instagram.com/reel/DMCmGeVsQs6/?igsh=MTNlbXN3c2FxODZoYg==",

  },
  {
    image: p2,
    link: "https://www.instagram.com/reel/DL_4MsyMjrk/?igsh=MWM2bHQ1ejFwcHNyMw==",


  },
  {
    image: p3,
    link: "https://www.instagram.com/reel/DMFZRCEtuA4/?igsh=YnF3b2I4cTR5ejNk",

  },
  {
    image: p4,
    link: "https://www.instagram.com/reel/DMKmIxVtR01/?igsh=MXk0ZWlwMnZxNHl0",

  },
  {
    image: p5,
    link: "https://www.instagram.com/reel/DMM_F21Nsdt/?igsh=MTJ5anBnZHRxZ2ZvZA==",
 
  },
  {
    image: p6,
    link: "https://www.instagram.com/reel/DMPVXzCtbsr/?igsh=aGQwbDI1ZzZzOGM2",
   
  },
];
  useEffect(() => {
    // Make sure Swiper library is available
    if (window.Swiper && swiperRef.current) {
      // Destroy existing instance if it exists
      if (swiperRef.current.swiper) {
        swiperRef.current.swiper.destroy(true, true);
      }

      // Initialize Swiper
      new window.Swiper(swiperRef.current, {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        centeredSlides: true,
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }

    // Optional cleanup
    return () => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.destroy(true, true);
      }
    };
  }, []);

  return (
    <section className="work-carsouel section-padding position-re o-hidden">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-6">
              <h6 className="dot-titl-non mb-15 wow fadeIn"> فضای مجازی</h6>
              <h3 className="d-slideup wow">
                <span className="sideup-text">
                  <span className="up-text">پست های اخیر</span>
                </span>
              </h3>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="full-width">
                <div className="d-flex justify-content-end justify-end">
                  <div className="swiper-controls arrow-out d-flex">
                    <div
                      className="swiper-button-next "
                      tabindex="0"
                      role="button"
                      aria-label="Next slide"
                    >
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
                    <div
                      className="swiper-button-prev ml-50"
                      tabindex="0"
                      role="button"
                      aria-label="Previous slide"
                    >
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
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid rest">
        <div className="row">
          <div className="col-12">
            <div className="work-crus work-crus3 out">
              <div
                id="content-carousel-container-unq-w"
                className="swiper-container"
                ref={swiperRef}
              >
                <div className="swiper-wrapper">
                  {slidesData.map((slide, index) => (
                    <div className="swiper-slide" key={index}>
                      <a className="item" href={slide.link}>
                        <div className="img">
                          <img
                            src={slide.image}
                            style={{
                              width: "75%",
                            }}
                            alt={`slide-${index}`}
                          />
                          <div className="cont">
                            <span className="mb-5">
                              <div class="underline">
                                <a class=" ls1 fz-12 text-u">
                                  اطلاعات بیشتر
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
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IS;
