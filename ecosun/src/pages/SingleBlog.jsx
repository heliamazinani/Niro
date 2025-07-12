import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import b1 from "/assets/imgs/background/23.jpg";
const SingleBlog = () => {
  const { id } = useParams();

  const posts = [
    {
      id: 1,
      date: "12 3 شهریور",
      img: b1,
      title: " پنل‌های خورشیدی: آینده انرژی پایدار",
      content:
        " پنل‌های خورشیدی از سلول‌های فتوولتائیک ساخته شده‌اند که معمولاً از سیلیکون تشکیل شده‌اند. این سلول‌ها با جذب نور خورشید، الکترون‌ها را تحریک کرده و جریان الکتریکی تولید می‌کنند. این جریان سپس به یک اینورتر منتقل می‌شود که آن را به جریان متناوب (AC) تبدیل می‌کند تا بتوان از آن در خانه‌ها و صنایع استفاده کرد. پنل‌های خورشیدی، که به عنوان سیستم‌های فتوولتائیک نیز شناخته می‌شوند، ابزارهایی هستند که انرژی خورشیدی را به انرژی الکتریکی تبدیل می‌کنند. با توجه به افزایش نگرانی‌ها درباره تغییرات اقلیمی و نیاز به منابع انرژی پایدار، استفاده از پنل‌های خورشیدی به عنوان یک راه‌حل مؤثر و پایدار در حال گسترش است. ",
      author: "من ",
      genre: "خورشیدی",
    },
    {
      id: 2,
      date: "12 3 خرداد",
      img: b1,
      title: "فیبر نوری: آینده ارتباطات",
      content:
        " فیبر نوری یکی از پیشرفته‌ترین فناوری‌ها در زمینه انتقال داده‌ها و ارتباطات است. این فناوری با استفاده از رشته‌های نازک شیشه‌ای یا پلاستیکی، اطلاعات را به صورت نور منتقل می‌کند. فیبر نوری به دلیل سرعت بالا، ظرفیت بالا و کاهش تداخل، به عنوان یک راه‌حل مؤثر برای نیازهای ارتباطی مدرن شناخته می‌شود. ",
      author: "تو ",
      genre: "خورشیدی",
    },
    {
      id: 3,
      date: "12 3 شهریور",
      img: b1,
      title: " پنل‌های خورشیدی: آینده انرژی پایدار",
      content:
        " پنل‌های خورشیدی از سلول‌های فتوولتائیک ساخته شده‌اند که معمولاً از سیلیکون تشکیل شده‌اند. این سلول‌ها با جذب نور خورشید، الکترون‌ها را تحریک کرده و جریان الکتریکی تولید می‌کنند. این جریان سپس به یک اینورتر منتقل می‌شود که آن را به جریان متناوب (AC) تبدیل می‌کند تا بتوان از آن در خانه‌ها و صنایع استفاده کرد. پنل‌های خورشیدی، که به عنوان سیستم‌های فتوولتائیک نیز شناخته می‌شوند، ابزارهایی هستند که انرژی خورشیدی را به انرژی الکتریکی تبدیل می‌کنند. با توجه به افزایش نگرانی‌ها درباره تغییرات اقلیمی و نیاز به منابع انرژی پایدار، استفاده از پنل‌های خورشیدی به عنوان یک راه‌حل مؤثر و پایدار در حال گسترش است. ",
      author: "من ",
      genre: "خورشیدی",
    },
  ];

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <>
      <div id="smooth-content">
        <main className="main-bg">
          <header class="page-header blog-header section-padding pb-0">
            <div class="container mt-80">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="caption">
                    <div class="sub-title fz-12">
                      <a href="#0">
                        <span>{post.genre}</span>
                      </a>
                     
          
                    </div>
                    <h1 class="fz-55 mt-30">{post.title}</h1>
                  </div>
                  <div class="info d-flex mt-40 align-items-center">
                    <div class="left-info">
                      <div class="d-flex">
                        <div class="author-info">
                          <div class="d-flex align-items-center">
                            <a href="#0" class="ml-20">
                              <span class="opacity-7">نویسنده</span>
                              <h6 class="fz-16"> {post.author} </h6>
                            </a>
                          </div>
                        </div>
                        <div class="date ml-50">
                          <a href="#0">
                            <span class="opacity-7">منتشر شده در</span>
                            <h6 class="fz-16">{post.date}  </h6>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="right-info ml-auto">
                      <div>
                        <span class="pe-7s-comment fz-18 mr-10"></span>
                        <span class="opacity-7">02 کامنت</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="background bg-img parallaxie mt-80"
              data-background={post.img}
            ></div>
          </header>



        <section class="blog section-padding pb-0">
            <div class="container">
                <div class="main-post">
                    <div class="item pb-60">
                        <div>
                
                            <div class="row justify-content-center">
                                <div class="col-lg-10">
  
                                    <div class="title mt-30">
                                        <h5 class="fw-600"> {post.title} </h5>
                                    </div>
                                    <div class="text mt-20">
                                        <p>
                                          {post.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                     
                    </div>
                    <div class="info-area flex mt-20 pb-20">
                        <div>
                            <div class="tags flex">
                                <div class="valign">
                                    <span>تگ ها :</span>
                                </div>
                                <div>
                                    <a href="blog-classic.html"> {post.genre} </a>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="ml-auto">
                            <div class="share-icon flex">
                                <div class="valign">
                                    <span>اشتراک :</span>
                                </div>
                                <div>
                                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="author-area mt-50">
                        <div class="flex">
                          
                            <div class="cont valign">
                                <div class="full-width">
                                    <h6 class="fw-600 mb-10">محمد محمدی</h6>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                        گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                                        و برای شرایط فعلی تکنولوژی مورد نیاز، و </p>

                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div class="next-prv-post flex mt-50">
                        <div class="thumb-post bg-img" data-background="assets/imgs/blog/b2.jpg">
                            <a href="blog-details.html">
                                <span class="fz-12 text-u ls1 main-color mb-15"><i class="pe-7s-angle-right"></i>
                                    پست قبل</span>
                                <h6 class="fw-600 fz-16">راه هایی برای ترافیک سریع به وبسایت شما.</h6>
                            </a>
                        </div>
                        <div class="thumb-post ml-auto text-right bg-img" data-background="assets/imgs/blog/b3.jpg">
                            <a href="blog-details.html">
                                <span class="fz-12 text-u ls1 main-color mb-15">پست بعدی <i
                                        class="pe-7s-angle-left"></i></span>
                                <h6 class="fw-600 fz-16">چگونه کارمند خوب خود را اداره کنیم.</h6>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* <div class="recent-posts blog-list-half crev sub-bg section-padding mt-100">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-60">
                                <h3>مقالات اخیر</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 md-mb50">
                            <div class="item mb-30">
                                <div class="row rest">
                                    <div class="col-md-6">
                                        <div class="img">
                                            <img src="assets/imgs/blog/h5.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 valign">
                                        <div class="cont">
                                            <span class="date fz-12 ls1 text-u opacity-7 mb-15">22 شهریور 1402</span>
                                            <h5>
                                                <a href="#0">تبلیغات رایگان برای تجارت آنلاین خود.</a>
                                            </h5>
                                            <div class="tags colorbg mt-15">
                                                <a href="#0">شبکه</a>
                                                <a href="#0">طراحی</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="item mb-30">
                                <div class="row rest">
                                    <div class="col-md-6">
                                        <div class="img">
                                            <img src="assets/imgs/blog/h6.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 valign">
                                        <div class="cont">
                                            <span class="date fz-12 ls1 text-u opacity-7 mb-15">24 شهریور 1402</span>
                                            <h5>
                                                <a href="#0">جلسه تجاری 2023 در سانفرانسیسکو.</a>
                                            </h5>
                                            <div class="tags colorbg mt-15">
                                                <a href="#0">بازاریابی</a>
                                                <a href="#0">طراحی</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div class="comments-post section-padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-11">
                            <div class="text mb-60">
                                <h3>نظرات</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-11">
                            <div class="item-box">
                                <div class="row">
                                    <div class="col-lg-9">
                                        <div class="flex">
                                         
                                            <div class="cont">
                                                <h6 class="line-height-1">علی علیپور</h6>
                                                <span class="fz-12 ls1 text-u mb-15">20 شهرویر 1401، 07:00 صبح</span>
                                                <p class="fz-14">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 d-flex align-items-center">
                                        <div class="replay-post ml-auto">
                                            <a href="#0">
                                                <span>جواب</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-box replayed">
                                <div class="row">
                                    <div class="col-lg-9">
                                        <div class="flex">
                                            <div class="user-img mr-30">
                                                <div class="img circle-80 line-height-1">
                                                    <img src="assets/imgs/blog/author1.jpg" alt="" class="circle-img"/>
                                                </div>
                                            </div>
                                            <div class="cont">
                                                <h6 class="line-height-1">علی علیپور</h6>
                                                <span class="fz-12 ls1 text-u mb-15">20 شهرویر 1401، 07:00 صبح</span>
                                                <p class="fz-14">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 d-flex align-items-center">
                                        <div class="replay-post ml-auto">
                                            <a href="#0">
                                                <span>جواب</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div class="comments-from section-padding sub-bg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-11">
                            <div class="text mb-60">
                                <h3>نظر خود را بنویسید</h3>
                            </div>
                        </div>
                    </div> */}
                    {/* <div class="row justify-content-center"> */}
                        {/* <div class="col-lg-11">
                            <form id="contact-form" method="post" action="#">

                                <div class="messages"></div>

                                <div class="controls row">

                                    <div class="col-lg-6">
                                        <div class="form-group mb-30">
                                            <input id="form_name" type="text" name="name" placeholder="نام شما"
                                                required="required"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="form-group mb-30">
                                            <input id="form_email" type="email" name="email" placeholder="آدرس ایمیل"
                                                required="required"/>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-group mb-30">
                                            <textarea id="form_message" name="message" placeholder="نظر شما ..."
                                                rows="4" required="required"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-12 text-center mt-20">
                                        <button type="submit" class="butn-circle">
                                            <span class="full-width">
                                                <span class="full-width">ارسال  نظر</span>
                                            </span>
                                            <img src="assets/imgs/svg-assets/circle-star.svg" alt=""
                                                class="circle-star"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div> */}
                    {/* </div>
                </div>
            </div> */}
        </section>




        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default SingleBlog;
