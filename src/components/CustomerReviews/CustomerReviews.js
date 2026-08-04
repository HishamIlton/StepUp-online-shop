import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import customerOne from "../../assets/images/neymar.png";
import customerTwo from "../../assets/images/Undertaker.png";
import customerThree from "../../assets/images/hhh.png";
import customerFour from "../../assets/images/hamilton.png";
import customerFive from "../../assets/images/messi.png";
import customerSix from "../../assets/images/mike.png";

import "./CustomerReviews.css";

function CustomerReviews() {
  const [activePage, setActivePage] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Neymar",
      image: customerOne,
      feedback:
        "The shoes are very comfortable, stylish, and exactly as shown in the pictures.",
    },
    {
      id: 2,
      name: "The Undertaker",
      image: customerTwo,
      feedback:
        "Great quality and fast delivery. The size was perfect and I really liked the design.",
    },
    {
      id: 3,
      name: "Triple H",
      image: customerThree,
      feedback:
        "I loved the material and finishing. They feel comfortable even after wearing them all day.",
    },
    {
      id: 4,
      name: "L. Hamilton",
      image: customerFour,
      feedback:
        "A very good shopping experience. The product arrived on time and was carefully packaged.",
    },
    {
      id: 5,
      name: "Lionel Messi",
      image: customerFive,
      feedback:
        "The product looks premium, feels lightweight, and provides excellent comfort while walking.",
    },
    {
      id: 6,
      name: "Mike",
      image: customerSix,
      feedback:
        "Excellent value for money. The quality is impressive and I would definitely order again.",
    },
  ];

  const reviewsPerPage = 2;

  const totalPages = Math.ceil(
    reviews.length / reviewsPerPage
  );

  const visibleReviews = reviews.slice(
    activePage * reviewsPerPage,
    activePage * reviewsPerPage + reviewsPerPage
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

        <div className="reviews-dots">
          {Array.from({ length: totalPages }).map(
            (_, page) => (
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
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;