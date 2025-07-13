import React, { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import logo from "/logo.svg";
function Navbar() {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown-toggle");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", function () {
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle("show");
      });
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("click", function () {
          const dropdownMenu = this.nextElementSibling;
          dropdownMenu.classList.toggle("show");
        });
      });
    };
  }, []);


  const preventClick = (e) => e.preventDefault();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <li className="nav-item ">
              <div className="nav-link">
                <Link to="/" smooth={true} duration={500} onClick={scrollToTop}>
                  خانه
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                درباره ما
              </div>

              <div className="dropdown-menu">
                <a className="dropdown-item" href="">
                  <Link
                    to="/about"
                    smooth={true}
                    duration={500}
                    onClick={scrollToTop}
                  >
                    معرفی شرکت
                  </Link>
                </a>
                <div className="dropdown-item">
                  <Link
                    to="/team"
                    smooth={true}
                    duration={500}
                    onClick={scrollToTop}
                  >
                    اعضای هیئت مدیره
                  </Link>
                </div>
                <div className="dropdown-item">
                  <Link
                    to="/team"
                    smooth={true}
                    duration={500}
                    onClick={scrollToTop}
                  >
                    مدیر عامل
                  </Link>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <div className="nav-link">
                <Link
                  to="/blog"
                  smooth={true}
                  duration={500}
                  onClick={scrollToTop}
                >
                  آموزش
                </Link>
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
                onClick={preventClick}
              >
                فروشگاه
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link
                  to="/contact"
                  smooth={true}
                  duration={500}
                  onClick={scrollToTop}
                >
                  ارتباط با ما
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <div className="nav-link">
                <Link
                  to="/signup"
                  smooth={true}
                  duration={500}
                  onClick={scrollToTop}
                >
                  ورود | عضویت
                </Link>
              </div>
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
