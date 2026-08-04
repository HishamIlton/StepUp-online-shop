import Carousel from "react-bootstrap/Carousel";
import leftImage from "../../assets/images/left.png";
import centerImage from "../../assets/images/pink-shoe.png";
import rightImage from "../../assets/images/right.png";
import shoeOneImage from "../../assets/images/med1.png";
import shoeTwoImage from "../../assets/images/med2.png";
import shoeThreeImage from "../../assets/images/small3.png";

import "./PromoBanner.css";

function PromoBanner() {
  const slides = [
    {
      id: 1,
      image: leftImage,
      position: "left",
      color: "#0b0b0b",
      title: "Ready to move",
      secondTitle: "with confidence",
      description:
        "Comfortable sneakers designed for your everyday movement.",
    },
    {
      id: 2,
      image: centerImage,
      position: "center",
      color: "#ff8993",
      title: "Are you ready",
      secondTitle: "to lead the way",
      description:
        "Premium comfort and modern style made for every step.",
    },
    {
      id: 3,
      image: rightImage,
      position: "right",
      color: "#ab6b3d",
      title: "Step into style",
      secondTitle: "every single day",
      description:
        "Athletic footwear designed to combine style and performance.",
    },
  ];

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
        <Carousel
          className="promo-carousel"
          defaultActiveIndex={1}
          interval={null}
          controls
          indicators
          fade
        >
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <div
                className={`promo-banner promo-banner-${slide.position}`}
                style={{ "--slide-color": slide.color }}
              >
                <span
                  className="promo-background-text"
                  aria-hidden="true"
                >
                  StepUp
                </span>

                <div className="row h-100 align-items-center">
                  <div className="col-12 col-lg-6 promo-image-column">
                    <img
                      src={slide.image}
                      alt="Man wearing StepUp shoes"
                      className={`promo-main-image promo-main-image-${slide.position}`}
                    />
                  </div>

                  <div className="col-12 col-lg-6 promo-content-column">
                    <div className="promo-content">
                      <h2>
                        {slide.title}
                        <br />
                        {slide.secondTitle}
                      </h2>

                      <p>{slide.description}</p>

                      <button
                        type="button"
                        className="promo-explore-button"
                      >
                        Explore
                      </button>

                      <div className="promo-preview-list d-flex align-items-center">
                        {previewShoes.map((shoe) => (
                          <div
                            className="promo-preview-item"
                            key={shoe.id}
                          >
                            <img
                              src={shoe.image}
                              alt={shoe.name}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default PromoBanner;