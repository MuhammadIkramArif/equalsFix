import React from "react";
import Container from "../ui/Container";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative text-white py-24 lg:py-32 flex flex-col"
    >
      <span className="absolute top-0 left-0 h-full w-full">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="h-full w-full object-cover filter-hue-1"
          preload="none"
          poster="/assets/images/poster-video.png"
        >
          <source src="/assets/videos/bg-hero-video.mp4" type="video/mp4" />
        </video>
      </span>
      <div className="relative flex-1 flex items-center justify-center py-32">
        <Container>
          <div className="lg:py-8">
            <div className="text-center mx-auto max-w-2xl">
              <h1 className="mb-6 text-[#F3BA2F] text-5xl md:text-6xl xl:leading-tight xl:text-7xl uppercase font-bold">
                Equals Network
              </h1>
              <h2 className="text-white/80 text-xl lg:text-2xl font-regular">
                Empowering web3 with seamless blockchain data indexing and
                retrievall, while enabling efficient dapp
                development with open APIs
              </h2>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
