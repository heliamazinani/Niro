import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "/logo.svg";

function Navbar() {
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists on load
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);

 
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen((prev) => !prev);
    setProfileDropdownOpen(false); // Close the other
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen((prev) => !prev);
    setAboutDropdownOpen(false); // Close the other
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setAboutDropdownOpen(false);
    setProfileDropdownOpen(false);
    setMobileNavOpen(false);
  };

  const preventClick = (e) => e.preventDefault();
  useEffect(() => {
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    setSearchOpen(false);
    setAboutDropdownOpen(false);
    setProfileDropdownOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg static">
      <div className="container">
        <a className="logo icon-img-100" href="#" onClick={preventClick}>
          <img src={logo} alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileNavOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${
            mobileNavOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link">
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active-link" : ""}
                  onClick={scrollToTop}
                >
                  خانه
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <div
                className={location.pathname === "/about" ? "active-link" : ""}
              >
                <div
                  className="nav-link dropdown-toggle"
                  role="button"
                  onClick={toggleAboutDropdown}
                >
                  درباره ما
                </div>
              </div>

              {aboutDropdownOpen && (
                <div className="dropdown-menu show">
                  <div className="dropdown-item">
                    <Link
                      to="/about"
                      className={
                        location.pathname === "/about" ? "active-link" : ""
                      }
                      onClick={scrollToTop}
                    >
                      معرفی شرکت
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link
                      to="/team"
                      className={
                        location.pathname === "/team" ? "active-link" : ""
                      }
                      onClick={scrollToTop}
                    >
                      اعضای هیئت مدیره
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link
                      to="/team"
                      className={
                        location.pathname === "/team" ? "active-link" : ""
                      }
                      onClick={scrollToTop}
                    >
                      مدیر عامل
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li className="nav-item">
              <div className="nav-link">
                <Link
                  to="/blog"
                  className={location.pathname === "/blog" ? "active-link" : ""}
                  onClick={scrollToTop}
                >
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
            </li>

            <li className="nav-item">
              <div className="nav-link">
                <Link
                  to="/contact"
                  className={
                    location.pathname === "/contact" ? "active-link" : ""
                  }
                  onClick={scrollToTop}
                >
                  ارتباط با ما
                </Link>
              </div>
            </li>

            {!isLoggedIn ? (
              <li className="nav-item">
                <div className="nav-link">
                  <Link
                    to="/signup"
                    className={
                      location.pathname === "/signup" ? "active-link" : ""
                    }
                    onClick={scrollToTop}
                  >
                    ورود | عضویت
                  </Link>
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <div>
                    <div
                      className="nav-link dropdown-toggle"
                      role="button"
                      onClick={toggleProfileDropdown}
                    >
                      پرفایل
                    </div>
                  </div>

                  {profileDropdownOpen && (
                    <div className="dropdown-menu show">
                      <div className="dropdown-item">
                        <Link
                          to="/info"
                          className={
                            location.pathname === "/info" ? "active-link" : ""
                          }
                          onClick={scrollToTop}
                        >
                          اطلاعات من
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/info" onClick={scrollToTop}>
                          دوره های من
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link  onClick={handleLogout}>
                          خروج
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              </>
            )}
            <li className="nav-item">
              <div className="nav-link">
                <ThemeToggle />
              </div>
            </li>
          </ul>
        </div>

        <div className={`search-form ${searchOpen ? "open" : ""}`}>
          <div className="form-group">
            <input type="text" name="search" placeholder="جستوجو" />
            <button>
              <span className="pe-7s-search"></span>
            </button>
          </div>

          <div className="search-icon" onClick={toggleSearch}>
            <span className="pe-7s-search open-search"></span>
            <span
              className="pe-7s-close close-search"
              style={{ display: searchOpen ? "inline" : "none" }}
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
