import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import legsImage from "../../assets/images/pink-shoe.png";
import shoeOneImage from "../../assets/images/med1.png";
import shoeTwoImage from "../../assets/images/med2.png";
import shoeThreeImage from "../../assets/images/small3.png";

import "./PromoBanner.css";

function PromoBanner() {
  const previewShoes = [
    {
      id: 1,
      image: shoeOneImage,
      name: "Grey sport shoe",
    },
    {
      id: 2,
      image: shoeTwoImage,
      name: "Colorful sport shoe",
    },
    {
      id: 3,
      image: shoeThreeImage,
      name: "Pink sport shoe",
    },
  ];

  return (
    <section className="promo-section">
      <div className="container-fluid promo-container">
        <div className="promo-banner">
          <span className="promo-background-text" aria-hidden="true">
            StepUp
          </span>

          <button
            type="button"
            className="promo-arrow promo-arrow-left"
            aria-label="Previous promotion"
          >
            <FiChevronLeft />
          </button>

          <div className="row h-100 align-items-center position-relative">
            <div className="col-12 col-lg-6 promo-image-column">
              <img
                src={legsImage}
                alt="Person wearing StepUp shoes"
                className="promo-main-image img-fluid"
              />
            </div>

            <div className="col-12 col-lg-6">
              <div className="promo-content">
                <h2>
                  Are you ready
                  <br />
                  to lead the way
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit, sed do.
                </p>

                <button type="button" className="promo-explore-button">
                  Explore
                </button>

                <div className="promo-preview-list d-flex align-items-center">
                  {previewShoes.map((shoe) => (
                    <div className="promo-preview-item" key={shoe.id}>
                      <img src={shoe.image} alt={shoe.name} />
                    </div>
                  ))}
                </div>

                <div className="promo-dots d-flex align-items-center justify-content-center">
                  <span className="promo-dot" />
                  <span className="promo-dot promo-dot-active" />
                  <span className="promo-dot" />
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="promo-arrow promo-arrow-right"
            aria-label="Next promotion"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;