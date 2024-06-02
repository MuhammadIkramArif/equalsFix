import React from "react";
import HeroSection from "../components/sections/HeroSection";
import SectionTwo from "../components/sections/SectionTwo";
import SubequalsSection from "../components/sections/SubgraphsSection";
import SectionThree from "../components/sections/SectionThree";
import WorldSection from "../components/sections/WorldSection";
import SupportedSection from "../components/sections/SupportedSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <div className="bg-gradient-1">
        <SupportedSection />
        <SectionTwo />
        <SubequalsSection />
        <SectionThree />
        <WorldSection />
      </div>
    </main>
  );
};

export default HomePage;
