import { useState } from "react";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";

import shoeOne from "../../assets/images/shoes2.png";
import shoeTwo from "../../assets/images/shoes3.png";
import shoeThree from "../../assets/images/shoes4.png";
import shoeFour from "../../assets/images/shoes5.png";
import shoeFive from "../../assets/images/shoes6.png";
import shoeSix from "../../assets/images/shoes7.png";

import "./BestSelling.css";

function BestSelling() {
  const [activeCategory, setActiveCategory] = useState("man");

  const categories = [
    { id: "man", label: "Man" },
    { id: "woman", label: "Woman" },
    { id: "boy", label: "Boy" },
    { id: "child", label: "Child" },
  ];

  const products = [
    {
      id: 1,
      name: "Slick formal sneaker shoe",
      price: "2999.00",
      oldPrice: "4999.00",
      image: shoeOne,
    },
    {
      id: 2,
      name: "Slick casual sneaker shoe",
      price: "3999.00",
      oldPrice: "4999.00",
      image: shoeTwo,
    },
    {
      id: 3,
      name: "Slick sneaker shoe",
      price: "2499.00",
      oldPrice: "4999.00",
      image: shoeThree,
    },
    {
      id: 4,
      name: "Slick sneaker shoe",
      price: "2999.00",
      oldPrice: "4999.00",
      image: shoeFour,
    },
    {
      id: 5,
      name: "Slick trendy sneaker shoe",
      price: "2799.00",
      oldPrice: "4999.00",
      image: shoeFive,
    },
    {
      id: 6,
      name: "Slick canvas shoe",
      price: "1999.00",
      oldPrice: "4999.00",
      image: shoeSix,
    },
  ];

  // Group products by category
  const productsByCategory = {
    man: products,
    woman: products,
    boy: products,
    child: products,
  };

  const visibleProducts = productsByCategory[activeCategory];

  return (
    <section className="best-selling-section">
      <div className="container-fluid best-selling-container">
        <div className="best-selling-heading d-flex align-items-center justify-content-center">
          <span />
          <h2>Best Selling</h2>
          <span />
        </div>

        <div className="best-selling-categories d-flex flex-wrap justify-content-center">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`best-category-button ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div
          key={activeCategory}
          className="row g-4 best-products-grid"
        >
          {visibleProducts.map((product) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={product.id}
            >
              <article className="best-product-card h-100">
                <span className="best-new-label">New</span>

                <button
                  type="button"
                  className="best-favorite-button"
                  aria-label={`Add ${product.name} to favorites`}
                >
                  <FiHeart />
                </button>

                <div className="best-product-image-wrapper d-flex align-items-center justify-content-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="best-product-image img-fluid"
                  />
                </div>

                <div className="best-product-content">
                  <h3>{product.name}</h3>

                  <div className="best-product-bottom d-flex align-items-center justify-content-between">
                    <div className="best-product-prices d-flex align-items-center">
                      <span className="best-current-price">
                        ₹ {product.price}
                      </span>

                      <del className="best-old-price">
                        ₹ {product.oldPrice}
                      </del>
                    </div>

                    <button
                      type="button"
                      className="best-open-button d-flex align-items-center justify-content-center"
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
      </div>
    </section>
  );
}

export default BestSelling;