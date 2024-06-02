import React from "react";
import Container from "../ui/Container";

const WorldSection = () => {
  return (
    <section
      id="globally"
      className="py-12 md:py-24 bg-black text-white filter-hue-3"
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="font-semibold text-4xl md:text-5xl tracking-tighter mb-3">
            Globally distributed
          </h1>
          <h1 className="mb-6 text-white/60 font-semibold text-4xl md:text-5xl tracking-tighter">
            Decentralized infrastructure
          </h1>
          <p className="text-white/80 md:text-lg lg:text-xl">
            What makes Equals so resilient? Enter Equals Network, a
            decentralized data market powered by distributed participants:
            Indexers, Curators, Delegators, and Subgraph Developers.
          </p>
        </div>
        <div>
          <img
            className="aspect-square sm:aspect-[16/6] object-cover md:object-contain filter-hue-3"
            src="/assets/images/world-image.jpg"
            alt="..."
          />
        </div>
      </Container>
    </section>
  );
};

export default WorldSection;
