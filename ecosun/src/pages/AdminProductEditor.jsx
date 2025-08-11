import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import shopData from "../data/shopData.json";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AdminProductEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editingProduct, setEditingProduct] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    img: "",
    description: "",
  });

  // Load product if editing
useEffect(() => {
  let savedProducts = [];
  try {
    savedProducts = JSON.parse(localStorage.getItem("products"));
  } catch (e) {
    console.error("Invalid localStorage data", e);
  }

  if (!savedProducts || savedProducts.length === 0) {
    savedProducts = shopData.products;
  }

  if (id) {
    const product = savedProducts.find((p) => p.id === Number(id));
    console.log("Editing product:", product);

    if (product) {
      setEditingProduct((prev) => ({
        ...prev,
        ...product,
      }));
    }
  }
}, [id]);

  const handleSave = (e) => {
    e.preventDefault();

    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || shopData.products;

    if (!id) {
      // Add new product
      const newProduct = { ...editingProduct, id: Date.now() };
      localStorage.setItem(
        "products",
        JSON.stringify([...savedProducts, newProduct])
      );
    } else {
      // Edit existing
      const updatedProducts = savedProducts.map((p) =>
        p.id === Number(id) ? editingProduct : p
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    }

    navigate("/dashboard"); // Back to dashboard
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingProduct({ ...editingProduct, img: reader.result });
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
          <h1>{id ? "ویرایش محصول" : "افزودن محصول"}</h1>
          <form
            onSubmit={handleSave}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {/* Product Name */}
            <input
              type="text"
              placeholder="نام محصول"
              value={editingProduct.name}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, name: e.target.value })
              }
              required
            />

            {/* Price */}
            <input
              type="number"
              placeholder="قیمت"
              value={editingProduct.price}
              onChange={(value) =>
                setEditingProduct({
                  ...editingProduct,
                  price: Number(value),
                })
              }
              required
            />

            {/* Category */}
            {/* <select
              value={editingProduct.category}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  category: e.target.value,
                })
              }
            >
              <option value="">انتخاب دسته‌بندی</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select> */}

         
            {/* Description */}
            <p>توضیحات محصول:</p>
            <ReactQuill
              theme="snow"
              value={editingProduct.description}
              onChange={(value) =>
                setEditingProduct({
                  ...editingProduct,
                  description: value, // HTML from Quill
                })
              }
              modules={modules}
              formats={formats}
            />

            {/* Image Upload */}
            <div>
              <p>انتخاب تصویر:</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {editingProduct.img && (
                <img
                  src={editingProduct.img}
                  alt="Preview"
                  style={{ width: "200px", marginTop: "10px" }}
                />
              )}
            </div>

            {/* Save Button */}
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
              ذخیره محصول
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AdminProductEditor;
