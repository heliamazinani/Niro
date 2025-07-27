import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import shopData from "../data/shopData.json";

const SingleShop = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const selected = shopData.find((item) => item.id === Number(id));
    setProduct(selected);

    const related = shopData.filter(
      (item) => item.category === selected?.category && item.id !== selected?.id
    );
    setRelatedProducts(related);
  }, [id]);

  if (!product) return <p>در حال بارگذاری...</p>;

  return (
    <>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <section className="product-details section-padding">
              <div className="container">
                <div className="row justify-content-center">
                  {/* Product Images */}
                  <div className="col-lg-4">
                    <div className="img-preview md-mb50">
                      <div className="gallery-top">
                        <div className="swiper-container">
                          <div className="swiper-wrapper">
                            {/* {product.relatedImages.map((img, i) => (
                              <div className="swiper-slide" key={i}>
                                <div className="img">
                                  <img src={img} alt={product.name} />
                                </div>
                              </div>
                            ))} */}
                          </div>
                        </div>
                      </div>
                      {/* Thumbnail Gallery */}
                      <div className="gallery-thumb mt-10">
                        <div className="swiper-container">
                          <div className="swiper-wrapper">
                            {/* {product.relatedImages.map((img, i) => (
                              <div className="swiper-slide" key={i}>
                                <div className="img">
                                  <img src={img} alt={product.name} />
                                </div>
                              </div>
                            ))} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="col-lg-6 offset-lg-1">
                    <div className="product-info">
                      <div className="top-info">
                        <h6 className="main-color4">
                          {product.price.toLocaleString()} تومان
                        </h6>
                        <div className="d-flex align-items-center">
                          <h4>{product.name}</h4>
                          <div className="ml-auto rate">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <i
                                key={i}
                                className={
                                  i < product.rating
                                    ? "fas fa-star"
                                    : "far fa-star"
                                }
                              ></i>
                            ))}
                          </div>
                        </div>
                        <div className="text mt-30">
                          <p>{product.description}</p>
                        </div>

                        {/* Tags */}
                        <div className="dot-list mt-30">
                          <ul className="rest">
                            {product.tags.map((tag, i) => (
                              <li key={i}>{tag}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="prod-order pt-30 pb-30 mt-50 bord-thin-top bord-thin-bottom">
                        <div className="d-flex align-items-center">
                          <div className="counter">
                            <span>-</span>
                            <input type="text" value="1" readOnly />
                            <span>+</span>
                          </div>
                          <div className="ml-auto">
                            <button className="butn butn-md butn-bord">
                              اضافه به سبد خرید
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-40">
                        <ul className="rest">
                          <li>
                            <strong>دسته بندی:</strong> {product.category}
                          </li>
                          <li>
                            <strong>تگ ها:</strong>{" "}
                            {product.tags.map((tag, i) => (
                              <span key={i}>
                                {tag}
                                {i < product.tags.length - 1 && ", "}
                              </span>
                            ))}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <div className="row justify-content-center mt-100">
                  <div className="col-lg-11">
                    <h4>محصولات مرتبط</h4>
                    <div className="row">
                      {relatedProducts.map((item) => (
                        <div className="col-lg-3 col-md-6" key={item.id}>
                          <div className="item mt-50">
                            <div className="img">
                              <img src={item.image} alt={item.name} />
                              <Link
                                to={`/shop/${item.id}`}
                                className="add-cart"
                              >
                                مشاهده محصول
                              </Link>
                            </div>
                            <div className="cont">
                              <div className="rate">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <i
                                    key={i}
                                    className={
                                      i < item.rating
                                        ? "fas fa-star"
                                        : "far fa-star"
                                    }
                                  ></i>
                                ))}
                              </div>
                              <h6>{item.name}</h6>
                              <h5>{item.price.toLocaleString()} تومان</h5>
                            </div>
                          </div>
                        </div>
                      ))}
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
