import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bgImage17 from "/assets/imgs/background/21.jpg";
import bgImage19 from "/assets/imgs/background/22.jpg";
import bgImage23 from "/assets/imgs/background/23.jpg";

const Slider = () => {
  const slides = [bgImage17, bgImage23, bgImage19];

  return (
    <header className="slider slider-prlx o-hidden">
      <Swiper
        className="parallax-slider"
        modules={[Autoplay, Pagination, Navigation, Parallax]}
        speed={1000}
        loop={true}
        autoplay={{ delay: 3000 }}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {slides.map((bgImage, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-img valign"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
              data-overlay-dark="7"
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="caption text-center">
                      <h6 className="sub-title mb-15">خدمات انرژی صنعت نیرو</h6>
                      <h1 className="fz-60">
                        پیشگامان انرژی، با سایه‌ای از افتخار
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </header>
  );
};

export default Slider;
