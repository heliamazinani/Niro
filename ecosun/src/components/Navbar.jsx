import React, { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import logo from "/logo.svg";

function Navbar() {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown-toggle");

    const handleDropdownClick = function () {
      const dropdownMenu = this.nextElementSibling;
      if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
      }
    };

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", handleDropdownClick);
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("click", handleDropdownClick);
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
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/" onClick={scrollToTop}>
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
                <div className="dropdown-item">
                  <Link to="/about" onClick={scrollToTop}>
                    معرفی شرکت
                  </Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/team" onClick={scrollToTop}>
                    اعضای هیئت مدیره
                  </Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/calc" onClick={scrollToTop}>
                    محاسبه هیئت
                  </Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/team" onClick={scrollToTop}>
                    مدیر عامل
                  </Link>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <div className="nav-link">
                <Link to="/blog" onClick={scrollToTop}>
                  آموزش
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
                onClick={preventClick}
              >
                فروشگاه
              </div>
              {/* You can add a dropdown-menu for فروشگاه if needed */}
            </li>

            <li className="nav-item">
              <div className="nav-link">
                <Link to="/contact" onClick={scrollToTop}>
                  ارتباط با ما
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <div className="nav-link">
                <Link to="/signup" onClick={scrollToTop}>
                  ورود | عضویت
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <div className="nav-link">
                <ThemeToggle />
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
}

export default Navbar;
