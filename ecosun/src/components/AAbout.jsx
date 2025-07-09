

import React from "react";
import sq1 from "../assets/dark/imgs/about/sq3.jpg";
import sq2 from "../assets/dark/imgs/about/sq2.jpg";
const AAbout = () => {
  return (
    <>

            <section class="intro-corp section-padding pt-0">
            <div class="container">
                <div class="row justify-content-around">
                    <div class="col-lg-5 valign md-mb50">
                        <div class="imgs mb-80">
                            <div class="img1">
                                <img src={sq1} alt="" class="radius-10"/>
                            </div>
                            <div class="img2">
                                <img src={sq2} alt="" class="radius-10"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 valign">
                        <div class="cont">
                            <div class="text">
                                <h2 class="d-slideup wow">
                                    <span class="sideup-text">
                                        <span class="up-text">خلاقیت مارا تماشا کنید</span>
                                    </span>
                                    <span class="sideup-text">
                                        <span class="up-text">پروسه پشت صحنه</span>
                                    </span>
                                    <span class="sideup-text">
                                        <span class="up-text">بازاریابی دیجیتالی.</span>
                                    </span>
                                </h2>
                            </div>
                            <div class="accordion bord mt-40">

                                <div class="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                                    <div class="title">
                                        <h6 class="fz-18">قدرت بازاریابی تأثیرگذار</h6>
                                        <span class="ico"></span>
                                    </div>
                                    <div class="accordion-info">
                                        <p class="fz-14">در اختیار داشتن کل روح من ، مثل این شیرین
                                            صبح
                                            از بهار که
                                            من با کل خودم لذت می برم.</p>
                                    </div>
                                </div>

                                <div class="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                                    <div class="title">
                                        <h6 class="fz-18">طراحی منحصر به فرد و تأثیرگذار</h6>
                                        <span class="ico"></span>
                                    </div>
                                    <div class="accordion-info">
                                        <p class="fz-14">در اختیار داشتن کل روح من ، مثل این شیرین
                                            صبح
                                            از بهار که
                                            من با کل خودم لذت می برم.</p>
                                    </div>
                                </div>

                                <div class="item wow fadeInUp" data-wow-delay=".5s">
                                    <div class="title">
                                        <h6 class="fz-18">ما مارک ها را می سازیم و فعال می کنیم</h6>
                                        <span class="ico"></span>
                                    </div>
                                    <div class="accordion-info">
                                        <p class="fz-14">در اختیار داشتن کل روح من ، مثل این شیرین
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
