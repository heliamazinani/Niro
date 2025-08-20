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
    if (!shopData || !shopData.products) return;

    const selected = shopData.products.find((item) => item.id === Number(id));
    setProduct(selected);

    if (selected) {
      const related = shopData.products.filter(
        (item) => item.category === selected.category && item.id !== selected.id
      );
      setRelatedProducts(related);
    }
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
            <section className="product-details section-padding">
              <div className="container ">
                <div className="row justify-content-center">
                  {/* Product Image */}
                  <div className="col-lg-4">
                    <img
                      src={`${product.img}`}
                      alt={product.name}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </div>
                  <div className="col-lg-6 offset-lg-1">
                    <div className="product-info">
                      <div className="top-info">
                        <h6 className="main-color4">
                          {" "}
                          {product.price.toLocaleString()} تومان
                        </h6>
                        <div className="d-flex align-items-center">
                          <div>
                            <h4 className="line-height-1"> {product.name}</h4>
                          </div>
                          <div className="ml-auto">
                            <div className="d-flex align-items-center"></div>
                          </div>
                        </div>
                        <div className="text mt-30">
                          <div
                            className="post-content"
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                          />
                          <p>{product.description}</p>
                        </div>
                        <div className="dot-list mt-30">
                          <ul className="rest">
                            <li className="mb-15">برج های قابل تنظیم در هود</li>
                            <li>جیب های جیب در کمر</li>
                          </ul>
                        </div>
                      </div>
                      <div className="prod-order pt-30 pb-30 mt-50 bord-thin-top bord-thin-bottom">
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="counter">
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
                            </div>
                          </div>
                          <div className="ml-auto">
                            <a href="#0" className="butn butn-md butn-bord">
                              <span className="text-u fz-13">
                                اضافه به سبد خرید
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-40">
                        <ul className="rest">
                          <li className="d-flex align-items-center mb-15">
                            <strong>کد محصول :</strong>
                            <span className="ml-10">8552635</span>
                          </li>
                          <li className="d-flex align-items-center mb-15">
                            <strong>دسته بندی :</strong>
                            <span className="ml-10">
                              <a href="#0">لباس</a>
                            </span>
                          </li>
                          <li className="d-flex align-items-center">
                            <strong>تگ :</strong>
                            <span className="ml-10">
                              <a href="#0">مردانه</a> , <a href="#0">زنانه</a> ,
                              <a href="#0">ژاکت</a>
                            </span>
                          </li>
                        </ul>
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
                              <p className="mb-15">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است، و برای شرایط فعلی
                                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                                بهبود{" "}
                              </p>
                              <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است، و برای شرایط فعلی
                                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                                بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                                شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                                جامعه و متخصصان را می طلبد، تا با{" "}
                              </p>
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
                                        src={`${item.img}`}
                                        alt={item.name}
                                        style={{ width: "100%" }}
                                      />
                                      <a href="#0" className="add-cart">
                                        اضافه به سبد خرید
                                      </a>
                                    </div>
                                    <Link to={`/shop/${item.id}`}>
                                      <div className="card-body">
                                        <h6>{item.name}</h6>
                                        <p>
                                          {item.price.toLocaleString()} تومان
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
