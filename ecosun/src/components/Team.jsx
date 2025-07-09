
import React from "react";
import sq1 from "../assets/dark/imgs/about/sq3.jpg";
import sq2 from "../assets/dark/imgs/about/sq2.jpg";
const Team = () => {
  return (
    <>

        <section className="team-single section-padding">
            <div className="container">
                <div className="row mb-40">
                    <div className="col-lg-5">
                        <div className="img md-mb50">
                            <img src="assets/imgs/team/t5.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 valign">
                        <div className="cont">
                            <h2>محمد محمدی</h2>
                            <span className="main-color3">طراح وب و توسعه دهنده</span>
                            <p className="mt-50">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
                                می طلبد، تا با نرم افزارها شناخت بیشتری را </p>

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
                <div className="skills mt-80">
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
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Team;
