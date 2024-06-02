import React from "react";
import Container from "../ui/Container";

const SubequalsSection = () => {
  return (
    <section
      id="subequals"
      className="py-12 md:py-24 text-white overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="col">
            <img
              className="h-full w-full aspect-square filter-hue-2 object-cover rounded-xl"
              src="/assets/images/image-1.png"
              alt=".."
            />
          </div>
          <div className="md:col-span-2">
            <div>
              <h2 className="mb-2 text-white font-bold capitalize text-2xl lg:text-4xl">
                Subequals
              </h2>
              <h2 className="mb-6 text-white/60 font-semibold capitalize text-2xl lg:text-4xl">
                Industry-standard data access
              </h2>
              <p className="text-white/80 md:text-lg xl:text-xl">
                subequals are open APIs on Equals that organize and serve
                blockchain data to applications. Using subequals, developers and
                data consumers alike benefit from speedy access to indexed data.
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  className="inline-block px-12 py-5 text-white font-bold bg-amber-600 hover:bg-amber-500 rounded-full transition duration-200"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubequalsSection;
