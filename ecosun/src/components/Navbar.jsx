import React, { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "/logo.svg";
const Navbar = () => {
  const preventClick = (e) => e.preventDefault();

  return (
    <nav className="navbar navbar-expand-lg static">
      <div className="container">
        <a className="logo icon-img-100" href="#" onClick={preventClick}>
          <img src={logo} alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={preventClick}
              >
                خانه
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                صفحات
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="">
                  درباره ما
                </a>
                <a className="dropdown-item" href="page-services.html">
                  خدمات
                </a>
                <a className="dropdown-item" href="page-career.html">
                  مشاغل
                </a>
                <a className="dropdown-item" href="page-single-service.html">
                  جزئیات خدمات
                </a>
                <a className="dropdown-item" href="page-FAQS.html">
                  سوالات متداول
                </a>
                <a className="dropdown-item" href="page-team.html">
                  تیم ما
                </a>
                <a className="dropdown-item" href="page-single-team.html">
                  جزئیات تیم
                </a>
                <a className="dropdown-item" href="page-Oops404.html">
                  ارور 404
                </a>
                <a className="dropdown-item" href="page-comingsoon.html">
                  به زودی
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                نمونه کار
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={preventClick}
              >
                وبلاگ
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={preventClick}
              >
                فروشگاه
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="page-contact.html">
                ارتباط با ما
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <ThemeToggle></ThemeToggle>
              </div>
            </li>
          </ul>
        </div>

        <div className="search-form">
          <div className="form-group">
            <input type="text" name="search" placeholder="جستوجو" />
            <button>
              <span className="pe-7s-search"></span>
            </button>
          </div>
          <div className="search-icon">
            <span className="pe-7s-search open-search"></span>
            <span className="pe-7s-close close-search"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
