import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandStrip from "./components/BrandStrip/BrandStrip";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import BestSelling from "./components/BestSelling/BestSelling";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Hero />
      <BrandStrip />
      <TrendingProducts />
      <PromoBanner />
      <BestSelling />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default App;
