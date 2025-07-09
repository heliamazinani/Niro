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
import Team from "../components/Team.jsx";

function Blog() {
  return (
    <>
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
          </header>{" "}

        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Blog;
