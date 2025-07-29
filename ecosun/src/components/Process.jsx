
import React from "react";
import { motion } from "framer-motion";
const Process = () => {
  return (
    <>
      <section className="process section-padding sub-bg pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9 w-100">
              <div className="sec-head text-center mb-100">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2
                    className="mb-15 w-100"
                    style={{ "padding-top": "70px", "padding-bottom": "50px" }}
                  >
                    شرکت خدمات انرژی صنعت نیرو
                  </h2>
                  <h4>
                    اهداف شرکت
                    {/* <span className="stroke">برای انجام کار</span> */}
                  </h4>

                  <div className="text mt-15">
                    <p>
                      {" "}
                      شرکت خدمات انرژی صنعت نیروی توس، با تکیه بر دانش و تجربه‌ی
                      عمیق اعضای هیئت‌مدیره، متشکل از اساتید دانشگاهی، متخصصان
                      خوش‌نام صنعت برق و مدیران لایق و توانمند، با مأموریت تحول
                      در حوزه‌ی انرژی پایدار و بهینه‌سازی مصرف انرژی تأسیس شده
                      است.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="row md-marg">
            <div className="col-lg col-md-4 col-sm-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="item md-mb50">
                  <span className="icon">
                    <i className="fas fa-chart-pie"></i>
                  </span>
                  <h5> توسعه فناوری‌های نوین </h5>
                  <p className="fz-14">
                    در زمینه‌ی انرژی‌های تجدیدپذیر از جمله خورشیدی، بادی،
                    زیست‌توده و سایر منابع پاک، فعالیت‌هایی با هدف افزایش
                    بهره‌وری و کاهش هزینه‌های تولید انجام می‌شود.{" "}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg col-md-4 col-sm-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="item md-mb50">
                  <span className="icon">
                    <i className="fas fa-shield-alt"></i>
                  </span>
                  <h5>بهینه‌سازی مصرف انرژی در صنایع </h5>
                  <p className="fz-14">
                    {" "}
                    از طریق طراحی و پیاده‌سازی سیستم‌های هوشمند مدیریت انرژی،
                    کاهش تلفات و افزایش راندمان عملیاتی را محقق می‌کنیم.{" "}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg col-md-4 col-sm-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="item md-mb50">
                  <span className="icon">
                    <i className="fas fa-dice-d6"></i>
                  </span>
                  <h5> راهکارهای مهندسی و مشاوره ای</h5>
                  <p className="fz-14">
                    به صنایع انرژی‌بر نظیر فولاد، سیمان، پتروشیمی و سایر صنایع
                    مرتبط، جهت کاهش مصرف انرژی و هزینه‌های عملیاتی با رعایت
                    استانداردهای زیست‌محیطی خدمات ارائه می‌دهیم.{" "}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg col-md-4 col-sm-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="item sm-mb50">
                  <span className="icon">
                    <i className="fas fa-cog"></i>
                  </span>
                  <h5>توانمندسازی نیروی انسانی</h5>
                  <p className="fz-14">
                    از طریق آموزش‌های تخصصی در حوزه‌ی مدیریت انرژی و فناوری‌های
                    نوین صنعت برق، توانمندسازی نیروهای انسانی را دنبال می‌کنیم.{" "}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg col-md-4 col-sm-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="item">
                  <span className="icon">
                    <i className="fas fa-sticky-note"></i>
                  </span>
                  <h5>همکاری با مراکز علمی و صنعتی</h5>
                  <p className="fz-14">
                    جهت تبدیل پژوهش‌های کاربردی به راهکارهای عملی در حوزه‌ی
                    بهینه‌سازی انرژی و تجاری‌سازی آن‌ها اقدام می‌کنیم.
                  </p>
                </div>
              </motion.div>
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
