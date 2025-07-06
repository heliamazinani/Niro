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
function Home() {
  return (
    <div class="home-corp main-bg">
      <Loader></Loader>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Slider></Slider>
            <Services></Services>
            <About></About>
            <Spin></Spin>
            <Portfolio></Portfolio>
            <Numbers></Numbers>
            <Testimonials></Testimonials>
            <Block></Block>
            <FAQs></FAQs>
            <Pricing></Pricing>
            <Blog></Blog>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
