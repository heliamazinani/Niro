import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import shopData from "../data/shopData.json";

const SingleShop = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const sendWhatsApp = () => {
    const phoneNumber = "989155363273";
    const message = `سلام می خواهم این محصول را سفارش دهم : \n
 نام محصول: ${product.name}
 قیمت: ${product.price.toLocaleString()} تومان
 لینک: ${window.location.href}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank"); // Open in new tab
  };
  function formatPrice(price, locale = "en-US", currency = "USD") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0, // Ensures at least two decimal places
      maximumFractionDigits: 0, // Ensures at most two decimal places
    }).format(price);
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // ✅ Fetch single product
        const response = await fetch(
          `https://api.ecosunir.ir/api/Product/${id}`
        );
        const data = await response.json();

        if (response.ok) {
          setProduct(data);

          // ✅ Fetch all products to get related ones
          const relatedRes = await fetch(
            "https://api.ecosunir.ir/api/Product"
          );
          const allProducts = await relatedRes.json();

          if (relatedRes.ok) {
            const related = allProducts.filter(
              (item) => item.category === data.category && item.id !== data.id
            );
            setRelatedProducts(related);
          }
        } else {
          console.error("Invalid product response:", data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h3>در حال بارگذاری...</h3>
      </div>
    );
  }

  return (
    <>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg pt-80">
            <section className="product-details ">
              <div className="container ">
                <div className="row justify-content-center">
                  {/* Product Image */}
                  <div className="col-lg-4">
                    <img
                      src={`https://api.ecosunir.ir/api${product.img}`}
                      alt={product.name}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </div>
                  <div className="col-lg-6 offset-lg-1">
                    <div className="product-info">
                      <div className="top-info">
                        <h2 className="line-height-1"> {product.name}</h2>

                        <div className="d-flex align-items-center">
                          <div> </div>
                          <div className="ml-auto">
                            <div className="d-flex align-items-center"></div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-40">
                        <ul className="rest">
                          <li className="d-flex align-items-center mb-15">
                            <strong>کد محصول :</strong>
                            <span className="ml-10">{product.id}</span>
                          </li>
                          <li className="d-flex align-items-center mb-15">
                            <strong>دسته بندی :</strong>
                            <span className="ml-10">
                              <a href="#0">{product.category}</a>
                            </span>
                          </li>
                        </ul>
                        <div className="prod-order pt-30 pb-30 mt-50 bord-thin-top bord-thin-bottom">
                          <div className="d-flex align-items-center">
                            <div>
                              <h6 className="main-color4">
                                {" "}
                                {product.price
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                                تومان
                              </h6>
                              {/* <div className="counter">
                              <span
                                className="down"
                                onClick="decreaseCount(event, this)"
                              >
                                -
                              </span>
                              <input type="text" value="1" />
                              <span
                                className="up"
                                onClick="increaseCount(event, this)"
                              >
                                +
                              </span>
                            </div> */}
                            </div>
                            <div className="ml-auto">
                              <div
                                onClick={sendWhatsApp}
                                className="butn butn-md butn-bord"
                              >
                                <span className="text-u fz-13">
                                  اطلاعات بیشتر
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center mt-100">
                  <div className="col-lg-11">
                    <div className="overview" id="tabs">
                      <ul className="rest tab-links mb-30">
                        <li className="item-link current" data-tab="tabs-1">
                          <h6>توضیحات</h6>
                        </li>
                      </ul>
                      <div className="tab-cont">
                        <div className="tab-content current" id="tabs-1">
                          <div className="item">
                            <div className="text">
                              <div
                                className="post-content"
                                dangerouslySetInnerHTML={{
                                  __html: product.description,
                                }}
                              />
                              {/* <p>{product.description}</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <div className="row justify-content-center mt-100">
                  <div className="col-lg-11">
                    <div className="main-shop">
                      {relatedProducts.length > 0 && (
                        <div className="shop-products">
                          <div>
                            <h4>محصولات مرتبط</h4>
                          </div>
                          <div className="row">
                            {relatedProducts.map((item) => (
                              <div className="col-lg-3 col-md-6">
                                <div key={item.id}>
                                  <div className="item mt-50">
                                    <div className="img">
                                      <img
                                        src={`https://api.ecosunir.ir/api${item.img}`}
                                        alt={item.name}
                                        style={{ width: "100%" }}
                                      />
                                      <a href="#0" className="add-cart">
                                        اطلاعات بیشتر
                                      </a>
                                    </div>
                                    <Link to={`/shop/${item.id}`}>
                                      <div className="card-body">
                                        <h6>{item.name}</h6>
                                        <p>
                                          {product.price
                                            .toString()
                                            .replace(
                                              /\B(?=(\d{3})+(?!\d))/g,
                                              ","
                                            )}{" "}
                                          تومان
                                        </p>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SingleShop;
