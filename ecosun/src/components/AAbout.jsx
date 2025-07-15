

import React from "react";
import sq1 from "/assets/imgs/about/sq3.jpg";
import sq2 from "/assets/imgs/about/sq2.jpg";
const AAbout = () => {
  return (
    <>

            <section className="intro-corp section-padding pt-0">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-lg-5 valign md-mb50">
                        <div className="imgs mb-80">
                            <div className="img1">
                                <img src={sq1} alt="" className="radius-10"/>
                            </div>
                            <div className="img2">
                                <img src={sq2} alt="" className="radius-10"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 valign">
                        <div className="cont">
                            <div className="text">
                                <h2 className="d-slideup wow">
                                    <span className="sideup-text">
                                        <span className="up-text">خلاقیت مارا تماشا کنید</span>
                                    </span>
                                    <span className="sideup-text">
                                        <span className="up-text">پروسه پشت صحنه</span>
                                    </span>
                                    <span className="sideup-text">
                                        <span className="up-text">بازاریابی دیجیتالی.</span>
                                    </span>
                                </h2>
                            </div>
                            <div className="accordion bord mt-40">

                                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                                    <div className="title">
                                        <h6 className="fz-18">قدرت بازاریابی تأثیرگذار</h6>
                                        <span className="ico"></span>
                                    </div>
                                    <div className="accordion-info">
                                        <p className="fz-14">در اختیار داشتن کل روح من ، مثل این شیرین
                                            صبح
                                            از بهار که
                                            من با کل خودم لذت می برم.</p>
                                    </div>
                                </div>

                                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="title">
                                        <h6 className="fz-18">طراحی منحصر به فرد و تأثیرگذار</h6>
                                        <span className="ico"></span>
                                    </div>
                                    <div className="accordion-info">
                                        <p className="fz-14">در اختیار داشتن کل روح من ، مثل این شیرین
                                            صبح
                                            از بهار که
                                            من با کل خودم لذت می برم.</p>
                                    </div>
                                </div>

                                <div className="item wow fadeInUp" data-wow-delay=".5s">
                                    <div className="title">
                                        <h6 className="fz-18">ما مارک ها را می سازیم و فعال می کنیم</h6>
                                        <span className="ico"></span>
                                    </div>
                                    <div className="accordion-info">
                                        <p className="fz-14">در اختیار داشتن کل روح من ، مثل این شیرین
                                            صبح
                                            از بهار که
                                            من با کل خودم لذت می برم.</p>
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

export default AAbout;
