import Navbar from "../components/Navbar";
import Slider from "../components/Slider.jsx";
import About from "../components/About.jsx";
import Loader from "../components/Loader.jsx";
import Spin from "../components/Spin.jsx";
import Services from "../components/Services.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Numbers from "../components/Numbers.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Block from "../components/Block.jsx";
import Pricing from "../components/Pricing.jsx";
import Blog from "../components/Blog.jsx";
import Footer from "../components/Footer.jsx";
import FAQs from "../components/FAQs.jsx";

function AboutUs() {

  return (
    <>

      <div id="smooth-content">
        <main className="main-bg">
          <About></About>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default AboutUs;
