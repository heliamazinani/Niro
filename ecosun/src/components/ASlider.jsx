import React from "react";
import sq1 from "../assets/dark/imgs/about/sq4.jpg";
import sq2 from "../assets/dark/imgs/about/sq2.jpg";
const ASlider = () => {
  return (
    <>
      <header className="page-header section-padding pb-0">
        <div className="main-marq xlrg section-padding pb-0">
          <div className="slide-har st1">
            <div className="box">
              <div className="item">
                <h4>درباره ما</h4>
              </div>
              <div className="item">
                <h4>درباره ما</h4>
              </div>
              <div className="item">
                <h4>درباره ما</h4>
              </div>
              <div className="item">
                <h4>درباره ما</h4>
              </div>
              <div className="item">
                <h4>درباره ما</h4>
              </div>
            </div>
            <div className="box">
              <div className="item">
                <h4>درباره ما</h4>
              </div>
              <div className="item">
                <h4>درباره ما</h4>
              </div>
              <div className="item">
                <h4>درباره ما</h4>
              </div>
              <div className="item">
                <h4>درباره ما</h4>
              </div>
              <div className="item">
                <h4>درباره ما</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="caption">
                <h6 className="sub-title"> سخن مدیرعامل </h6>
                <h1 className="fz-55">
                  مجموعه ما تنها یک شرکت نیست آزمایشگاهی است که به میدان عمل
                  آمده است.
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 offset-lg-4">
              <div className="text mt-30">
                <p>
                  {" "}
                  هر یک از اعضای هیئت مدیره، سال ها در دانشگاهها و مراکز
                  تحقیقاتی صنعت برق را مطالعه کرده اند. ما پل مستحکمی بین آکادمی
                  و صنعت ساخته ایم از یک سو با تازه ترین پژوهشهای جهانی پیش
                  میرویم و از سوی دیگر چالشهای واقعی صنعت برق و انرژی را می
                  شناسیم؛ این ترکیب بی نظیر ما را به پیشگامان تحول انرژی تبدیل
                  کرده است. مسیر ما همواره بر یک اصل استوار است : دانش بدون عمل
                  ناقص است و عمل بدون دانش خطرناک "
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="pg-about section-padding sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="bg-img radius-10 md-mb50"
                style={{
                  backgroundImage: `url(${sq1})`,
                }}
              ></div>
            </div>
            <div className="col-lg-8">
              <div
                className="bg-img radius-10"
                style={{
                  backgroundImage: `url(${sq2})`,
                }}
              ></div>
            </div>
            <div className="col-lg-4">
              <div className="sec-head mt-80">
                <h6 className="sub-title"> معرفی شرکت صنعت نیرو</h6>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cont mt-80">
                <h4>
                  شرکت صنعت نیرو در سال 1351 تاسیس شد و در سال 1359 طي شماره
                  2476 در اداره ثبت شرکت ها به ثبت رسید و با داشتن پروانه بهره
                  برداری شماره ص 18 ردیف 3 از وزارت صنایع مجوز تولید مجموعا 6000
                  دستگاه سلول فشار ضعیف و متوسط را در سال دریافت نموده است. در
                  حال حاضر این شرکت با بیش از 50 سال تجربه در زمینه ،طراحی
                  محاسبه و ساخت انواع تابلوهای برق صنعتی فشار ضعیف و فشار متوسط
                  و نیز سیستمهای کنترل الکتریکی و الکترونیکی همگام با تکنولوژی
                  مدرن و داشتن تاییدیه صلاحیت از معاونت تحقیقات و فن آوری وزارت
                  ،نیرو در خدمت مراکز صنعتی و تاسیساتی کشور می باشد.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ASlider;
