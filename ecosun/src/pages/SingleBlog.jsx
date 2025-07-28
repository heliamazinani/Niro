import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar";

import postsData from "../data/posts.json";

const SingleBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    setPosts(savedPosts || postsData.posts);
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
                        {/* <div>
                          <span class="pe-7s-comment fz-18 mr-10"></span>
                          <span class="opacity-7">02 کامنت</span>
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
                            <div
                              className="post-content"
                              dangerouslySetInnerHTML={{ __html: post.content }}
                            />
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
                          <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                          >
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a
                            href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                          >
                            <i class="fab fa-twitter"></i>
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
