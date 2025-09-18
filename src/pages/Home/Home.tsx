import React from "react";
import Hero from "../../components/Hero/Hero";
import SkillsSection from "../../components/Skills/Skills";
import FeaturedSection from "../../components/Featured/Featured";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <SkillsSection />
      <FeaturedSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
