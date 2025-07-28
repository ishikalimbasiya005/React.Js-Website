import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Style.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
      if (window.innerWidth >= 1200) {
        setIsMenuOpen(true); // Always show menu on desktop
      } else {
        setIsMenuOpen(false); // Hide menu on mobile by default
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    if (!isDesktop) {
      setIsMenuOpen((prev) => !prev);
    }
  };

  return (
    <>
      <div className="main-header">
        {/* start header top block */}
        <div className="header-top">
          <div className="container">
            <div className="header-row">
              <div className="header-col">
                <p>Welcome - Sign Up Now &amp; Get 25% Off</p>
              </div>
              <div className="header-col">
                <a href="#">Call The Expert - (123)456-7890</a>
              </div>
            </div>
          </div>
        </div>
        {/* end header top block */}

        {/* start header bottom block */}
        <div className="header-bottom">
          <div className="container">
            <div className="header-inner">
              {/* start logo */}
              <div className="header-img">
                <img
                  src="Website/assets/etrend-smartwatch-logo-1629718731.png"
                  alt="etrend-smartwatch-logo"
                />
              </div>
              {/* end logo */}

              {/* icon start */}
              <div className="header-icon">
                <div className="icon-1">
                  <a href="#">
                    <i className="fa-solid fa-user" />
                  </a>
                </div>
                <div className="icon-1">
                  <a href="#">
                    <i className="fa-solid fa-magnifying-glass" />
                  </a>
                </div>
                <div className="icon-1">
                  <a href="#">
                    <i className="fa-solid fa-cart-shopping" />
                  </a>
                </div>
              </div>
              {/* icon end */}

              {/* Hamburger icon */}
              <div className="hamburger" onClick={toggleMenu}></div>

              <ul className={`header-menu ${isMenuOpen ? "open" : ""}`}>
                <Link to="/" className="home1">
                  Home
                </Link>
                <li>
                  <a href="#">
                    <div className="angle">Shop</div>
                  </a>
                  <ul className="sub-menu-2">
                    <li>
                      <a href="#">
                        <div className="angle-2"> Fashion</div>
                      </a>
                      <ul className="sub-menu-3">
                        <li>
                          <a href="#">Men</a>
                        </li>
                        <li>
                          <a href="#">Women</a>
                        </li>
                        <li>
                          <a href="#">Kids</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <div className="angle-2">Jewellery</div>
                      </a>
                      <ul className="sub-menu-3">
                        <li>
                          <a href="#">Ring</a>
                        </li>
                        <li>
                          <a href="#">Bracelets</a>
                        </li>
                        <li>
                          <a href="#">Necklaces</a>
                        </li>
                        <li>
                          <a href="#">Wedding Brands</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <div className="angle-2">Furniture</div>
                      </a>
                      <ul className="sub-menu-3">
                        <li>
                          <a href="#">Living Room</a>
                        </li>
                        <li>
                          <a href="#">Kitchen</a>
                        </li>
                        <li>
                          <a href="#">Office</a>
                        </li>
                        <li>
                          <a href="#">Home Decor</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <div className="angle-2">Autoparts</div>
                      </a>
                      <ul className="sub-menu-3">
                        <li>
                          <a href="#">Engine Parts</a>
                        </li>
                        <li>
                          <a href="#">Exhaust parts</a>
                        </li>
                        <li>
                          <a href="#">Brake Parts</a>
                        </li>
                        <li>
                          <a href="#">Body Parts</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <div className="angle"> Furniture</div>
                  </a>
                  <ul className="sub-menu-2">
                    <li>
                      <a href="#">Living Room</a>
                    </li>
                    <li>
                      <a href="#">Kitchen</a>
                    </li>
                    <li>
                      <a href="#">Office</a>
                    </li>
                    <li>
                      <a href="#">Home Decor</a>
                    </li>
                  </ul>
                </li>
                <Link to="/House1" className="Sale">
                  Sale
                </Link>
                <Link to="/House2" className="contect">
                  Contect Us
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* end header botoom block */}
      </div>
    </>
  );
};

export default Header;
