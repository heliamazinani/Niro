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

function AboutUs() {

  return (
    <>
    
      <div id="smooth-content">
        <main className="main-bg">
          {/* <About></About> */}
          <ASlider></ASlider>
          {/* <AAbout></AAbout> */}


          <Process></Process>
          <TeamS></TeamS>
          <Team></Team>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default AboutUs;
