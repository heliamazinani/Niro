import React from "react";
import hj from "/assets/imgs/team/hjavaheri.jpg";
import j from "/assets/imgs/team/javaheri.jpg";
import m from "/assets/imgs/team/mazinani.jpg";

import v from "/assets/imgs/team/vafaie.jpg";
import gh from "/assets/imgs/team/khodabande.jpg";
const Team = () => {
  return (
    <>
      <section className="team-single section-padding">
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-5">
              <div className="img md-mb50">
                <img src={m} alt="" />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 valign">
              <div className="cont">
                <h2>دکتر سید‌مجید مزینانی </h2>
                <span className="main-color3">مدیرعامل و عضو هیئت مدیره</span>

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
                        دانشیار دانشگاه بین المللی امام رضا عليه السلام 1388
                        تاکنون
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        {" "}
                        عضو هیئت مدیره سازمان نظام مهندسی ساختمان خراسان رضوی
                        1391 تا 1403
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        نایب اول رئیس سازمان نظام مهندسی ساختمان خراسان رضوی
                        1394 تا 1396{" "}
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        عضو گروه تخصصی برق شورای مرکزی نظام مهندسی کشور 1395 تا
                        1398
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>رئیس دانشگاه غیرانتفاعی خاوران 1399 تا 1403</p>
                    </li>
                    <li className="mb-20">
                      <p>
                        معاون پژوهشی دانشگاه بین المللی امام رضا عليه السلام
                        1394 تا 1395
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        عضو هیئت مدیره انجمن مهندسین برق و الکترونیک ایران شاخه
                        خراسان رضوی 1394 تا 1398{" "}
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>کارشناس رسمی دادگستری خراسان رضوی</p>
                    </li>
                    <li className="mb-20">
                      <p>
                        رئیس کمیته علمی و پژوهشی سازمان مشاوران و متخصصان ملل
                        اسلامی (اینسکو)
                      </p>
                    </li>
                    <li className="mb-20">
                      <p> پژوهشگر برتر دانشگاه در سال های 1397 و 1398</p>
                    </li>
                    <li className="mb-20">
                      <p>
                        دارای بیش از 40 مقاله علمی در معتبرترین ژورنال های خارجی
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        ارائه مقالات علمی در کنفرانسهای تخصصی در کشورهای سوئیس
                        دانمارک، ایتالیا، چین، هند تایلند و امارات متحده عربی
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        دانش آموخته دوره طراحی و نصب سیستمهای فتوولتائیک در
                        دانشگاه صنعتی شریف
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
                <ul className="rest">
                  <li className="d-flex align-items-center mt-50">
                    <div>
                      <span className="icon pe-7s-phone"></span>
                    </div>
                    <div>
                      <span className="opacity-7">شماره تلفن</span>
                      <h6>12 23 985 0912</h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mt-30">
                    <div>
                      <span className="icon pe-7s-mail-open-file"></span>
                    </div>
                    <div>
                      <span className="opacity-7">آدرس ایمیل</span>
                      <h6 className="link">contact@jenish.com</h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mt-30">
                    <div>
                      <span className="icon pe-7s-map"></span>
                    </div>
                    <div>
                      <span className="opacity-7">لوکیشن</span>
                      <h6>ایران، تهران، سعادت آباد، میدان کاج</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="skills mt-80">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="skil-progs md-mb50">
                                <h3>مهارت های <span className="stroke">حرفه ای</span></h3>
                                <p className="fz-13">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                                    از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                    است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                                    کاربردی می باشد، کتابهای زیادی در شصت و سه </p>

                                <div className="skill-item mt-50">
                                    <h6 className="fz-16">طراحی محصول</h6>
                                    <div className="skill-progress">
                                        <div className="progres" data-value="82%"></div>
                                    </div>
                                </div>
                                <div className="skill-item mt-30">
                                    <h6 className="fz-16">مدیریت برند</h6>
                                    <div className="skill-progress">
                                        <div className="progres" data-value="94%"></div>
                                    </div>
                                </div>
                                <div className="skill-item mt-30">
                                    <h6 className="fz-16">تجزیه و تحلیل رشد</h6>
                                    <div className="skill-progress">
                                        <div className="progres" data-value="89%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="resume-exp">
                                <h3>سطح <span className="stroke">تحصیلات</span></h3>
                                <p className="fz-13">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                                    از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                    است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                                    کاربردی می باشد، کتابهای زیادی در شصت و سه </p>

                                <div className="box-items row mt-50">
                                    <div className="col-md-6 item">
                                        <span className="num">1 <small>.</small></span>
                                        <div className="text-center">
                                            <h6 className="fz-16">متخصص تجارت</h6>
                                            <span className="opacity-7">2023 - الان</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 item">
                                        <span className="num">2 <small>.</small></span>
                                        <div className="text-center">
                                            <h6 className="fz-16">مدیر مالی</h6>
                                            <span className="opacity-7">2020 - 2022</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 item">
                                        <span className="num">3 <small>.</small></span>
                                        <div className="text-center">
                                            <h6 className="fz-16">طراح حرفه ای</h6>
                                            <span className="opacity-7">2018 - 2020</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 item">
                                        <span className="num">4 <small>.</small></span>
                                        <div className="text-center">
                                            <h6 className="fz-16">معمار جوان</h6>
                                            <span className="opacity-7">2016 - 2018</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
          {/* </div> */}
        </div>
      </section>
      <section className="team-single section-padding">
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-5">
              <div className="img md-mb50">
                <img src={j} alt="" />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 valign">
              <div className="cont">
                <h2>مهندس محمدرضا جواهری </h2>
                <span className="main-color3"> عضو هیئت مدیره</span>

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
                        سهامدار شرکت صنعت نیرو(اولین تولید کننده تابلوهای برق
                        صنعتی در شرق کشور از سال 1351 تاکنون)
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        سهامدار شرکت صنایع لاستیک توس (تولید کننده انواع کاسه
                        نمد و قطعات حساس لاستیکی)
                      </p>
                    </li>
                    <li className="mb-20">
                      <p> رئیس هیئت مدیره شرکت صنایع لاستیک توس 1390 تاکنون</p>
                    </li>
                    <li className="mb-20">
                      <p>
                        نایب اول رئیس سازمان نظام مهندسی ساختمان خراسان رضوی
                        1394 تا 1396{" "}
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
                        عضو هیئت مدیره انجمن مهندسین برق و الکترونیک ایران شاخه
                        خراسان رضوی 1394 تا 1398{" "}
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        مدیر مالی شرکت صنعت نیرو و شرکت صنایع لاستیک توس 1355 تا
                        1367{" "}
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        عضو هیئت مدیره و دبیر انجمن قطعه سازان خراسان رضوی 1386
                        تاکنون
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        {" "}
                        عضو هیئت مدیره کانون انجمنهای کارفرمایی صنایع خراسان
                        رضوی 1386 تاکنون{" "}
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>عضو اتاق بازرگانی صنایع معادن و کشاورزی خراسان رضوی</p>
                    </li>
                    <li className="mb-20">
                      <p>عضو خانه صنعت و معدن خراسان رضوی</p>
                    </li>
                    <li className="mb-20">
                      <p>
                        عضو انجمن سازندگان قطعات و مجموعه های خودرو تهران
                        (IAPMA)
                      </p>
                    </li>
                  </ul>
                </div>
                <ul className="rest">
                  <li className="d-flex align-items-center mt-50">
                    <div>
                      <span className="icon pe-7s-phone"></span>
                    </div>
                    <div>
                      <span className="opacity-7">شماره تلفن</span>
                      <h6>12 23 985 0912</h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mt-30">
                    <div>
                      <span className="icon pe-7s-mail-open-file"></span>
                    </div>
                    <div>
                      <span className="opacity-7">آدرس ایمیل</span>
                      <h6 className="link">contact@jenish.com</h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mt-30">
                    <div>
                      <span className="icon pe-7s-map"></span>
                    </div>
                    <div>
                      <span className="opacity-7">لوکیشن</span>
                      <h6>ایران، تهران، سعادت آباد، میدان کاج</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-single section-padding">
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-5">
              <div className="img md-mb50">
                <img src={gh} alt="" />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 valign">
              <div className="cont">
                <h2>دکتر قاسمعلی خدابنده </h2>
                <span className="main-color3"> عضو هیئت مدیره</span>

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
                        انتخاب پایان نامه کارشناسی ارشد بعنوان پایان نامه برتر
                        کشوری
                      </p>
                    </li>
                  </ul>
                </div>
                <ul className="rest">
                  <li className="d-flex align-items-center mt-50">
                    <div>
                      <span className="icon pe-7s-phone"></span>
                    </div>
                    <div>
                      <span className="opacity-7">شماره تلفن</span>
                      <h6>12 23 985 0912</h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mt-30">
                    <div>
                      <span className="icon pe-7s-mail-open-file"></span>
                    </div>
                    <div>
                      <span className="opacity-7">آدرس ایمیل</span>
                      <h6 className="link">contact@jenish.com</h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mt-30">
                    <div>
                      <span className="icon pe-7s-map"></span>
                    </div>
                    <div>
                      <span className="opacity-7">لوکیشن</span>
                      <h6>ایران، تهران، سعادت آباد، میدان کاج</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-single section-padding">
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-5">
              <div className="img md-mb50">
                <img src={hj} alt="" />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 valign">
              <div className="cont">
                <h2>مهندس حسن جواهری </h2>
                <span className="main-color3"> نائب رئیس هیئت مدیره</span>

                <div className="list-arrow mt-50">
                  <ul className="rest">
                    <li className="mb-20">
                      <p>مهندسی برق </p>
                    </li>{" "}
                    <li className="mb-20">
                      <p>
                        سهامدار شرکت صنعت نیرو(اولین تولید کننده تابلوهای برق
                        صنعتی در شرق کشور از سال 1351 تاکنون)
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        سهامدار شرکت صنایع لاستیک توس (تولید کننده انواع کاسه
                        نمد و قطعات حساس لاستیکی)
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
                      <p>
                        عضو انجمن صنفی تولیدکنندگان تابلوهای برق خراسان رضوی
                      </p>
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
                <ul className="rest">
                  <li className="d-flex align-items-center mt-50">
                    <div>
                      <span className="icon pe-7s-phone"></span>
                    </div>
                    <div>
                      <span className="opacity-7">شماره تلفن</span>
                      <h6>12 23 985 0912</h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mt-30">
                    <div>
                      <span className="icon pe-7s-mail-open-file"></span>
                    </div>
                    <div>
                      <span className="opacity-7">آدرس ایمیل</span>
                      <h6 className="link">contact@jenish.com</h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mt-30">
                    <div>
                      <span className="icon pe-7s-map"></span>
                    </div>
                    <div>
                      <span className="opacity-7">لوکیشن</span>
                      <h6>ایران، تهران، سعادت آباد، میدان کاج</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-single section-padding">
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-5">
              <div className="img md-mb50">
                <img src={v} alt="" />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 valign">
              <div className="cont">
                <h2> مهندس محمدرضا وفایی </h2>
                <span className="main-color3"> رئیس هیئت مدیره</span>

                <div className="list-arrow mt-50">
                  <ul className="rest">
                    <li className="mb-20">
                      <p> مهندسی برق قدرت از دانشگاه آزاد اسلامی</p>
                    </li>{" "}
                    <li className="mb-20">
                      <p>
                        سهامدار شرکت آذر آوند جام تولید کننده آینه و شیشه لمینت
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        سهامدار شرکت گسترش و نوسازی صنایع ایرانیان (پیمانکار
                        تاسیسات برقی)
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
                        مشاور و ناظر تاسیسات الکتریکی کارخانه شیشه آذر مینا جام(
                        تولید کننده شیشه فلوت){" "}
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        {" "}
                        دانش آموخته دوره طراحی و نصب سیستمهای فتوولتائیک در
                        دانشگاه صنعتی شریف{" "}
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
                        پیمانکار اجرای تاسیسات الکتریکی 5 ایستگاه پمپاژ آب از سد
                        دوستی به مشهد
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        پیمانکار اجرای تاسیسات الکتریکی سالنهای کلرزنی
                        ایستگاههای شماره 2،1 ، تعادلی و 4 پمپاژ آب از سد دوستی
                        به مشهد
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        پیمانکار اجرای تاسیسات الکتریکی مخزن یک میلیون متر مکعبی
                        آب شرب مشهد
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        پیمانکار تعمیر اساسی (اورهال) تاسیسات الکتریکی و مکانیکی
                        سد دوستی
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        پیمانکار تعمیر اساسی (اورهال) تاسیسات الکتریکی سد ارداک
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        پیمانکار نصب و راه اندازی تابلوهای برق واحد انتقال نفت
                        خام سرکان و ماله کوه لرستان
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        پیمانکار نصب و راه اندازی تابلوهای برق ایستگاه پمپاژ آب
                        چم مهر لرستان
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        پیمانکار اجرای تاسیسات الکتریکی و دوربینهای مدار بسته
                        کارخانه خوراک دام و طیور گهردانه شرق
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        پیمانکار تعمیر و نگهداری تاسیسات الکتریکی و مکانیکی
                        تصفیه خانه سوم آب شرب مشهد
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>
                        پیمانکار تعمیر و نگهداری تاسیسات الکتریکی و مکانیکی 5
                        ایستگاه پمپاژ آب از سد دوستی به مشهد و همچنین سالنهای
                        کلرزنی مربوطه
                      </p>
                    </li>
                    <li className="mb-20">
                      <p>محاسبه و طراحی ارتباط رادیویی سد شوریجه</p>
                    </li>
                  </ul>
                </div>
                <ul className="rest">
                  <li className="d-flex align-items-center mt-50">
                    <div>
                      <span className="icon pe-7s-phone"></span>
                    </div>
                    <div>
                      <span className="opacity-7">شماره تلفن</span>
                      <h6>12 23 985 0912</h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mt-30">
                    <div>
                      <span className="icon pe-7s-mail-open-file"></span>
                    </div>
                    <div>
                      <span className="opacity-7">آدرس ایمیل</span>
                      <h6 className="link">contact@jenish.com</h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mt-30">
                    <div>
                      <span className="icon pe-7s-map"></span>
                    </div>
                    <div>
                      <span className="opacity-7">لوکیشن</span>
                      <h6>ایران، تهران، سعادت آباد، میدان کاج</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
