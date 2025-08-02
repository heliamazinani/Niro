import Navbar from "../components/Navbar";

import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";
import React, { useEffect, useState } from "react";
import postsData from "../data/posts.json"; // your JSON file
import shopData from "../data/shopData.json"; // your JSON file
import instaPost from "../data/insta.json"; // your JSON file
import { Link } from "react-router-dom";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);
  const [insta, setInsta] = useState([]);

  useEffect(() => {
    const savedInsta = JSON.parse(localStorage.getItem("instaposts"));
    setInsta(savedInsta || instaPost.posts);
    // const savedShop = JSON.parse(localStorage.getItem("products"));
    // setPosts(savedShop || shopData.products);
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    setProducts(savedProducts || shopData.products);
    // Load from localStorage first, or fallback to JSON file
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    setPosts(savedPosts || postsData.posts);
  }, []);

  // Save changes to localStorage whenever posts update
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("instaposts", JSON.stringify(insta));
  }, [insta]);
  //   useEffect(() => {
  //     localStorage.setItem("products", JSON.stringify(shop));
  //   }, [shop]);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

const handleDeleteInsta = (id) => {
  setInsta(insta.filter((post) => post.id !== id));
};

  return (
    <>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <section class="serv-box section-padding">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div class="serv-item md-mb50 radius-5  ">
                        <h6 class="mb-15"> مدیریت مقالات</h6>
                        <p class="fz-14">
                          <li>
                            {" "}
                            <div
                              className="item  mt-10 pb-5 bord-thin-bottom "
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <Link to="/add">اضافه</Link>
                            </div>
                          </li>
                          {posts.map((post) => (
                            <div
                              className="  bord-thin-bottom "
                              style={{
                                cursor: "pointer",
                              }}
                              key={post.id}
                            >
                              {" "}
                              <div class="row">
                                <div class="col-lg-6">
                                  <td>{post.title}</td>
                                </div>
                                <div class="col-lg-3">
                                  <td>
                                    <div
                                      className="ml-20"
                                      style={{
                                        cursor: "pointer",
                                      }}
                                      onClick={() => handleDelete(post.id)}
                                    >
                                      حذف
                                    </div>
                                  </td>
                                </div>
                                <div class="col-lg-3">
                                  <td>
                                    <div
                                      className="ml-20"
                                      style={{
                                        cursor: "pointer",
                                      }}
                                    >
                                      <Link to={`/editessay/${post.id}`}>
                                        ویرایش
                                      </Link>
                                    </div>
                                  </td>
                                </div>
                              </div>
                            </div>
                          ))}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div class="col-lg-4">
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div class="serv-item md-mb50 radius-5">
                        <h6 class="mb-15"> مدیریت محصولات </h6>
                        <p class="fz-14">
                          <li>
                            {" "}
                            <div
                              className="item  mt-10 pb-5 bord-thin-bottom "
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <Link to="/addproduct">اضافه</Link>
                            </div>
                          </li>
                          {products.map((product) => (
                            <div
                              className="  bord-thin-bottom "
                              style={{
                                cursor: "pointer",
                              }}
                              key={product.id}
                            >
                              {" "}
                              <div class="row">
                                <div class="col-lg-6">
                                  <td>{product.name}</td>
                                </div>
                                <div class="col-lg-3">
                                  <td>
                                    <div
                                      className="ml-20"
                                      style={{
                                        cursor: "pointer",
                                      }}
                                      onClick={() =>
                                        handleDeleteProduct(product.id)
                                      }
                                    >
                                      حذف
                                    </div>
                                  </td>
                                </div>
                                <div class="col-lg-3">
                                  <td>
                                    <div
                                      className="ml-20"
                                      style={{
                                        cursor: "pointer",
                                      }}
                                    >
                                      <Link to={`/editproduct/${product.id}`}>
                                        ویرایش
                                      </Link>
                                    </div>
                                  </td>
                                </div>
                              </div>
                            </div>
                          ))}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div class="col-lg-4">
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div class="serv-item md-mb50 radius-5 ">
                        <h6 class="mb-15"> مدیریت پست ها </h6>
                        <p class="fz-14">
                          <li>
                            {" "}
                            <div
                              className="item  mt-10 pb-5 bord-thin-bottom "
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <Link to="/insta/add">اضافه</Link>
                            </div>
                          </li>
                          {insta.map((post) => (
                            <div
                              className="  bord-thin-bottom "
                              style={{
                                cursor: "pointer",
                              }}
                              key={post.id}
                            >
                              {" "}
                              <div class="row">
                                <div class="col-lg-6">
                                  <td>{post.id}</td>
                                </div>
                                <div class="col-lg-3">
                                  <td>
                                    <div
                                      className="ml-20"
                                      style={{
                                        cursor: "pointer",
                                      }}
                                      onClick={() => handleDeleteInsta(post.id)}
                                    >
                                      حذف
                                    </div>
                                  </td>
                                </div>
                                <div class="col-lg-3">
                                  <td>
                                    <div
                                      className="ml-20"
                                      style={{
                                        cursor: "pointer",
                                      }}
                                    >
                                      <Link to={`/insta/edit/${post.id}`}>
                                        ویرایش
                                      </Link>
                                    </div>
                                  </td>
                                </div>
                              </div>
                            </div>
                          ))}
                        </p>
                      </div>
                    </motion.div>
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
}

export default Dashboard;
