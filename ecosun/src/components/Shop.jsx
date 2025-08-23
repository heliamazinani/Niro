import React, { useEffect, useState } from "react";
import shopData from "../data/shopData.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000000]); // min & max price
  const [sortOption, setSortOption] = useState("default");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://api.ecosunir.ir:3000/api/Product");
        const data = await response.json();

        if (response.ok) {
          setProducts(data); // assuming backend returns an array of products
        } else {
          console.error("Invalid products response:", data);
          // fallback to local data if backend fails
          setProducts(shopData.products);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchProducts();
  }, []);
  const filteredProducts = products
    .filter((p) => p.name.includes(searchTerm))
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <section className="main-shop section-padding">
      <div className="container">
        <div className="row md-marg">
          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="sidebar md-mb80">
              {/* Search */}
              <div className="item search mb-30">
                <form action="#">
                  <div className="form-group">
                    <input
                      type="text"
                      className="shop_search"
                      placeholder="جستجو..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                      <span className="pe-7s-search"></span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Price Range */}
              <div className="item price-range mb-40">
                <h6>فیلتر قیمت</h6>

                <div className="range-input">
                  <input
                    type="range"
                    min="0"
                    max="100000000"
                    value={priceRange[1]}
                    style={{
                      "--progress": `${(priceRange[1] / 100000000) * 100}%`,
                    }}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  />
                </div>
                <p>تا: {priceRange[1].toLocaleString()} تومان</p>
              </div>

              {/* Sort */}
              <div className="item mb-30">
                <h6>مرتب سازی</h6>

                <div style={{ position: "relative", width: "200px" }}>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 40px 10px 10px",
                      fontSize: "16px",
                      color: "gray",
                      background: "transparent",
                      border: "1px solid #ccc",

                      borderRadius: "8px",
                      outline: "none",
                      appearance: "none",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      cursor: "pointer",
                    }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                  >
                    <option value="default">پیش‌فرض</option>
                    <option value="price-asc">قیمت (کم به زیاد)</option>
                    <option value="price-desc">قیمت (زیاد به کم)</option>
                    <option value="rating">بیشترین امتیاز</option>
                  </select>

                  {/* Custom Arrow */}
                  <span
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                      fontSize: "14px",
                      color: "#555",
                    }}
                  >
                    ▼
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="col-lg-9">
            <div className="shop-products">
              <div className="row">
                {filteredProducts.map((product) => (
                  <div className="col-md-6 col-lg-4" key={product.id}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1, y: -50 }}
                      transition={{ duration: 0.8, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="item mb-50">
                        <Link to={`/shop/${product.id}`}>
                          <div className="img">
                            <Link to={`/shop/${product.id}`}>
                              <img
                                src={`http://api.ecosunir.ir:3000/api${product.img}`}
                                alt={product.name}
                              />
                            </Link>
                            <a href="#0" className="add-cart">
                              اطلاعات بیشتر
                            </a>
                          </div>
                          <div className="cont">
                            <Link to={`/shop/${product.id}`}>
                              <h6>{product.name}</h6>
                              <h5>
                                {" "}
                                {product.price
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                                تومان
                              </h5>
                            </Link>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                ))}

                {filteredProducts.length === 0 && (
                  <p className="text-center w-100">محصولی یافت نشد</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
