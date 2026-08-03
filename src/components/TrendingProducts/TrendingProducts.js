import { useState } from "react";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import smallOneImage from "../../assets/images/small1.png";
import productOneImage from "../../assets/images/med1.png";
import productTwoImage from "../../assets/images/med2.png";
import productThreeImage from "../../assets/images/med3.png";
import smallTwoImage from "../../assets/images/small2.png";

import "./TrendingProducts.css";

function TrendingProducts() {
  const [currentPosition, setCurrentPosition] = useState(1);

  const products = [
    {
      id: 1,
      name: "Running sport shoe",
      price: "3999.00",
      image: smallOneImage,
    },
    {
      id: 2,
      name: "Running sport shoe",
      price: "3999.00",
      image: productOneImage,
    },
    {
      id: 3,
      name: "Running sport shoe",
      price: "3999.00",
      image: productTwoImage,
    },
    {
      id: 4,
      name: "Running sport shoe",
      price: "3999.00",
      image: productThreeImage,
    },
    {
      id: 5,
      name: "Running sport shoe",
      price: "3999.00",
      image: smallTwoImage,
    },
  ];

  const visibleProducts = products.slice(
    currentPosition,
    currentPosition + 3
  );
  
// Max function to avoid going to id zero, Min to avoid exceeding last product.
  function handlePrevious() {
    setCurrentPosition((previousPosition) =>
      Math.max(previousPosition - 1, 0)
    );
  }

  function handleNext() {
    setCurrentPosition((previousPosition) =>
      Math.min(previousPosition + 1, 2)
    );
  }

  return (
    <section className="trending-products-section">
      <div className="container-fluid trending-products-container">
        <div className="row align-items-center g-5">

          <div className="col-12 col-lg-3">
            <div className="trending-products-intro">
              <div className="trending-small-title d-flex align-items-center">
                <span className="trending-title-line" />
                <span>Our Trending Shoe</span>
                <span className="trending-title-line d-block d-lg-none" />
              </div>

              <h2>
                Most Popular
                <br />
                Products
              </h2>

              <p>
                Lorem Ipsum Dolor Sit Amet,
                <br />
                Consectetur Adipiscing Elit,
              </p>

              <button
                type="button"
                className="trending-explore-button"
              >
                Explore
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-9">
            <div className="trending-products-wrapper">
              <button
                type="button"
                className="trending-arrow trending-arrow-left"
                onClick={handlePrevious}
                disabled={currentPosition === 0}
                aria-label="Previous products"
              >
                <FiChevronLeft />
              </button>

              <div className="row g-4">
                {visibleProducts.map((product) => (
                  <div
                    className="col-12 col-md-4 trending-product-column"
                    key={product.id}
                  >
                    <article className="trending-product-card h-100">
                      <div className="trending-product-image-wrapper d-flex align-items-center justify-content-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="trending-product-image img-fluid"
                        />
                      </div>

                      <div className="trending-product-content">
                        <h3>{product.name}</h3>

                        <div className="d-flex align-items-center justify-content-between">
                          <p className="mb-0">
                            ₹ {product.price}
                          </p>

                          <button
                            type="button"
                            className="trending-product-open-button d-flex align-items-center justify-content-center"
                            aria-label={`View ${product.name}`}
                          >
                            <FiArrowUpRight />
                          </button>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="trending-arrow trending-arrow-right"
                onClick={handleNext}
                disabled={currentPosition === 2}
                aria-label="Next products"
              >
                <FiChevronRight />
              </button>

              <div className="trending-products-dots d-flex align-items-center justify-content-center">
                {[0, 1, 2].map((position) => (
                  <button
                    key={position}
                    type="button"
                    className={`trending-dot ${
                      currentPosition === position
                        ? "trending-dot-active"
                        : ""
                    }`}
                    onClick={() => setCurrentPosition(position)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingProducts;