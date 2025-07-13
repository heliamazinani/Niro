;
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider.jsx";
import AAbout from "../components/AAbout.jsx";
import Loader from "../components/Loader.jsx";
function ContactUs() {
  return (
    <>
   
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <header className="page-header section-padding sub-bg">
                <div className="container mt-80">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="caption">
                        <h6 className="sub-title">ارتباط با ما</h6>
                        <h1 className="fz-55">
                          {" "}
                          با افتخار، منابع انرژی تجدیدپزیر را به نیروی پیشران
                          توسعه ایران تبدیل می کنیم
                        </h1>
                      </div>
                    </div>
                    <div className="col-lg-5 valign">
                      <div className="text">
                        <p>
                          ما باور داریم که ترکیب دانش دانشگاهی تجربه صنعتی و
                          فناوریهای روز نه تنها صنعت انرژی را متحول می کند بلکه
                          به صنایع کشور کمک میکند تا با مصرف بهینه ،انرژی بهره
                          وری خود را به سطح جهانی ارتقا دهند.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <section className="contact-crev section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="sec-lg-head mb-80">
                        <h6 className="dot-titl-non mb-10">در تماس باشید</h6>
                        <h2 className="fz-50">با ما در ارتباط باشید</h2>
                        <p className="fz-15 mt-10">
                          ما به ارتباط با مشتریان و کاربران خود اهمیت زیادی
                          می‌دهیم. اگر سوالی دارید، نیاز به مشاوره دارید یا
                          می‌خواهید اطلاعات بیشتری درباره خدمات ما کسب کنید،
                          لطفاً با ما تماس بگیرید.
                        </p>
                        <div className="phone fz-30 fw-600 mt-30 underline">
                          <a href="#0">0915-5363-273 </a>
                        </div>
                        <ul className="rest social-text d-flex mt-60">
                          <li className="mr-30">
                            <a href="#0">فیسبوک</a>
                          </li>
                          <li className="mr-30">
                            <a href="#0">توییتر</a>
                          </li>
                          <li className="mr-30">
                            <a href="#0">لینکدین</a>
                          </li>
                          <li>
                            <a href="#0">اینستاگرام</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 valign">
                      <div className="full-width">
                        <form id="contact-form" method="post" action="#">
                          <div className="messages"></div>

                          <div className="controls row">
                            <div className="col-lg-6">
                              <div className="form-group mb-30">
                                <input
                                  id="form_name"
                                  type="text"
                                  name="name"
                                  placeholder="نام"
                                  required="required"
                                />
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="form-group mb-30">
                                <input
                                  id="form_email"
                                  type="email"
                                  name="email"
                                  placeholder="ایمیل"
                                  required="required"
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="form-group mb-30">
                                <input
                                  id="form_subject"
                                  type="text"
                                  name="subject"
                                  placeholder="موضوع"
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="form-group">
                                <textarea
                                  id="form_message"
                                  name="message"
                                  placeholder="پیام شما"
                                  rows="4"
                                  required="required"
                                ></textarea>
                              </div>
                              <div className="mt-30">
                                <button
                                  type="submit"
                                  className="butn butn-md butn-bord radius-30"
                                >
                                  <span className="text">صحبت کردن</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer></Footer>
          </div>
        </div>
  
    </>
  );
}

export default ContactUs;
