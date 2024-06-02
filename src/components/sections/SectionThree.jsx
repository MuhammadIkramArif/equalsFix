import React from "react";
import Container from "../ui/Container";

const SectionThree = () => {
  return (
    <section id="features" className="py-12 md:py-24 text-white">
      <Container>
        <div className="max-w-md mx-auto lg:max-w-none">
          <h1 className="font-semibold text-4xl md:text-5xl tracking-tighter mb-14">
            Key Features of Equals Network
          </h1>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
              <div className="relative group block h-full w-full px-9 py-14 hover:bg-[#1E1500] border rounded-3xl transition duration-300">
                <div>
                  <div className="max-w-xs pr-10">
                    <h5 className="text-3xl xs:text-4xl group-hover:text-white mb-6">
                      Seamless Integration
                    </h5>
                  </div>
                  <p className="group-hover:text-white">
                    Effortlessly index and query blockchain data to enhance your
                    dapp's performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
              <div className="relative group block h-full w-full px-9 py-14 hover:bg-[#1E1500] border rounded-3xl transition duration-300">
                <div>
                  <div className="max-w-xs pr-10">
                    <h5 className="text-3xl xs:text-4xl group-hover:text-white mb-6">
                      Open APIs
                    </h5>
                  </div>
                  <p className="group-hover:text-white">
                    Utilize open APIs to build and scale decentralized
                    applications with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-3">
              <div className="relative group block h-full w-full px-9 py-14 hover:bg-[#1E1500] border rounded-3xl transition duration-300">
                <div>
                  <div className="max-w-xs pr-10">
                    <h5 className="text-3xl xs:text-4xl group-hover:text-white mb-6">
                      Developer-Friendly
                    </h5>
                  </div>
                  <p className="group-hover:text-white">
                    A robust framework designed to support developers in
                    creating powerful dapps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionThree;
