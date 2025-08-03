import React, { useState } from "react";
import hj from "/assets/imgs/team/hjavaheri.jpg";
import j from "/assets/imgs/team/javaheri.jpg";
import m from "/assets/imgs/team/mazinani.jpg";
import { motion } from "framer-motion";
import v from "/assets/imgs/team/vafaie.jpg";
import gh from "/assets/imgs/team/khodabande.jpg";
import Modal from "./Modal";
const Team = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  const [isOpen, setIsOpen] = useState(true); // State to toggle between Login and Sign Up

  const toggleForm = () => {
    setIsOpen(!isOpen); // Toggle the state
  };
  const faqs = [
    {
      name: "  دکتر سید‌مجید مزینانی ",
      rank: "مدیرعامل و عضو هیئت مدیره",
      img: m,
      answer: (
        <>
          <h6> دکتر سید‌مجید مزینانی </h6>
          <div className="list-arrow mt-50">
            <ul className="rest">
              <li className="mb-20">
                <p>دکترای برق از دانشگاه فردوسی مشهد</p>
              </li>{" "}
              <li className="mb-20">
                <p>کارشناسی ارشد برق از دانشگاه تربیت مدرس تهران</p>
              </li>
              <li className="mb-20">
                <p>مهندسی برق از دانشگاه فردوسی مشهد</p>
              </li>
              <li className="mb-20">
                <p>
                  دانشیار دانشگاه بین المللی امام رضا عليه السلام 1388 تاکنون
                </p>
              </li>
              <li className="mb-20">
                <p>
                  {" "}
                  عضو هیئت مدیره سازمان نظام مهندسی ساختمان خراسان رضوی 1391 تا
                  1403
                </p>
              </li>
              <li className="mb-20">
                <p>
                  نایب اول رئیس سازمان نظام مهندسی ساختمان خراسان رضوی 1394 تا
                  1396{" "}
                </p>
              </li>
              <li className="mb-20">
                <p>
                  عضو گروه تخصصی برق شورای مرکزی نظام مهندسی کشور 1395 تا 1398
                </p>
              </li>
              <li className="mb-20">
                <p>رئیس دانشگاه غیرانتفاعی خاوران 1399 تا 1403</p>
              </li>
              <li className="mb-20">
                <p>
                  معاون پژوهشی دانشگاه بین المللی امام رضا عليه السلام 1394 تا
                  1395
                </p>
              </li>
              <li className="mb-20">
                <p>
                  عضو هیئت مدیره انجمن مهندسین برق و الکترونیک ایران شاخه خراسان
                  رضوی 1394 تا 1398{" "}
                </p>
              </li>
              <li className="mb-20">
                <p>کارشناس رسمی دادگستری خراسان رضوی</p>
              </li>
              <li className="mb-20">
                <p>
                  رئیس کمیته علمی و پژوهشی سازمان مشاوران و متخصصان ملل اسلامی
                  (اینسکو)
                </p>
              </li>
              <li className="mb-20">
                <p> پژوهشگر برتر دانشگاه در سال های 1397 و 1398</p>
              </li>
              <li className="mb-20">
                <p>دارای بیش از 40 مقاله علمی در معتبرترین ژورنال های خارجی</p>
              </li>
              <li className="mb-20">
                <p>
                  ارائه مقالات علمی در کنفرانسهای تخصصی در کشورهای سوئیس
                  دانمارک، ایتالیا، چین، هند تایلند و امارات متحده عربی
                </p>
              </li>
              <li className="mb-20">
                <p>
                  دانش آموخته دوره طراحی و نصب سیستمهای فتوولتائیک در دانشگاه
                  صنعتی شریف
                </p>
              </li>
              <li className="mb-20">
                <p>
                  دانش آموخته دوره نصب و راه اندازی سیستمهای فتوولتائیک در
                  سازمان فنی حرفه ای کشور
                </p>
              </li>
              <li className="mb-20">
                <p>تأليف 5 کتاب در حوزه برق و فناوری اطلاعات</p>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      name: "  مهندس محمدرضا وفایی  ",
      rank: "رئیس هیئت مدیره",
      img: v,
      answer: (
        <>
          <h6>مهندس محمدرضا وفایی </h6>
          <div className="list-arrow mt-50">
            <ul className="rest">
              <li className="mb-20">
                <p> مهندسی برق قدرت از دانشگاه آزاد اسلامی</p>
              </li>{" "}
              <li className="mb-20">
                <p>سهامدار شرکت آذر آوند جام تولید کننده آینه و شیشه لمینت</p>
              </li>
              <li className="mb-20">
                <p>
                  سهامدار شرکت گسترش و نوسازی صنایع ایرانیان (پیمانکار تاسیسات
                  برقی)
                </p>
              </li>
              <li className="mb-20">
                <p>رئیس هیئت مدیره شرکت گسترش و نوسازی صنایع ایرانیان</p>
              </li>
              <li className="mb-20">
                <p> نایب رئیس هیئت مدیره شرکت آذر آوند جام</p>
              </li>
              <li className="mb-20">
                <p>
                  اظر تاسیسات الکتریکی پروژه 1102 واحد مسکونی قرارگاه خاتم
                  الاوصياء وزارت دفاع{" "}
                </p>
              </li>
              <li className="mb-20">
                <p>
                  مشاور و ناظر تاسیسات الکتریکی کارخانه شیشه آذر مینا جام( تولید
                  کننده شیشه فلوت){" "}
                </p>
              </li>
              <li className="mb-20">
                <p>
                  {" "}
                  دانش آموخته دوره طراحی و نصب سیستمهای فتوولتائیک در دانشگاه
                  صنعتی شریف{" "}
                </p>
              </li>
              <li className="mb-20">
                <p>
                  دانشجوی رتبه اول و المپیادی دانشگاه فردوسی مشهد در دوره
                  کارشناسی
                </p>
              </li>
              <li className="mb-20">
                <p>
                  پیمانکار اجرای تاسیسات الکتریکی 5 ایستگاه پمپاژ آب از سد دوستی
                  به مشهد
                </p>
              </li>
              <li className="mb-20">
                <p>
                  پیمانکار اجرای تاسیسات الکتریکی سالنهای کلرزنی ایستگاههای
                  شماره 2،1 ، تعادلی و 4 پمپاژ آب از سد دوستی به مشهد
                </p>
              </li>
              <li className="mb-20">
                <p>
                  پیمانکار اجرای تاسیسات الکتریکی مخزن یک میلیون متر مکعبی آب
                  شرب مشهد
                </p>
              </li>
              <li className="mb-20">
                <p>
                  پیمانکار تعمیر اساسی (اورهال) تاسیسات الکتریکی و مکانیکی سد
                  دوستی
                </p>
              </li>
              <li className="mb-20">
                <p>پیمانکار تعمیر اساسی (اورهال) تاسیسات الکتریکی سد ارداک</p>
              </li>
              <li className="mb-20">
                <p>
                  پیمانکار نصب و راه اندازی تابلوهای برق واحد انتقال نفت خام
                  سرکان و ماله کوه لرستان
                </p>
              </li>
              <li className="mb-20">
                <p>
                  پیمانکار نصب و راه اندازی تابلوهای برق ایستگاه پمپاژ آب چم مهر
                  لرستان
                </p>
              </li>
              <li className="mb-20">
                <p>
                  پیمانکار تعمیر و نگهداری تاسیسات الکتریکی و مکانیکی تصفیه خانه
                  سوم آب شرب مشهد
                </p>
              </li>
              <li className="mb-20">
                <p>
                  پیمانکار تعمیر و نگهداری تاسیسات الکتریکی و مکانیکی 5 ایستگاه
                  پمپاژ آب از سد دوستی به مشهد و همچنین سالنهای کلرزنی مربوطه
                </p>
              </li>
              <li className="mb-20">
                <p>محاسبه و طراحی ارتباط رادیویی سد شوریجه</p>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      name: "  مهندس حسن جواهری  ",
      rank: " نائب رئیس هیئت مدیره",
      img: hj,
      answer: (
        <>
          <h6>مهندس حسن جواهری </h6>
          <div className="list-arrow mt-50">
            <ul className="rest">
              <li className="mb-20">
                <p>مهندسی برق </p>
              </li>{" "}
              <li className="mb-20">
                <p>
                  سهامدار شرکت صنعت نیرو(اولین تولید کننده تابلوهای برق صنعتی در
                  شرق کشور از سال 1351 تاکنون)
                </p>
              </li>
              <li className="mb-20">
                <p>
                  سهامدار شرکت صنایع لاستیک توس (تولید کننده انواع کاسه نمد و
                  قطعات حساس لاستیکی)
                </p>
              </li>
              <li className="mb-20">
                <p> مدیر عامل شرکت صنعت نیرو 1379 تا 1392</p>
              </li>
              <li className="mb-20">
                <p>رئیس هیئت مدیره شرکت صنعت نيرو 1392 تاکنون</p>
              </li>
              <li className="mb-20">
                <p>عضو کانون انجمنهای کارفرمایی صنایع خراسان رضوی </p>
              </li>
              <li className="mb-20">
                <p>عضو کانون انجمنهای صنفی کارفرمایی خراسان رضوی </p>
              </li>
              <li className="mb-20">
                <p>عضو انجمن مدیران صنایع خراسان رضوی</p>
              </li>
              <li className="mb-20">
                <p>عضو انجمن صنایع همگن برق و الکترونیک</p>
              </li>
              <li className="mb-20">
                <p>عضو انجمن صنفی تولیدکنندگان تابلوهای برق ایران</p>
              </li>
              <li className="mb-20">
                <p>عضو انجمن صنفی تولیدکنندگان تابلوهای برق خراسان رضوی</p>
              </li>
              <li className="mb-20">
                <p>عضو خانه صنعت و معدن خراسان رضوی</p>
              </li>
              <li className="mb-20">
                <p> عضو شرکت تعاونی تابلوسازان تهران</p>
              </li>
              <li className="mb-20">
                <p>عضو خانه صنعت و معدن خراسان رضوی</p>
              </li>
              <li className="mb-20">
                <p>عضو شرکت تعاونی تابلوسازان خراسان رضوی</p>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      name: " دکتر قاسمعلی خدابنده  ",
      rank: " عضو هیئت مدیره",
      img: gh,
      answer: (
        <>
          <h6>دکتر قاسمعلی خدابنده </h6>
          <div className="list-arrow mt-50">
            <ul className="rest">
              <li className="mb-20">
                <p> دکترای زیست شناسی از دانشگاه آزاد اسلامی</p>
              </li>{" "}
              <li className="mb-20">
                <p>کارشناسی ارشد</p>
              </li>
              <li className="mb-20">
                <p>کارشناسی از دانشگاه فردوسی مشهد</p>
              </li>
              <li className="mb-20">
                <p>مدیرکل آموزش و پرورش خراسان رضوی</p>
              </li>
              <li className="mb-20">
                <p> معاون مدیرکل آموزش و پرورش خراسان رضوی</p>
              </li>
              <li className="mb-20">
                <p>رئیس آموزش و پرورش ناحیه یک مشهد</p>
              </li>
              <li className="mb-20">
                <p>عضو هیئت مدیره انجمن دفاتر پیشخوان خراسان رضوی </p>
              </li>
              <li className="mb-20">
                <p>عضو انجمن محیط زیست ایران </p>
              </li>
              <li className="mb-20">
                <p>
                  دانشجوی رتبه اول و المپیادی دانشگاه فردوسی مشهد در دوره
                  کارشناسی
                </p>
              </li>
              <li className="mb-20">
                <p>ارائه چندین مقاله علمی در مجلات معتبر داخلی و خارجی</p>
              </li>
              <li className="mb-20">
                <p>
                  انتخاب پایان نامه کارشناسی ارشد بعنوان پایان نامه برتر کشوری
                </p>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      name: "مهندس محمدرضا جواهری  ",
      rank: " عضو هیئت مدیره",
      img: j,
      answer: (
        <>
          <h6>مهندس محمدرضا جواهری </h6>
          <div className="list-arrow mt-50">
            <ul className="rest">
              <li className="mb-20">
                <p>مهندسی برق قدرت</p>
              </li>{" "}
              <li className="mb-20">
                <p>کارشناسی حسابداری</p>
              </li>
              <li className="mb-20">
                <p>
                  سهامدار شرکت صنعت نیرو(اولین تولید کننده تابلوهای برق صنعتی در
                  شرق کشور از سال 1351 تاکنون)
                </p>
              </li>
              <li className="mb-20">
                <p>
                  سهامدار شرکت صنایع لاستیک توس (تولید کننده انواع کاسه نمد و
                  قطعات حساس لاستیکی)
                </p>
              </li>
              <li className="mb-20">
                <p> رئیس هیئت مدیره شرکت صنایع لاستیک توس 1390 تاکنون</p>
              </li>
              <li className="mb-20">
                <p>
                  نایب اول رئیس سازمان نظام مهندسی ساختمان خراسان رضوی 1394 تا
                  1396{" "}
                </p>
              </li>
              <li className="mb-20">
                <p>مدیر عامل شرکت صنایع لاستیک توس 1374 تا 1390 </p>
              </li>
              <li className="mb-20">
                <p>رئیس هیئت مدیره شرکت صنعت نیرو 1374 تا 1390 </p>
              </li>
              <li className="mb-20">
                <p>مدیر عامل شرکت صنعت نیرو 1367 تا 1374</p>
              </li>
              <li className="mb-20">
                <p>
                  عضو هیئت مدیره انجمن مهندسین برق و الکترونیک ایران شاخه خراسان
                  رضوی 1394 تا 1398{" "}
                </p>
              </li>
              <li className="mb-20">
                <p>
                  مدیر مالی شرکت صنعت نیرو و شرکت صنایع لاستیک توس 1355 تا 1367{" "}
                </p>
              </li>
              <li className="mb-20">
                <p>
                  عضو هیئت مدیره و دبیر انجمن قطعه سازان خراسان رضوی 1386 تاکنون
                </p>
              </li>
              <li className="mb-20">
                <p>
                  {" "}
                  عضو هیئت مدیره کانون انجمنهای کارفرمایی صنایع خراسان رضوی 1386
                  تاکنون{" "}
                </p>
              </li>
              <li className="mb-20">
                <p>عضو اتاق بازرگانی صنایع معادن و کشاورزی خراسان رضوی</p>
              </li>
              <li className="mb-20">
                <p>عضو خانه صنعت و معدن خراسان رضوی</p>
              </li>
              <li className="mb-20">
                <p>عضو انجمن سازندگان قطعات و مجموعه های خودرو تهران (IAPMA)</p>
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ];



  return (
    <>
      <section className="team section-padding">
        <div className="container ">
          {/* <div className="sec-head mb-80">
            <div className="row md-marg">
              <div className="col-lg-8">
                <div className="position-re">
                  <h2 className="fz-60 fw-700">اعضای هیئت مدیره </h2>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-center">
                <div className="text">
                  <p>
                    .شرکت خدمات انرژی صنعت نیرو توس با بیش از پنج دهه تجربه
                    مدیران تخصص و توانمندی‌های برتر خود بهترین خدمات را ارائه می
                    ‌دهد
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row md-marg ">
            {faqs.map((faq, index) => (
              <div className="col-lg-4 col-md-6 " key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="item mb-50 radius-5  "
                    
                  >
                    <div
                      className="mb-15"
                      style={{
                        border: "2px",
                        alignItems: "center",
                        height: "100%",
                        cursor: "pointer",
                      }}
                    >
                      <section className="item  ">
                        <div className="container text-center">
                          <div className="row mb-10">
                            <div
                              className="col-lg-12"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%", // Ensure the container has a height
                              }}
                            >
                              <div className="img circle-100 ">
                                <img
                                  style={{
                                    position:
                                      faq.img ==
                                      "/assets/imgs/team/khodabande.jpg"
                                        ? "relative"
                                        : "static",
                                    top:
                                      faq.img ==
                                      "/assets/imgs/team/khodabande.jpg"
                                        ? "15px"
                                        : "15px",
                                  }}
                                  src={faq.img}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>

                          <h6>{faq.name} </h6>

                          <span className="main-color3">{faq.rank}</span>
                          <div
                            className="underline"
                            onClick={() => openModal(index)}
                          >
                            <a className="mt-30 ls1 fz-12 text-u">
                              بیشتر بخوانید
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
                            </a>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={activeIndex !== null} onClose={closeModal}>
        {activeIndex !== null && faqs[activeIndex].answer}
      </Modal>
    </>
  );
};

export default Team;
