import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

  // ✅ Fetch posts from backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://api.ecosunir.ir:3000/api/post");
        const data = await response.json();

        if (Array.isArray(data)) {
          setPosts(data);

          // If editing
          if (id) {
            const post = data.find((p) => p.id === Number(id));
            if (post) setEditingPost(post);
          }
        } else {
          console.error("Unexpected response:", data);
        }
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };

    fetchPosts();
  }, [id]);

  // ✅ Handle image upload
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

  // ✅ Save Post (Add or Edit) via backend POST or PUT
const handleSave = async (e) => {
  e.preventDefault();

  if (!editingPost.link || !editingPost.img) {
    alert("لطفاً تصویر و لینک را وارد کنید");
    return;
  }

  try {
    const isEditing = !!id;

    const url = isEditing
      ? `http://api.ecosunir.ir:3000/api/post/${id}`
      : `http://api.ecosunir.ir:3000/api/post`;

    const method = isEditing ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: editingPost.img,
        link: editingPost.link,
      }),
    });

    const result = await response.json();
    console.log("Server response:", result);

    if (!response.ok) {
      throw new Error(result.message || "خطا در ذخیره‌سازی");
    }

    alert(isEditing ? "پست ویرایش شد" : "پست جدید ذخیره شد");
    navigate("/dashboard");
  } catch (error) {
    console.error("Save error:", error.message);
    alert("خطا: " + error.message);
  }
};


  return (
    <>
      <Navbar />
      <main className="main-bg">
        <div className="comments-from" style={{ padding: "20px" }}>
          <h1>{id ? "ویرایش پست اینستاگرام" : "افزودن پست اینستاگرام"}</h1>
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
              type="submit"
              style={{
                background: "#ffaa17",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
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
