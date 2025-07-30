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
        // Load from localStorage first, or fallback to JSON file
        const savedPosts = JSON.parse(localStorage.getItem("posts"));
        setPosts(savedPosts || postsData.posts);
      }, []);

      // Save changes to localStorage whenever posts update
      useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts));
      }, [posts]);

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
