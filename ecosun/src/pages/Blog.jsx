import Navbar from "../components/Navbar";
import Slider from "../components/Slider.jsx";
import AAbout from "../components/AAbout.jsx";
import Loader from "../components/Loader.jsx";
import Spin from "../components/Spin.jsx";
import Services from "../components/Services.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Numbers from "../components/Numbers.jsx";
import Process from "../components/Process.jsx";
import Block from "../components/Block.jsx";
import Why from "../components/Why.jsx";
import TeamS from "../components/TeamS.jsx";
import Footer from "../components/Footer.jsx";
import ASlider from "../components/ASlider.jsx";
import b1 from "/assets/imgs/background/23.jpg";
import BlogTitle from "../components/BlogTitle.jsx";
import { Link } from "react-router-dom";

function Blog() {
  const data = [
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
  return (
    <>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <header className="page-header section-padding pb-0">
              <div className="container mt-80">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="caption">
                      <h6 className="sub-title">وبلاگ ما</h6>
                      <h1 className="fz-80">آخرین اخبار.</h1>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <section class="blog-modern section-padding sub-bg">
              <div class="container">
                <div class="row">
                  {data.map((item) => (
                    <BlogTitle
                      key={item.id}
                      date={item.date}
                      img={item.img}
                      link={`/posts/${item.id}`}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
            </section>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Blog;
