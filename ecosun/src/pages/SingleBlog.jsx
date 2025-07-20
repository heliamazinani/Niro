import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider.jsx";
import AAbout from "../components/AAbout.jsx";
import Loader from "../components/Loader.jsx";
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
      title: "  آیا در زمان قطعی برق می‌توان از پنل خورشیدی استفاده کرد؟",
      content: (
        <>
          <h1>آیا در زمان قطعی برق می‌توان از پنل خورشیدی استفاده کرد؟</h1>

          <p>
            استفاده از پنل خورشیدی در مواقعی که برق قطع می‌شود، به عنوان یک
            راهکار نوین و موثر، توجه بسیاری از خانواده‌ها و مشاغل را جلب کرده
            است. در سال‌های اخیر، با افزایش موارد قطعی برق و نگرانی‌ها در مورد
            تأمین پایدار انرژی، ضرورت بهره‌مندی از منابع تجدیدپذیر بیشتر احساس
            می‌شود.
          </p>

          <p>
            سیستم‌های خورشیدی قابلیت تأمین برق در شرایط اضطراری را در زمان
            خاموشی دارند. همچنین با کاهش وابستگی به شبکه برق شهری و بهینه‌سازی
            هزینه‌ها، نقش قابل توجهی در بهبود کیفیت زندگی و پایداری محیط زیست
            ایفا می‌کنند. در این مقاله به بررسی جنبه‌های مختلف استفاده از
            سیستم‌های خورشیدی در مواقع قطعی برق و فواید آن خواهیم پرداخت.
          </p>

          <h2>چگونه می‌توانم در زمان قطعی برق، از پنل خورشیدی بهره‌مند شوم</h2>

          <p>
            برای استفاده از پنل‌های خورشیدی در مواقعی که برق قطع می‌شود، لازم
            است از سیستم‌هایی بهره ببرید که توانایی ذخیره‌سازی انرژی و تأمین برق
            به‌صورت مستقل از شبکه را داشته باشند. در ادامه، مراحل و نکات مهم
            برای بهینه‌سازی استفاده و همچنین مزایای پنل‌های خورشیدی ارائه شده
            است:
          </p>

          <h3>نکات کلیدی استفاده از پنل خورشیدی در زمان قطعی برق</h3>

          <ol>
            <li>
              <strong>نصب سیستم خورشیدی هیبریدی یا آف‌گرید</strong>
              سیستم‌های خورشیدی متصل به شبکه (On‑Grid) در مواقع قطع برق خاموش
              می‌شوند تا از برگشت برق به شبکه و خطرات جلوگیری کنند. بنابراین،
              برای استفاده در زمان قطع برق باید سیستم‌های هیبریدی یا آف‌گرید با
              باتری نصب کنید تا انرژی تولیدی ذخیره و در زمان خاموشی استفاده شود.
            </li>

            <li>
              <strong>استفاده از باتری به عنوان ذخیره‌ساز انرژی</strong>
              باتری‌ها انرژی اضافی تولیدشده را ذخیره می‌کنند تا در شب یا زمان
              قطع برق مورد استفاده قرار گیرد. بدون باتری، پنل‌های خورشیدی در
              زمان خاموشی ناچیز هستند.
            </li>

            <li>
              <strong>استفاده از اینورتر شارژر یا سانورتر</strong>
              برای تبدیل برق مستقیم (DC) به متناوب (AC) و مدیریت انرژی، نیاز به
              اینورتر شارژر دارید. این دستگاه‌ها به‌طور خودکار بین منابع انرژی
              سوئیچ می‌کنند و در صورت قطع برق، از باتری و پنل‌ها تغذیه می‌کنند.
            </li>

            <li>
              <strong>انتخاب ظرفیت مناسب باتری و پنل</strong>
              ظرفیت مناسب باتری و تعداد پنل‌ها باید بر اساس میزان مصرف و مدت
              زمان احتمالی قطعی برق تعیین شود که معمولاً توسط متخصصان انجام
              می‌گیرد.
            </li>

            <li>
              <strong>استفاده از ژنراتور خورشیدی قابل حمل</strong>
              در مواقع بحرانی یا مکان‌های موقت، می‌توان از ژنراتورهای خورشیدی با
              باتری داخلی استفاده کرد تا در زمان قطع برق برق ضروری تأمین شود.
            </li>
          </ol>

          <p>
            برای استفاده از پنل‌های خورشیدی در زمان عدم دسترسی به برق، نیاز به
            سیستم هیبریدی یا آف‌گرید با باتری و اینورتر شارژر است. این سیستم‌ها
            امکان تأمین برق مستقل از شبکه را فراهم می‌کنند.
          </p>

          <h2>
            استفاده از پنل خورشیدی در زمان قطعی برق؛ راهکارهای اضطراری برای
            منازل
          </h2>

          <p>
            در بسیاری از نقاط، قطع برق به دلایلی مانند افزایش تقاضا، تعمیرات
            زیرساخت یا حوادث طبیعی رخ می‌دهد. یکی از کارآمدترین راه‌ها برای
            تأمین انرژی، استفاده از سیستم‌های برق اضطراری خورشیدی با پنل و باتری
            است. این سیستم‌ها می‌توانند وسایل ضروری را در زمان قطع برق روشن نگه
            دارند و وابستگی به شبکه را کاهش دهند.
          </p>

          <h2>استفاده از پنل خورشیدی؛ استقلال انرژی و کاهش هزینه‌ها</h2>

          <p>
            یکی از مزایای پنل‌های خورشیدی در مواقع قطع برق، استقلال از شبکه شهری
            است. با نصب سیستم هیبریدی یا آف‌گرید، انرژی خورشیدی در باتری‌ها
            ذخیره شده و نیاز انرژی مستقل از شبکه تأمین می‌شود. این خودکفایی
            به‌ویژه در مناطق روستایی یا نواحی با قطعی مکرر برق اهمیت دارد و
            می‌تواند هزینه‌های برق را کاهش دهد.
          </p>

          <h2>استفاده از پنل خورشیدی؛ راهکارهای فنی و انتخاب سیستم مناسب</h2>

          <p>
            سیستم‌های متصل به شبکه به دلیل امنیت، در زمان قطع برق غیرفعال
            می‌شوند. در مقابل، سیستم‌های هیبریدی یا مستقل (Off‑Grid) با پنل و
            باتری امکان ذخیره و استفاده از انرژی در شرایط اضطراری را فراهم
            می‌کنند. اینورتر شارژر نیز در مدیریت منابع انرژی ضروری است. انتخاب
            صحیح ظرفیت باتری و پنل بر اساس مصرف بسیار مهم است.
          </p>

          <h2>استفاده از پنل خورشیدی؛ مزایای زیست‌محیطی و پایداری</h2>

          <p>
            این روش نه تنها امنیت انرژی را تقویت می‌کند، بلکه انتشار گازهای
            گلخانه‌ای را کاهش داده و سلامت محیط زیست را بهبود می‌بخشد. انرژی
            خورشیدی نوسانات کمتری دارد و در شرایط بحران زیست‌محیطی پایدار و
            مطمئن است.
          </p>

          <h2>
            چه مزایایی در نصب پنل خورشیدی برای کاهش هزینه‌های برقی در زمان قطعی
            وجود دارد
          </h2>

          <p>
            پنل‌های خورشیدی باعث کاهش مصرف برق از شبکه و قبض‌های ماهیانه
            می‌شوند. ذخیره‌سازی انرژی از طریق باتری‌ها، اتکا به شبکه را کاهش
            می‌دهد و مانع خرید برق در ساعات اوج مصرف می‌شود. این راهکار به‌ویژه
            در مناطق با قطعی مکرر برق بسیار مفید است و به کاهش هزینه‌های سوخت
            فسیلی نیز کمک می‌کند.
          </p>

          <h2>
            چگونه باتری‌های خورشیدی به پایداری برق در زمان قطعی کمک می‌کنند
          </h2>

          <p>
            باتری‌ها انرژی اضافی پنل‌ها را در روز ذخیره می‌کنند و در زمان قطع
            برق آن را به‌طور قابل‌اطمینان تأمین می‌کنند. سیستم‌های هیبریدی
            می‌توانند نیازهای مصرفی را حتی بدون شبکه برق پاسخ دهند. این سیستم‌ها
            باعث کاهش وابستگی به شبکه، افزایش استقلال انرژی و کاهش انتشار کربن
            می‌شوند.
          </p>

          <h2>جمع‌بندی</h2>

          <p>
            سیستم‌های پنل خورشیدی در زمان قطع برق راهکار مؤثری برای تأمین انرژی
            مستقل و پایدار هستند. این سیستم‌ها با کاهش هزینه‌های برق، افزایش
            امنیت انرژی و محافظت از محیط زیست همراه‌اند. انتخاب ظرفیت مناسب برای
            باتری و پنل و استفاده از ابزارهای مدیریت انرژی کلید بهره‌وری بهینه
            در زمان قطع برق محسوب می‌شوند.
          </p>
        </>
      ),
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

        <div id="smooth-wrapper">
          <Navbar />

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
                                <h6 class="fz-16">{post.date} </h6>
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
                <img src={post.img} alt="" />
                {/* <div
                  class="background bg-img parallaxie mt-80"
                  data-background={post.img}
                ></div> */}
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
                              <p>{post.content}</p>
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
                            <a href="https://www.facebook.com/">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com/">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.youtube.com/">
                              <i class="fab fa-youtube"></i>
                            </a>
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
        </div>
    
    </>
  );
};

export default SingleBlog;
