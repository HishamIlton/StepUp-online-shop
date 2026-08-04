import { useEffect, useState } from "react";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";

import { getProducts } from "../../services/productsApi";

import "./BestSelling.css";

function BestSelling() {
  const [activeCategory, setActiveCategory] = useState("man");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = [
    { id: "man", label: "Man" },
    { id: "woman", label: "Woman" },
    { id: "boy", label: "Boy" },
    { id: "girl", label: "Girl" },
  ];

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        setError("");

        const productsData = await getProducts();

        const sortedProducts = [...productsData].sort(
          (firstProduct, secondProduct) =>
            Number(firstProduct.id) -
            Number(secondProduct.id)
        );

        setProducts(sortedProducts);
      } catch (error) {
        console.error(error);
        setError("Failed to load products.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const visibleProducts = products
    .filter(
      (product) =>
        product.category?.toLowerCase() === activeCategory
    )
    .slice(0, 6);

  function getProductImage(imageName) {
    return `${process.env.PUBLIC_URL}/productImages/${imageName}`;
  }

  return (
    <section
      className="best-selling-section"
      id="collection"
    >
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
                activeCategory === category.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category.id)
              }
            >
              {category.label}
            </button>
          ))}
        </div>

        {isLoading && (
          <p className="best-products-message">
            Loading products...
          </p>
        )}

        {error && (
          <p className="best-products-message best-products-error">
            {error}
          </p>
        )}

        {!isLoading &&
          !error &&
          visibleProducts.length === 0 && (
            <p className="best-products-message">
              No products in this category.
            </p>
          )}

        {!isLoading && !error && (
          <div
            key={activeCategory}
            className="row g-4 justify-content-center best-products-grid"
          >
            {visibleProducts.map((product) => (
              <div
                className="col-12 col-md-6 col-lg-4 best-product-column"
                key={product.id}
              >
                <article className="best-product-card h-100">
                  <span className="best-new-label">
                    New
                  </span>

                  <button
                    type="button"
                    className="best-favorite-button"
                    aria-label={`Add ${product.name} to favorites`}
                  >
                    <FiHeart />
                  </button>

                  <div className="best-product-image-wrapper d-flex align-items-center justify-content-center">
                    <img
                      src={getProductImage(product.image)}
                      alt={product.name}
                      className="best-product-image img-fluid"
                    />
                  </div>

                  <div className="best-product-content">
                    <h3>{product.name}</h3>

                    <div className="best-product-bottom d-flex align-items-center justify-content-between">
                      <span className="best-current-price">
                        ₹ {product.price}
                      </span>

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
        )}
      </div>
    </section>
  );
}

export default BestSelling;