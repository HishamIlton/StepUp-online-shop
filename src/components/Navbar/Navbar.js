import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const homeUrl = process.env.PUBLIC_URL || "";
  const links = [
    {
      label: "Home",
      href: `${homeUrl}/#home`,
    },
    {
      label: "Shop",
      href: `${homeUrl}/#shop`,
    },
    {
      label: "Collection",
      href: `${homeUrl}/#collection`,
    },
    {
      label: "Customize",
      href: `${homeUrl}/#customize`,
    },
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
    <header
      className={`navbar-wrapper ${isDashboardPage ? "dashboard-navbar" : ""}`}
    >
      <div className="container-fluid navbar-container">
        <Link className="navbar-logo" to="/" onClick={handleLinkClick}>
          StepUp
        </Link>

        <nav className={`navbar-links ${isMenuOpen ? "show-menu" : ""}`}>
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}

          <Link to="/dashboard" onClick={handleLinkClick}>
            Dashboard
          </Link>
        </nav>

        <div className="navbar-icons">
          <button type="button" aria-label="Search">
            <FiSearch />
          </button>

          <button type="button" aria-label="Cart">
            <FiShoppingCart />
          </button>

          <button type="button" className="menu-icon" onClick={handleMenuClick}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Navbar;