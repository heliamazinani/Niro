import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar";

import postsData from "../data/posts.json";

const SingleBlog = () => {
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

  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  if (!post) {
    return <div>Post not found!</div>;
  }
  const index = posts.findIndex((p) => p.id === parseInt(id));
  const prevPost = index > 0 ? posts[index - 1] : null;
  const nextPost = index < posts.length - 1 ? posts[index + 1] : null;

  return (
    <>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <header className="page-header blog-header section-padding pb-0">
              <div className="container mt-80">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="caption">
                      <div className="sub-title fz-12">
                        <a href="#0">
                          <span>{post.genre}</span>
                        </a>
                      </div>
                      <h1 className="fz-55 mt-30">{post.title}</h1>
                    </div>
                    <div className="info d-flex mt-40 align-items-center">
                      <div className="left-info">
                        <div className="d-flex">
                          <div className="author-info">
                            <div className="d-flex align-items-center">
                              <a href="#0" className="ml-20">
                                <span className="opacity-7">نویسنده</span>
                                <h6 className="fz-16"> {post.author} </h6>
                              </a>
                            </div>
                          </div>
                          <div className="date ml-50">
                            <a href="#0">
                              <span className="opacity-7">منتشر شده در</span>
                              <h6 className="fz-16">{post.date} </h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="right-info ml-auto">
                        {/* <div>
                          <span className="pe-7s-comment fz-18 mr-10"></span>
                          <span className="opacity-7">02 کامنت</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="img"
                style={{
                  maxHeight: "500px", // or any fixed value
                  width: "auto", // maintain aspect ratio
                  objectFit: "contain", // prevent stretching
                }}
              >
                <img src={post.img} alt="" />
              </div>
              {/* <div
                  className="background bg-img parallaxie mt-80"
                  data-background={post.img}
                ></div> */}
            </header>

            <section className="blog section-padding pb-0">
              <div className="container">
                <div className="main-post">
                  <div className="item pb-60">
                    <div>
                      <div className="row justify-content-center">
                        <div className="col-lg-10">
                          <div className="title mt-30">
                            <h5 className="fw-600"> {post.title} </h5>
                          </div>
                          <div className="text mt-20">
                            <div
                              className="post-content"
                              dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info-area flex mt-20 pb-20">
                    <div>
                      <div className="tags flex">
                        <div className="valign">
                          <span>تگ ها :</span>
                        </div>
                        <div>
                          <a href="blog-classic.html"> {post.genre} </a>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="share-icon flex">
                        <div className="valign">
                          <span>اشتراک :</span>
                        </div>
                        <div>
                          <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a
                            href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="next-prv-post flex mt-50">
                    {prevPost && (
                      <div
                        className="thumb-post bg-img"
                        // style={{ backgroundImage: `url(${prevPost.img})` }}
                      >
                        <Link to={`/posts/${prevPost.id}`}>
                          <span className="fz-12 text-u ls1 main-color mb-15">
                            <i className="pe-7s-angle-right"></i> پست قبل
                          </span>
                          <h6 className="fw-600 fz-16">{prevPost.title}</h6>
                        </Link>
                      </div>
                    )}

                    {nextPost && (
                      <div
                        className="thumb-post ml-auto text-right bg-img"
                        // style={{ backgroundImage: `url(${nextPost.img})` }}
                      >
                        <Link to={`/posts/${nextPost.id}`}>
                          <span className="fz-12 text-u ls1 main-color mb-15">
                            پست بعدی <i className="pe-7s-angle-left"></i>
                          </span>
                          <h6 className="fw-600 fz-16">{nextPost.title}</h6>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
