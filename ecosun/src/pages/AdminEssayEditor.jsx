import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";

const genres = ["خورشیدی", "برق", "تکنولوژی", "عمومی"];

const AdminAddArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editingPost, setEditingPost] = useState({
    id: "",
    title: "",
    content: "",
    img: "", // server path to image
    image: "", // preview for new upload
    file: null, // actual uploaded file
    author: "ادمین",
    genre: "",
    date: "",
  });

  // ✅ Load post if editing
  useEffect(() => {
    const fetchPost = async () => {
      if (!id || id === "add") return;

      try {
        const response = await fetch(
          `https://api.ecosunir.ir/api/blog/${id}`
        );
        const post = await response.json();

        if (response.ok) {
          setEditingPost({
            id: post.id,
            title: post.title || "",
            content: post.content || "",
            img: post.img || "", // backend image path
            image: "", // no new image yet
            file: null, // no file yet
            author: post.author || "ادمین",
            genre: post.genre || "",
            date: post.date || "",
          });
        } else {
          console.error("Invalid post data", post);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchPost();
  }, [id]);

  // ✅ Handle file input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingPost((prev) => ({
          ...prev,
          image: reader.result, // preview
          file: file, // actual file to send
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Handle save
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const isEditing = !!(id && id !== "add");
      const url = isEditing
        ? `https://api.ecosunir.ir/api/blog/${id}`
        : `https://api.ecosunir.ir/api/blog`;

      const method = isEditing ? "PUT" : "POST";

      const formData = new FormData();
      formData.append("title", editingPost.title);
      formData.append("content", editingPost.content);
      formData.append("author", editingPost.author);
      formData.append("genre", editingPost.genre);
      formData.append("date", editingPost.date || new Date().toISOString());

      if (editingPost.file) {
        formData.append("image", editingPost.file);
      }

      const response = await fetch(url, {
        method,
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "خطا در ذخیره‌سازی مقاله");
      }

      alert(isEditing ? "مقاله ویرایش شد" : "مقاله جدید ذخیره شد");
      navigate("/dashboard/blogs");
    } catch (error) {
      console.error("Save error:", error);
      alert("خطا: " + error.message);
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
          <h1>{id && id !== "add" ? "ویرایش مقاله" : "افزودن مقاله"}</h1>

          <form
            onSubmit={handleSave}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
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

            {/* Image upload */}
            <div>
              <p>انتخاب تصویر:</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

              {/* show backend image if exists */}
              {editingPost.img && !editingPost.image && (
                <img
                  src={`https://api.ecosunir.ir/api${editingPost.img}`}
                  alt="Preview"
                  style={{ width: "200px", marginTop: "10px" }}
                />
              )}

              {/* show preview if new file selected */}
              {editingPost.image && (
                <img
                  src={editingPost.image}
                  alt="Preview"
                  style={{ width: "200px", marginTop: "10px" }}
                />
              )}
            </div>

            {/* Content editor */}
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
