import React from "react";
import sq1 from "../assets/dark/imgs/about/sq3.jpg";
import sq2 from "../assets/dark/imgs/about/sq2.jpg";
const ASlider = () => {
  return (
    <>
      <header className="page-header section-padding pb-0">
        <div className="container mt-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="caption">
                <h6 className="sub-title">ما کی هستیم ؟</h6>
                <h1 className="fz-55">
                  ما یک آژانس دیجیتال مستقر در والنسیا هستیم.
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 offset-lg-4">
              <div className="text mt-30">
                <p>
                  ما به مشتریان خود کمک می کنیم تا با ایجاد هویت برند ، تجربیات
                  دیجیتالی و چاپ مطالب که به وضوح ارتباط برقرار می کنند ، به
                  اهداف بازاریابی برسند و فوق العاده به نظر برسند.
                </p>
              </div>
            </div>
          </div>
        </div>
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
                <h6 className="sub-title">داستان ما</h6>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cont mt-80">
                <h4>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده،{" "}
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
