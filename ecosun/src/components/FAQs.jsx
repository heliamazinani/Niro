import React, { useState } from "react";
import { motion } from "framer-motion";
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "فیبر نوری چیست؟",
      answer:
        " فیبر نوری یکی از بسترهای انتقال داده با سرعت بالا است که در آن داده ها به صورت پالس های نور و از طریق الیاف شیشه ای یا پلاستیکی انعطاف پذیر انتقال می یابند.",
    },
    {
      question: "اینترنت FTTH چیست؟ ",
      answer:
        " FTTH یک اصطلاح برای شبکه های ارتباطی فیبر نوری است که در کابل های فیبرنوری در تمام مسیر تا منزل کاربر جایگزین کابل های مسی می شوند.",
    },
    {
      question: "چرا بهینه سازی مصرف انرژی در ساختمان‌ها مهم است؟ ",
      answer:
        "مهم‌ترین هدف بهینه سازی انرژی، کاهش هزینه‌ها و حفظ محیط زیست است. در واقع اجرای روش‌های مؤثر در مدیریت بهینه انرژی منجر به افزایش رفاه و سطح کیفی زندگی ساکنین، ایجاد ارزش افزوده ملک، تقویت امنیت انرژی، کاهش فشار وارد بر شبکه و در نهایت کمک به پیشرفت فناوری و ایجاد مشاغل جدید می‌گردد.",
    },
    {
      question: "سیستم خورشیدی آفگرید چیست؟",
      answer:
        "سیستم خورشیدی آفگرید و یا جدا از شبکه به سیستم خورشیدی گفته می ‌شود که با استفاده از تجهیزات خورشیدی می ‌توانند بدون اتصال به شبکه برق سراسری نیازهای برقی یک فضا را برطرف نمایند. ",
    },
    {
      question: "آیا فیبر نوری امن است؟",
      answer:
        "فیبر نوری به دلیل استفاده از نور برای انتقال داده‌ها، در برابر تداخل الکترومغناطیسی مصون است و به همین دلیل از امنیت بالایی برخوردار است.",
    },
    {
      question: "آیا فیبر نوری در همه مناطق قابل دسترسی است؟",
      answer:
        "در حال حاضر، فیبر نوری در بسیاری از مناطق شهری و حتی برخی از مناطق روستایی در دسترس است، اما ممکن است در برخی مناطق خاص، به دلیل زیرساخت‌های پیچیده یا جغرافیایی، نیاز به کابل‌کشی و هزینه‌های بیشتری داشته باشد. ",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="page-header section-padding pb-0">
        <div className="container mt-80">
          <div className="row">
            <div className="col-lg-9">
              <div className="caption">
                {/* <h6 className="sub-title">آیا باید چیزی بپرسید؟</h6> */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h1 className="fz-55">سوالات متداول</h1>
                </motion.div>
              </div>
              <div className="row">
                <div className="col-lg-11 offset-lg-1">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="text mt-30">
                      <p>
                        در این بخش، به برخی از سوالات رایج مشتریان و کاربران
                        درباره خدمات و فعالیت‌های شرکت پاسخ داده‌ایم. هدف ما
                        ارائه اطلاعات شفاف و مفید به شماست تا بتوانید تصمیمات
                        بهتری بگیرید. اگر سوال دیگری دارید، لطفاً با ما تماس
                        بگیرید.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-marq xlrg section-padding pb-0">
          <div className="slide-har st1">
            <div className="box">
              <div className="item">
                <h4>سوال</h4>
              </div>
              <div className="item">
                <h4>سوال</h4>
              </div>
              <div className="item">
                <h4>سوال</h4>
              </div>
              <div className="item">
                <h4>سوال</h4>
              </div>
              <div className="item">
                <h4>سوال</h4>
              </div>
            </div>
            <div className="box">
              <div className="item">
                <h4>سوال</h4>
              </div>
              <div className="item">
                <h4>سوال</h4>
              </div>
              <div className="item">
                <h4>سوال</h4>
              </div>
              <div className="item">
                <h4>سوال</h4>
              </div>
              <div className="item">
                <h4>سوال</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="faqs section-padding main-bg">
        <div className="container">
          <div className="row lg-marg">
            {faqs.map((faq, index) => (
              <div className="col-lg-6 md-mb50" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="item pb-50 mb-50 bord-thin-bottom">
                    <h6
                      className="mb-15"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => toggleAnswer(index)}
                    >
                      {faq.question}
                    </h6>
                    {activeIndex === index && (
                      <p>
                        <motion.div
                          initial={{ opacity: 0,  }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        >
                          {faq.answer}
                        </motion.div>
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
