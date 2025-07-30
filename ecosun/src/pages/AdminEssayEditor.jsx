import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import postsData from "../data/posts.json";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
const genres = ["خورشیدی", "برق", "تکنولوژی", "عمومی"];
const AdminAddArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editingPost, setEditingPost] = useState({
    id: "",
    title: "",
    content: "",
    img: "",
    author: "ادمین",
    genre: "",
    date: "",
  });
  useEffect(() => {
    const savedPosts =
      JSON.parse(localStorage.getItem("posts")) || postsData.posts;
    console.log(id);
    if (id) {
      const post = savedPosts.find((p) => p.id === Number(id));
      if (post) setEditingPost(post);
    }
  }, [id]);

  const handleSave = (e) => {
    e.preventDefault(); // ✅ Prevent page reload

    const savedPosts =
      JSON.parse(localStorage.getItem("posts")) || postsData.posts;

    if (!id) {
      const newPost = { ...editingPost, id: Date.now() };
      localStorage.setItem("posts", JSON.stringify([...savedPosts, newPost]));
    } else {
      const updatedPosts = savedPosts.map((p) =>
        p.id === editingPost.id ? editingPost : p
      );
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }

   navigate("/");
 };

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
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  return (
    <>
      <Navbar />

      <main className="main-bg">
        <div className="comments-from" style={{ padding: "20px" }}>
          <h1>{!id ? "افزودن مقاله" : "ویرایش مقاله"}</h1>
          <form
            onSubmit={handleSave}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input
              type="text"
              placeholder="عنوان مقاله"
              value={editingPost.title}
              onChange={(e) =>
                setEditingPost({ ...editingPost, title: e.target.value })
              }
              required
            />
            <input
              type="date"
              value={editingPost.date}
              onChange={(e) =>
                setEditingPost({ ...editingPost, date: e.target.value })
              }
            />
            <select
              value={editingPost.genre}
              onChange={(e) =>
                setEditingPost({ ...editingPost, genre: e.target.value })
              }
            >
              <option value="">انتخاب دسته‌بندی</option>
              {genres.map((g, index) => (
                <option key={index} value={g}>
                  {g}
                </option>
              ))}
            </select>

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
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={editingPost.content}
              onChange={(val) =>
                setEditingPost({ ...editingPost, content: val })
              }
              style={{ height: "200px", marginBottom: "20px" }}
            />

            <button
              className="mt-80"
              style={{
                background: "#ffaa17",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
              }}
              type="submit"
            >
              ذخیره مقاله
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AdminAddArticle;