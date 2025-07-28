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
import { posts } from "../data/posts";
function Blog() {
  return (
    <>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <section class="blog-modern section-padding sub-bg">
              <div class="container">
                <div class="row">
                  {posts.map((item) => (
                    <BlogTitle
                      key={item.id}
                      date={item.date}
                      img={item.img}
                      link={`/posts/${item.id}`}
                      title={item.title}
                    />
                  ))}
                  <BlogTitle
                    
                    date=""
                   
                    link="/add"
                    title="مقاله جدید"
                  />
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
