import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import customerOne from "../../assets/images/neymar.png";
import customerTwo from "../../assets/images/Undertaker.png";
import customerThree from "../../assets/images/hhh.png";
import customerFour from "../../assets/images/hamilton.png";

import "./CustomerReviews.css";

function CustomerReviews() {
  const [activePage, setActivePage] = useState(0);

  const reviewImages = [
    customerOne,
    customerTwo,
    customerThree,
    customerFour,
  ];

  const reviewsData = [
    {
      id: 1,
      name: "Neymar",
      feedback:
        "The shoes are very comfortable, stylish, and exactly as shown in the pictures.",
    },
    {
      id: 2,
      name: "The Undertaker",
      feedback:
        "Great quality and fast delivery. The size was perfect and I really liked the design.",
    },
    {
      id: 3,
      name: "Triple H",
      feedback:
        "I loved the material and the finishing. They feel comfortable even after wearing them all day.",
    },
    {
      id: 4,
      name: "L. Hamilton",
      feedback:
        "A very good shopping experience. The product arrived on time and was carefully packaged.",
    },
    {
      id: 5,
      name: "Neymar",
      feedback:
        "The color and design are beautiful, and the shoes are lighter and more comfortable than expected.",
    },
    {
      id: 6,
      name: "The Undertaker",
      feedback:
        "Excellent value for money. The quality is impressive and I would definitely order again.",
    },
    {
      id: 7,
      name: "Triple H",
      feedback:
        "The shoes matched my outfit perfectly and remained comfortable throughout the entire day.",
    },
    {
      id: 8,
      name: "L. Hamilton",
      feedback:
        "The product looks premium and fits perfectly. Customer service was also very helpful.",
    },
  ];

  const reviews = reviewsData.map((review, index) => ({
    ...review,
    image: reviewImages[index % reviewImages.length],
  }));

  const visibleReviews = reviews.slice(
    activePage * 2,
    activePage * 2 + 2
  );

  return (
    <section className="reviews-section">
      <div className="container-fluid reviews-container">
        <div className="reviews-heading d-flex align-items-center justify-content-center">
          <span />
          <h2>Customer Review</h2>
          <span />
        </div>

        <div
          key={activePage}
          className="row g-4 reviews-row"
        >
          {visibleReviews.map((review) => (
            <div
              className="col-12 col-lg-6"
              key={review.id}
            >
              <article className="review-card">
                <img
                  src={review.image}
                  alt={review.name}
                  className="review-image"
                />

                <div className="review-content">
                  <h3>{review.name}</h3>

                  <div
                    className="review-stars d-flex align-items-center"
                    aria-label="4.5 out of 5 stars"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>

                  <p>{review.feedback}</p>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="reviews-dots d-flex justify-content-center">
          {[0, 1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              className={`review-dot ${
                activePage === page
                  ? "review-dot-active"
                  : ""
              }`}
              onClick={() => setActivePage(page)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;