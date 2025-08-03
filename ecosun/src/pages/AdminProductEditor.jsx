import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import shopData from "../data/shopData.json";

const AdminProductEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editingProduct, setEditingProduct] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    rating: 0,
    img: "",
    description: "",
  });

  // Load product if editing
  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || shopData.products;

    if (id) {
      const product = savedProducts.find((p) => p.id === Number(id));
      if (product) setEditingProduct(product);
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
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  price: Number(e.target.value),
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

            {/* Rating */}
            <input
              type="number"
              placeholder="امتیاز (1 تا 5)"
              min="1"
              max="5"
              value={editingProduct.rating}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  rating: Number(e.target.value),
                })
              }
            />

            {/* Description */}
            <textarea
              placeholder="توضیحات محصول"
              rows="4"
              value={editingProduct.description}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  description: e.target.value,
                })
              }
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
