import React, { useEffect, useState } from "react";
import shopData from "../data/shopData.json";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]); // min & max price
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    setProducts(shopData.products);
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
                  <div class="form-group">
                    <input
                      type="text"
                      className="shop_search"
                      placeholder="جستجو..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                      <span class="pe-7s-search"></span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Price Range */}
              <div className="item price-range mb-40">
                <h6>فیلتر قیمت</h6>

                <div class="range-input">
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    value={priceRange[1]}
                    style={{
                      "--progress": `${(priceRange[1] / 1000000) * 100}%`,
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
                    <div className="item mb-50">
                      <div className="img">
                        <img src={product.img} alt={product.name} />
                        <a href="#0" className="add-cart">
                          اضافه به سبد خرید
                        </a>
                      </div>
                      <div className="cont">
                        <div className="rate">
                          {Array(product.rating)
                            .fill()
                            .map((_, i) => (
                              <i key={i} className="fas fa-star"></i>
                            ))}
                        </div>
                        <h6>{product.name}</h6>
                        <h5>{product.price.toLocaleString()} تومان</h5>
                      </div>
                    </div>
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
