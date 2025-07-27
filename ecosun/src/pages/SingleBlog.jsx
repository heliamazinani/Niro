import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar";

import { posts } from "../data/posts";
const SingleBlog = () => {
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
                  maxHeight: "600px", // or any fixed value
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
                            <p>{post.content}</p>
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
                  {/* <div class="author-area mt-50">
                        <div class="flex">
                          
                            <div class="cont valign">
                                <div class="full-width">
                                    <h6 class="fw-600 mb-10">محمد محمدی</h6>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                        گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                                        و برای شرایط فعلی تکنولوژی مورد نیاز، و </p>

                                </div>
                            </div>
                        </div>
                    </div> */}
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

              {/* <div class="recent-posts blog-list-half crev sub-bg section-padding mt-100">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-60">
                                <h3>مقالات اخیر</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 md-mb50">
                            <div class="item mb-30">
                                <div class="row rest">
                                    <div class="col-md-6">
                                        <div class="img">
                                            <img src="assets/imgs/blog/h5.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 valign">
                                        <div class="cont">
                                            <span class="date fz-12 ls1 text-u opacity-7 mb-15">22 شهریور 1402</span>
                                            <h5>
                                                <a href="#0">تبلیغات رایگان برای تجارت آنلاین خود.</a>
                                            </h5>
                                            <div class="tags colorbg mt-15">
                                                <a href="#0">شبکه</a>
                                                <a href="#0">طراحی</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="item mb-30">
                                <div class="row rest">
                                    <div class="col-md-6">
                                        <div class="img">
                                            <img src="assets/imgs/blog/h6.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 valign">
                                        <div class="cont">
                                            <span class="date fz-12 ls1 text-u opacity-7 mb-15">24 شهریور 1402</span>
                                            <h5>
                                                <a href="#0">جلسه تجاری 2023 در سانفرانسیسکو.</a>
                                            </h5>
                                            <div class="tags colorbg mt-15">
                                                <a href="#0">بازاریابی</a>
                                                <a href="#0">طراحی</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

              {/* <div class="comments-post section-padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-11">
                            <div class="text mb-60">
                                <h3>نظرات</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-11">
                            <div class="item-box">
                                <div class="row">
                                    <div class="col-lg-9">
                                        <div class="flex">
                                         
                                            <div class="cont">
                                                <h6 class="line-height-1">علی علیپور</h6>
                                                <span class="fz-12 ls1 text-u mb-15">20 شهرویر 1401، 07:00 صبح</span>
                                                <p class="fz-14">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 d-flex align-items-center">
                                        <div class="replay-post ml-auto">
                                            <a href="#0">
                                                <span>جواب</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-box replayed">
                                <div class="row">
                                    <div class="col-lg-9">
                                        <div class="flex">
                                            <div class="user-img mr-30">
                                                <div class="img circle-80 line-height-1">
                                                    <img src="assets/imgs/blog/author1.jpg" alt="" class="circle-img"/>
                                                </div>
                                            </div>
                                            <div class="cont">
                                                <h6 class="line-height-1">علی علیپور</h6>
                                                <span class="fz-12 ls1 text-u mb-15">20 شهرویر 1401، 07:00 صبح</span>
                                                <p class="fz-14">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 d-flex align-items-center">
                                        <div class="replay-post ml-auto">
                                            <a href="#0">
                                                <span>جواب</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

              {/* <div class="comments-from section-padding sub-bg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-11">
                            <div class="text mb-60">
                                <h3>نظر خود را بنویسید</h3>
                            </div>
                        </div>
                    </div> */}
              {/* <div class="row justify-content-center"> */}
              {/* <div class="col-lg-11">
                            <form id="contact-form" method="post" action="#">

                                <div class="messages"></div>

                                <div class="controls row">

                                    <div class="col-lg-6">
                                        <div class="form-group mb-30">
                                            <input id="form_name" type="text" name="name" placeholder="نام شما"
                                                required="required"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="form-group mb-30">
                                            <input id="form_email" type="email" name="email" placeholder="آدرس ایمیل"
                                                required="required"/>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-group mb-30">
                                            <textarea id="form_message" name="message" placeholder="نظر شما ..."
                                                rows="4" required="required"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-12 text-center mt-20">
                                        <button type="submit" class="butn-circle">
                                            <span class="full-width">
                                                <span class="full-width">ارسال  نظر</span>
                                            </span>
                                            <img src="assets/imgs/svg-assets/circle-star.svg" alt=""
                                                class="circle-star"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div> */}
              {/* </div>
                </div>
            </div> */}
            </section>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
