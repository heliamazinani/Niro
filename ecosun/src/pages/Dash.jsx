import DashboardLayout from "./DashboardLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import List from "../components/List.jsx";
import React, { useEffect, useState } from "react";
import postsData from "../data/posts.json"; // your JSON file

const Dash = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts && savedPosts.length > 0) {
      setPosts(savedPosts);
    } else {
      setPosts(postsData.posts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

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
      <div className="container" style={{ marginTop: "200px" }}>
        <div className="row">
            <h2>سلام</h2>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dash;
