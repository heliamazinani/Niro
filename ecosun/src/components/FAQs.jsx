import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "01. آژانس دیجیتال چیست؟",
      answer:
        "آژانس های دیجیتال آژانس بازاریابی استراتژیک و خلاق از a هستند متمرکز بر تجربه کاربر ، موبایل ، اجتماعی ، داده ها و تحلیلی",
    },
    {
      question: "02. آژانس دیجیتال چه خدماتی ارائه می دهد؟",
      answer:
        "یک آژانس بازاریابی دیجیتال خدمات کامل یکی از جنبه های مدیریت است حضور آنلاین یک شرکتاین نوع آژانس از بخش هایی که روی یک منطقه تمرکز می کنند.",
    },
    {
      question: "03. آیا شرکت از بازاریابی دیجیتال بهره مند می شود؟",
      answer:
        "بازاریابی ایگیتال برای ایجاد یک تجارت موفق ضروری است.این یک است با رشد برند یا بهبود فروش ، هیچ محدودیتی برای آن وجود ندارد.در فضای دیجیتال ، می توانید از آن و ضد آینده استفاده کنید.",
    },
    {
      question: "04. آیا شرکت از بازاریابی دیجیتال بهره مند می شود؟",
      answer:
        "آژانس های دیجیتال آژانس بازاریابی استراتژیک و خلاق هستند متمرکز بر تجربه کاربر ، موبایل ، اجتماعی ، داده ها و تحلیلی",
    },
    {
      question: "05. چند بار باید وب سایت خود را به روز کنم؟",
      answer:
        "یک آژانس بازاریابی دیجیتال خدمات کامل یکی از جنبه های مدیریت است حضور آنلاین یک شرکتاین نوع آژانس از بخش هایی که روی یک منطقه تمرکز می کنند.",
    },
    {
      question: "06. آیا بازاریابی ایمیل هنوز مؤثر است؟",
      answer:
        "بازاریابی دیجیتال ضروری برای ایجاد یک تجارت موفق است.این یک است با رشد برند یا بهبود فروش ، هیچ محدودیتی برای آن وجود ندارد.در فضای دیجیتال ، می توانید از آن و ضد آینده استفاده کنید.",
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
                <h1 className="fz-55">سوالات متداول</h1>
              </div>
              <div className="row">
                <div className="col-lg-11 offset-lg-1">
                  <div className="text mt-30">
                    <p>
                      ما یک تیم متنوع هستیم که به عنوان توجه به جزئیات ، از آن
                      لذت می بریم. آبجو در شبهای جمعه و آرزو می کند که دنت را در
                      جهان طراحی کند.برای گرفتن یک مثال بی اهمیت کار زحمت کشیده
                      است.
                    </p>
                  </div>
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
                <div className="item pb-50 mb-50 bord-thin-bottom">
                  <h6 className="mb-15" onClick={() => toggleAnswer(index)}>
                    {faq.question}
                  </h6>
                  {activeIndex === index && <p>{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
