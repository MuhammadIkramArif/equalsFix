import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const navigation = [
  { name: "Home", href: "#hero-section" },
  { name: "subequals", href: "#subequals" },
  { name: "Key Features", href: "#features" },
  { name: "Globally", href: "#globally" },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-600 text-white pt-10 pb-6">
      <Container>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" className="flex items-center">
                <img
                  className="h-32 w-auto"
                  src="/assets/images/logo.png"
                  alt="..."
                />
              </Link>
            </div>
            <div className="flex space-x-4">
              <a
                href="http://www.x.com/equals_net"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:opacity-80"
              >
                <img
                  className="h-8 w-8 invert"
                  src="/assets/images/twitter.png"
                  alt="..."
                />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link uppercase"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="text-xs lg:text-lg text-center font-normal text-gray-200 pl-5">
            Equals Network is dedicated to providing seamless blockchain data
            indexing and retrieval solutions, empowering developers to build
            innovative decentralized applications. Follow us on Twitter for the
            latest updates and join our growing community.
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Copyright © {/* */}2024{/* */} Equals Network
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
