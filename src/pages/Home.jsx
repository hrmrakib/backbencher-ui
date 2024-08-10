import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import WhoWeAre from "../components/WhoWeAre";
import Service from "../components/Service";
import FeaturedWork from "../components/FeaturedWork";
import Review from "../components/Review";
import PricingTable from "../components/PricingTable";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <WhoWeAre />
      <Service />
      <FeaturedWork />
      <Review />
      <WhyChooseUs />
      <PricingTable />
      <Footer />
    </div>
  );
};

export default Home;
