import DashboardLayout from "./DashboardLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import List from "../components/List.jsx";
import React, { useEffect, useState } from "react";
import postsData from "../data/posts.json"; // your JSON file

const EssayManagment = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
const handleDelete = async (id) => {
  if (!window.confirm("آیا از حذف این مقاله مطمئن هستید؟")) return;

  try {
    const response = await fetch(`https://api.ecosunir.ir/api/blog/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "خطا در حذف ");
    }

    // Remove from local state after successful deletion
    setPosts((prev) => prev.filter((post) => post.id !== id));
  } catch (error) {
    console.error("Delete Error:", error);
    alert("حذف  با خطا مواجه شد: " + error.message);
  }
};
  useEffect(() => {
    const fetchInstaPosts = async () => {
      try {
        const res = await fetch("https://api.ecosunir.ir/api/blog");
        const result = await res.json();
        console.log("Fetched:", result);
  
        if (Array.isArray(result)) {
          setPosts(result); // ✅ Use result.data
        } else {
          console.error("Unexpected response format", result);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
  
    fetchInstaPosts();
  }, []);

  // Calculate indexes for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <DashboardLayout>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div
            className="item  m-10 pb-5 "
            style={{
              cursor: "pointer",
              border: "bold white",
            }}
          >
            <h1>مدیریت مقالات</h1>
            <Link to="/add">
              <h6
                style={{
                  cursor: "pointer",
                  border: "1px solid gray ",
                  marginTop: "10px",
                  borderRadius: "5px",
                  padding: "15px", // Adjust the width and style as needed
                }}
              >
                مقاله جدید +
              </h6>
            </Link>
          </div>
          {posts.length === 0 ? (
            <p>هیچ مقاله‌ای وجود ندارد</p>
          ) : (
            currentPosts.map((post) => (
              <div className="col-lg-4" key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="item md-mb50 mt-10">
                    <div className="cont">
                      <div
                        style={{
                          width: "100%",
                          height: "220px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={`https://api.ecosunir.ir/api${post.img}`}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />

                        <Link
                          to={post.link}
                          className="main-colorbg3"
                          onClick={scrollToTop}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            className="mirror"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                      <h6>
                        <Link to={post.link} onClick={scrollToTop}>
                          {post.title}
                        </Link>
                      </h6>
                      <div className="info mt-20 mb-20 pt-20 bord-thin-top">
                        <span className="row">
                          <div className="col-6 text-center">
                            {" "}
                            <Link
                              to={post.link}
                              onClick={() => handleDelete(post.id)}
                            >
                              حذف
                            </Link>
                          </div>
                          <div className="col-6 text-center">
                            {" "}
                            <Link
                              to={`/editessay/${post.id}`}
                              onClick={scrollToTop}
                            >
                              ویرایش
                            </Link>
                          </div>
                        </span>
                        <span className="dot main-colorbg3"></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))
          )}
        </div>

        {/* Pagination Controls */}
        {posts.length > postsPerPage && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              gap: "10px",
            }}
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: "8px 16px",
                border: "1px solid #ccc",
                background: currentPage === 1 ? "#eee" : "#fff",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
              }}
            >
              قبلی
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #ccc",
                  background: currentPage === index + 1 ? "#ffaa17" : "#fff",
                  color: currentPage === index + 1 ? "#fff" : "#000",
                  cursor: "pointer",
                }}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: "8px 16px",
                border: "1px solid #ccc",
                background: currentPage === totalPages ? "#eee" : "#fff",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              }}
            >
              بعدی
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default EssayManagment;
