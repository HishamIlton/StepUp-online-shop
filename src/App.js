import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandStrip from "./components/BrandStrip/BrandStrip";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import BestSelling from "./components/BestSelling/BestSelling";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";

function HomePage() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <TrendingProducts />
      <PromoBanner />
      <BestSelling />
      <CustomerReviews />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </div>
  );
}

export default App;