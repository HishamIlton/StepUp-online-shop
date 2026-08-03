import ebayLogo from "../../assets/images/ebay.png";
import amazonLogo from "../../assets/images/amazon.png";
import ajioLogo from "../../assets/images/AJIO.png";
import ferrariLogo from "../../assets/images/ferrari.jpg";
import mclarenLogo from "../../assets/images/mclaren.png";
import tommyLogo from "../../assets/images/tommy.jpg";

import "./BrandStrip.css";

function BrandStrip() {
  const brands = [
    {
      id: 1,
      name: "eBay",
      image: ebayLogo,
    },
    {
      id: 2,
      name: "Amazon",
      image: amazonLogo,
    },
    {
      id: 3,
      name: "AJIO",
      image: ajioLogo,
    },
    {
      id: 4,
      name: "Ferrari",
      image: ferrariLogo,
    },
    {
      id: 5,
      name: "McLaren",
      image: mclarenLogo,
    },
    {
      id: 6,
      name: "Tommy Hilfiger",
      image: tommyLogo,
    },
  ];

  return (
    <section className="brand-strip">
      <div className="brand-strip-container">
        {brands.map((brand) => (
          <div className="brand-logo-item" key={brand.id}>
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandStrip;