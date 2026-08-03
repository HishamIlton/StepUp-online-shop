import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <footer className="footer-section">
      <div className="container-fluid footer-container">
        <div className="row gy-5 justify-content-between">

          <div className="col-12 col-md-6 col-lg-4">
            <div className="footer-brand">
              <h2>StepUp</h2>
              <p>
                Find comfortable and stylish shoes designed for every step of
                your day.
              </p>
              <div className="footer-socials d-flex align-items-center">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>


          <div className="col-12 col-md-6 col-lg-5">
            <div className="footer-subscribe">
              <h3>Subscribe for newsletter</h3>

              <form
                className="footer-subscribe-form d-flex align-items-center"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Enter Email..."
                  aria-label="Email address"
                  required
                />

                <span className="footer-form-divider" />

                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-2">
            <div className="footer-links">
              <h3>Quick Links</h3>
              <nav>
                <a href="#home">Home</a>
                <a href="#shop">Shop</a>
                <a href="#category">Category</a>
                <a href="#contact">Contact</a>
                <a href="#privacy">Privacy</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-bottom-line" />

          <p>www.stepup.com © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;