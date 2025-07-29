import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import postsData from "../data/posts.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const AdminAddArticle = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    setPosts(savedPosts || postsData.posts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("عنوان و محتوا الزامی است.");
      return;
    }

    const newPost = {
      id: posts.length + 1,
      date: new Date().toLocaleDateString("fa-IR"),
      img: img || "/blogs/default.jpg",
      title,
      content, // This will be HTML from ReactQuill
      author: "ادمین",
      genre,
    };

    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    setTitle("");
    setImg("");
    setContent("");
    setGenre("");
    alert("مقاله ذخیره شد!");
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
      <Navbar></Navbar>

      <main className="main-bg">
        <div className="comments-from" style={{ padding: "20px" }}>
          <h2>افزودن مقاله جدید</h2>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input
              type="text"
              placeholder="عنوان مقاله"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="آدرس تصویر (اختیاری)"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <input
              type="text"
              placeholder="موضوع(خورشیدی)"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            />

            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={content}
              onChange={setContent}
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

      <Footer></Footer>
    </>
  );
};

export default AdminAddArticle;
