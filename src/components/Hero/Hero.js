import shoesImage from "../../assets/images/hero-shoes.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-left">
        <h1 className="hero-title">
          Find Your
          <br />
          Sole Mate
          <br />
          With Us
        </h1>

        <p className="hero-description">
          Lorem Ipsum Dolor Sit Amet, Consectetur
          <br />
          Adipiscing Elit, Sed Do Eiusmod.
        </p>

        <button className="shop-button" type="button">
          Shop Now
        </button>
      </div>

      <div className="hero-right">
        <span className="ultimate-text" aria-hidden="true">
          ULTIMATE
        </span>

        <div className="hero-circles" aria-hidden="true">
          <span className="hero-circle circle-top-left" />
          <span className="hero-circle circle-right" />
          <span className="hero-circle circle-bottom" />
        </div>

        <div className="product-area">
          <img src={shoesImage} alt="White shoes" className="product-image" />
        </div>

        <div className="product-info">
          <h2>Trendy StepUp Pro</h2>
          <p>₹ 3999.00</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
