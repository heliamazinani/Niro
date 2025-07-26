import React from "react";
import b1 from "/assets/imgs/brands/01.png";
import b2 from "/assets/imgs/brands/02.png";
import b3 from "/assets/imgs/brands/03.png";
import b4 from "/assets/imgs/brands/04.png";
import b5 from "/assets/imgs/brands/05.png";
import b6 from "/assets/imgs/brands/06.png";
import a1 from "/assets/imgs/about/1.jpg";
import si0 from "/assets/imgs/serv-icons/0.png";
import si1 from "/assets/imgs/serv-icons/1.png";
const Block = () => {
  return (
    <>
      <section className="block-sec section-padding">
        <div className="container">
          <div className="row lg-marg">
            <div className="col-lg-7 valign">
              <div className="clients md-mb50">
                <div className="mb-20">
                  <h6 className="sub-title mb-15">همه را بررسی کنید</h6>
                  <h3>شهرت ما موفق شد</h3>
                </div>
                <div className="row">
                  <div className="col-md-4 col-6">
                    <div className="item mt-30 wow fadeIn" data-wow-delay=".6s">
                      <div className="img">
                        <a href="https://themeforest.net/user/ui-themez">
                          <img src={b1} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="item mt-30 wow fadeIn" data-wow-delay=".6s">
                      <div className="img">
                        <a href="https://themeforest.net/user/ui-themez">
                          <img src={b2} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="item mt-30 wow fadeIn" data-wow-delay=".8s">
                      <div className="img">
                        <a href="https://themeforest.net/user/ui-themez">
                          <img src={b3} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="item mt-30 wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <a href="https://themeforest.net/user/ui-themez">
                          <img src={b4} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="item mt-30 wow fadeIn" data-wow-delay=".4s">
                      <div className="img">
                        <a href="https://themeforest.net/user/ui-themez">
                          <img src={b5} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="item mt-30 wow fadeIn" data-wow-delay=".7s">
                      <div className="img">
                        <a href="https://themeforest.net/user/ui-themez">
                          <img src={b6} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-vid">
                <img src={a1} alt="" />
                <div className="rota-vid">
                  <a href="https://youtu.be/AzwC6umvd1s" className="vid">
                    <div className="circle-button in-bord">
                      <div className="rotate-circle fz-30 text-u">
                        <svg className="textcircle" viewBox="0 0 500 500">
                          <defs>
                            <path
                              id="textcircle"
                              d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                            ></path>
                          </defs>
                          <text>
                            <textPath xlink:href="#textcircle" textLength="900">
                              Explore More - Explore More -
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <div className="arrow text-dark">
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row lg-marg mt-80">
            <div className="col-lg-6 valign">
              <div className="md-mb50">
                <div className="item-flex d-flex align-items-center mb-50">
                  <div>
                    <div className="icon-img-60">
                      <img src={si0} alt="" />
                    </div>
                  </div>
                  <div className="cont ml-50">
                    <h6>استاندارد سطح بالا</h6>
                    <p className="fz-15">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و
                    </p>
                  </div>
                </div>
                <div className="item-flex d-flex align-items-center">
                  <div>
                    <div className="icon-img-60">
                      <img src={si1} alt="" />
                    </div>
                  </div>
                  <div className="cont ml-50">
                    <h6>سهولت ارتباطات</h6>
                    <p className="fz-15">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cont">
                <h6 className="sub-title mb-15">ارزش ما</h6>
                <h3 className="mb-15">
                  روند خلاقانه پشت ما را تماشا کنید{" "}
                  <span className="stroke fw-700 opacity-7">
                    آینده را روشن می‌کنیم
                  </span>
                  .
                </h3>

                <div className="skills mt-50">
                  <div className="skills-box">
                    <div className="skill-item mb-40">
                      <h5 className="fz-14 mb-15">طراحی </h5>
                      <div className="skill-progress">
                        <div className="progres" data-value="90%"></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <h5 className="fz-14 mb-15">توسعه </h5>
                      <div className="skill-progress">
                        <div className="progres" data-value="80%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Block;
