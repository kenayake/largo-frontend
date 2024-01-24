import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="flex flex-col min-h-screen text-white bg-fixed bg-center bg-cover bg-blend-overlay"
        style={{ backgroundImage: 'url("/landing_page/images/image-8.png")' }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-70"></div>

        {/* Hero Section Content */}
        <div className="flex flex-col z-10 justify-center items-center h-screen text-[#DFD3BB] ">
          <p className="font-bold text-6xl leading-[97.5px] capitalize tracking-[0.0375em]">
            About Us
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-black text-white text-start min-h-auto px-14">
        <div className="columns-1 md:columns-2">
        <div className="container mx-auto px-4 flex flex-col justify-start items-start mt-24">
          <h2 className="text-6xl font-semibold mb-6">About Us</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-prose">
            At Largo, we specialize in creating handcrafted E-bikes that combine
            modern technology with vintage aesthetics. Our passion for classic
            designs drives us to craft bikes that provide an exceptional riding
            experience while honoring the timeless charm of the past.
          </p>
          <p className="text-gray-300 text-lg max-w-prose">
            We are committed to sustainability and eco-friendly transportation.
            Our mission is to offer a unique and stylish alternative to
            traditional commuting methods. Join us in celebrating the joy of
            riding and the elegance of vintage design.
          </p>
        </div>
        {/* Video */}
        <div className="w-full h-[200px] md:h-[525px] flex items-center justify-center my-20 md:my-0">
          <video
            // src="/landing_page/video/intv_ibo.mp4"
            autoPlay
            loop
            controls
            muted
            className="h-full"
          />
        </div>
        </div>
      </section>
      <section className="py-16 text-white text-start min-h-auto px-14">
        <div className="columns-1 md:columns-2">
        {/* Video */}
          <div className="w-full h-[200px] md:h-[525px] flex items-center justify-center my-20 md:my-0">
            <video
              // src="/landing_page/video/intv_ibo.mp4"
              autoPlay
              loop
              controls
              muted
              className="h-full"
            />
          </div>
          <div className="container mx-auto px-4 flex flex-col justify-start items-start mt-24">
            <h2 className="text-6xl font-semibold mb-6">About Us</h2>
            <p className="text-gray-300 text-lg mb-6 max-w-prose">
              At Largo, we specialize in creating handcrafted E-bikes that combine
              modern technology with vintage aesthetics. Our passion for classic
              designs drives us to craft bikes that provide an exceptional riding
              experience while honoring the timeless charm of the past.
            </p>
            <p className="text-gray-300 text-lg max-w-prose">
              We are committed to sustainability and eco-friendly transportation.
              Our mission is to offer a unique and stylish alternative to
              traditional commuting methods. Join us in celebrating the joy of
              riding and the elegance of vintage design.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}