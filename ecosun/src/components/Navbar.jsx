import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "/logo.svg";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setDropdownOpen(false); // close dropdown after click
  };

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
          onClick={() =>
            document
              .getElementById("navbarSupportedContent")
              ?.classList.toggle("show")
          }
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
                role="button"
                onClick={toggleDropdown}
              >
                درباره ما
              </div>

              {dropdownOpen && (
                <div className="dropdown-menu show">
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
                  {/* <div className="dropdown-item">
                    <Link to="/team" onClick={scrollToTop}>
                      مدیر عامل
                    </Link>
                  </div> */}
                </div>
              )}
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
