
import React from "react";

const Process = () => {
  return (
    <>
      <section className="process section-padding sub-bg pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="sec-head text-center mb-80">
                <span className="sub-title mb-15">
                  شرکت خدمات انرژی صنعت نیرو
                </span>
                <h2>
                  اهداف شرکت
                  {/* <span className="stroke">برای انجام کار</span> */}
                </h2>

                <div className="col-lg-5 offset-lg-4">
                  <div className="text mt-30">
                    <p>
                      {" "}
                      شرکت خدمات انرژی صنعت نیرو ،توس با تکیه بر دانش و تجربهی
                      عمیق اعضای هیئت مدیره متشکل از اساتید دانشگاهی و متخصصان
                      خوشنام صنعت برق و مدیران لایق و توانمند با مأموریت تحول در
                      حوزه انرژی پایدار و بهینه سازی مصرف انرژی تأسیس شده است.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row md-marg">
            <div className="col-lg col-md-4 col-sm-6">
              <div className="item md-mb50">
                <span className="icon">
                  <i className="fas fa-chart-pie"></i>
                </span>
                <h5> توسعه فناوری‌های نوین </h5>
                <p className="fz-14">
                  در زمینه انرژیهای تجدیدپذیر خورشیدی ، بادی زیست توده و ...
                  برای افزایش بهره وری و کاهش هزینه های تولید{" "}
                </p>
              </div>
            </div>
            <div className="col-lg col-md-4 col-sm-6">
              <div className="item md-mb50">
                <span className="icon">
                  <i className="fas fa-shield-alt"></i>
                </span>
                <h5>بهینه‌سازی مصرف انرژی در صنایع </h5>
                <p className="fz-14">
                  {" "}
                  از طریق طراحی و پیاده سازی سیستمهای هوشمند مدیریت انرژی، کاهش
                  تلفات و افزایش راندمان عملیاتی{" "}
                </p>
              </div>
            </div>
            <div className="col-lg col-md-4 col-sm-6">
              <div className="item md-mb50">
                <span className="icon">
                  <i className="fas fa-dice-d6"></i>
                </span>
                <h5> راهکارهای مهندسی و مشاوره ای</h5>
                <p className="fz-14">
                  به صنایع انرژی بر نظیر فولاد ،سیمان پتروشیمی و ... جهت کاهش
                  مصرف انرژی و هزینه‌های عملیاتی با رعایت استانداردهای زیست
                  محیطی{" "}
                </p>
              </div>
            </div>
            <div className="col-lg col-md-4 col-sm-6">
              <div className="item sm-mb50">
                <span className="icon">
                  <i className="fas fa-cog"></i>
                </span>
                <h5>توانمندسازی نیروی انسانی</h5>
                <p className="fz-14">
                  از طریق آموزشهای تخصصی در حوزه مدیریت انرژی و فناوریهای نوین
                  صنعت برق{" "}
                </p>
              </div>
            </div>
            <div className="col-lg col-md-4 col-sm-6">
              <div className="item">
                <span className="icon">
                  <i className="fas fa-sticky-note"></i>
                </span>
                <h5>همکاری با مراکز علمی و صنعتی</h5>
                <p className="fz-14">
                  جهت تبدیل پژوهشهای کاربردی به راهکارهای عملی در حوزه بهینه
                  سازی انرژی و تجاری سازی آنها
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="block-serv section-padding pb-80 bord-thin-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 valign mb-40">
              <div className="content">
                <div className="item d-flex mb-50">
                  <div>
                    <span className="icon">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                  <div>
                    <h6>گوش دادن به نیازهای خود برای استراتژی IT</h6>
                    <p>
                      شما به ما می گویید کجا می خواهید پیشرفت کنید ، اهدافی که
                      می خواهید رسیدن و نتیجه ای که به دنبال دستیابی به آن هستید
                      و ما تحویل می دهیم با کیفیت خدمات برای شرکت شما.
                    </p>
                  </div>
                </div>
                <div className="item d-flex">
                  <div>
                    <span className="icon">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                  <div>
                    <h6>راه حل های متناسب با نیازهای شما</h6>
                    <p>
                      شما می توانید تجارت خود را به جلو سوق دهید: ما آن را به
                      شرکت تحویل می دهیم خدمات از طریق رهبری ، فناوری و راه حل
                      ها در سراسر برنامه های تجاری ، بینش داده ها ، پیشرفت ابر.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 mb-40">
              <div className="img">
                <img src="assets/imgs/about/s1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row mt-80">
            <div className="col-lg-6 mb-40">
              <div className="img">
                <img src="assets/imgs/about/s2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 valign mb-40">
              <div className="content">
                <div className="item d-flex mb-50">
                  <div>
                    <span className="icon">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                  <div>
                    <h6>تاکتیک ها را با اهداف تراز کنید</h6>
                    <p>
                      شما به ما می گویید کجا می خواهید پیشرفت کنید ، اهدافی که
                      می خواهید رسیدن و نتیجه ای که به دنبال دستیابی به آن هستید
                      و ما تحویل می دهیم با کیفیت خدمات برای شرکت شما.
                    </p>
                  </div>
                </div>
                <div className="item d-flex">
                  <div>
                    <span className="icon">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                  <div>
                    <h6>نتایج قابل اندازه گیری را ارائه دهید</h6>
                    <p>
                      شما می توانید تجارت خود را به جلو سوق دهید: ما آن را به
                      شرکت تحویل می دهیم خدمات از طریق رهبری ، فناوری و راه حل
                      ها در سراسر برنامه های تجاری ، بینش داده ها ، پیشرفت ابر.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Process;
