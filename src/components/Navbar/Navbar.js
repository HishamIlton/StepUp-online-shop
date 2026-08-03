import { useEffect, useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    "Home",
    "Shop",
    "Collection",
    "Customize",
    "Dashboard",
  ];

  function handleMenuClick() {
    if (window.innerWidth <= 991) {
      setIsMenuOpen((previousState) => !previousState);
    }
  }

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 991) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navbar-wrapper">
      <div className="container-fluid navbar-container">
        <a className="navbar-logo" href="#home">
          StepUp
        </a>

        <nav
          className={`navbar-links ${
            isMenuOpen ? "show-menu" : ""
          }`}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={handleLinkClick}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="navbar-icons">
          <button type="button" aria-label="Search">
            <FiSearch />
          </button>

          <button type="button" aria-label="Cart">
            <FiShoppingCart />
          </button>

          <button
            type="button"
            className="menu-icon"
            onClick={handleMenuClick}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;