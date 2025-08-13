import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import TeamS from "../components/TeamS.jsx";
import Footer from "../components/Footer.jsx";
import ASlider from "../components/ASlider.jsx";
import b1 from "/assets/imgs/background/23.jpg";
import BlogTitle from "../components/BlogTitle.jsx";
import { Link } from "react-router-dom";
import postsData from "../data/posts.json";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstaPosts = async () => {
      try {
        const response = await fetch("http://api.ecosunir.ir:3000/blogs");
        const data = await response.json();

        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (err) {
        console.error("Failed to fetch Instagram posts:", err);
      }
    };

    fetchInstaPosts();
  }, []);
  return (
    <>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <section className="blog-modern section-padding sub-bg">
              <div className="container">
                <div className="row">
                  {posts.map((item) => (
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
