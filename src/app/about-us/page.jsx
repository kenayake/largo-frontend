import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="flex flex-col min-h-screen text-white bg-fixed bg-center bg-cover bg-blend-overlay"
        style={{ backgroundImage: `url("/landing_page/images/image-8.png")` }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-70"></div>

        {/* Hero Section Content */}
        <div className="flex flex-col z-10 justify-center items-center h-screen text-[#DFD3BB] ">
          <Image
            src="/landing_page/images/AboutUs.png"
            alt=""
            height={183}
            width={327}
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-black text-white text-center min-h-screen">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center mt-24">
          <h2 className="text-6xl font-semibold mb-6">About Us</h2>
          <p className="text-gray-300 text-lg mx-auto mb-6 max-w-prose">
            At Largo, we specialize in creating handcrafted E-bikes that combine
            modern technology with vintage aesthetics. Our passion for classic
            designs drives us to craft bikes that provide an exceptional riding
            experience while honoring the timeless charm of the past.
          </p>
          <p className="text-gray-300 text-lg mx-auto max-w-prose">
            We are committed to sustainability and eco-friendly transportation.
            Our mission is to offer a unique and stylish alternative to
            traditional commuting methods. Join us in celebrating the joy of
            riding and the elegance of vintage design.
          </p>
        </div>
      </section>
    </>
  );
}
