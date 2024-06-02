import React from "react";
import Container from "../ui/Container";

const SectionTwo = () => {
  return (
    <section className="py-12 md:pb-24 md:pt-36 overflow-hidden">
      <Container>
        <div className="relative flex flex-wrap justify-center">
          <img
            className="hidden lg:block absolute inset-y-0 -mr-80 -mt-16"
            src="https://shuffle.dev/zospace-assets/lines/dots-gray.svg"
            alt="..."
          />
          <div className="w-full sm:w-1/2 lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div className="relative flex">
              <img
                className="hidden lg:block absolute top-0 right-0 -mr-20 -mt-16"
                src="https://shuffle.dev/zospace-assets/lines/dots-gray.svg"
                alt="..."
              />

              <div className="max-w-xs">
                <h3 className="mb-4 text-2xl lg:text-3xl font-bold font-heading text-white">
                  Build faster
                </h3>
                <p className="text-lg text-gray-200">
                  Create groundbreaking applications without needing to run your
                  own data server, build indexing infrastructure, or parse
                  through raw data.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div className="flex">
              <div className="max-w-xs">
                <h3 className="mb-4 text-2xl lg:text-3xl font-bold font-heading text-white">
                  Spend less
                </h3>
                <p className="text-lg text-gray-200">
                  Cut down on costs and time spent running expensive
                  infrastructure by tapping into Equals’s competitive data
                  market.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-10">
            <div className="flex">
              <div className="lg:max-w-xs">
                <h3 className="mb-4 text-2xl lg:text-3xl font-bold font-heading text-white">
                  Increase resilience
                </h3>
                <p className="text-lg text-gray-200">
                  Ensure your application’s uptime and keep its data flowing
                  24/7 with a globally distributed network of contributors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionTwo;
