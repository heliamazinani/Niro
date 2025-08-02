import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instaData from "../data/insta.json"; // Your JSON file
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdminInstaEditor = () => {
  const { id } = useParams(); // "add" or post ID
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState({
    id: "",
    img: "",
    link: "",
  });

  // ✅ Load posts from localStorage or fallback JSON
  useEffect(() => {
    const savedPosts =
      JSON.parse(localStorage.getItem("instaposts")) || instaData.posts;
    setPosts(savedPosts);

    if (id) {
      const post = savedPosts.find((p) => p.id === Number(id));
      if (post) setEditingPost(post);
    }
  }, [id]);

  // ✅ Save posts whenever they change
  useEffect(() => {
    localStorage.setItem("instaposts", JSON.stringify(posts));
  }, [posts]);

  // ✅ Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingPost({ ...editingPost, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Save Post (Add or Edit)
  const handleSave = (e) => {
    e.preventDefault();

    if (!editingPost.link) {
      alert("لینک اینستاگرام را وارد کنید");
      return;
    }

    if (!id ) {
      const newPost = { ...editingPost, id: Date.now() };
      setPosts([...posts, newPost]);
    } else {
      const updatedPosts = posts.map((p) =>
        p.id === editingPost.id ? editingPost : p
      );
      setPosts(updatedPosts);
    }

    navigate("/dashboard"); // Redirect back to dashboard
  };

  return (
    <>
      <Navbar />
      <main className="main-bg">
        <div className="comments-from" style={{ padding: "20px" }}>
          <h1>
            {id? "افزودن پست اینستاگرام" : "ویرایش پست اینستاگرام"}
          </h1>
          <form
            onSubmit={handleSave}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {/* Image Upload */}
            <div>
              <p>انتخاب تصویر:</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {editingPost.img && (
                <img
                  src={editingPost.img}
                  alt="Preview"
                  style={{ width: "200px", marginTop: "10px" }}
                />
              )}
            </div>

            {/* Instagram Link */}
            <input
              type="text"
              placeholder="لینک اینستاگرام"
              value={editingPost.link}
              onChange={(e) =>
                setEditingPost({ ...editingPost, link: e.target.value })
              }
              required
            />

            <button
              style={{
                background: "#ffaa17",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
              type="submit"
            >
              ذخیره پست
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminInstaEditor;
