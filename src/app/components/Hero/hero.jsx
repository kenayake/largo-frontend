import Image from "next/image";
import BrowseProductButton from "./browse_product_button";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="flex flex-col min-h-screen text-white bg-fixed bg-center bg-cover bg-blend-overlay"
        style={{
          backgroundImage: `url("/landing_page/images/landingbg.JPG")`,
          width: "100vw", // Set width to 100% of viewport width
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-70"></div>

        {/* Hero Section Content */}
        <div className="flex flex-col z-10 ml-4 md:ml-16 justify-center h-screen text-[#DFD3BB]">
          <p className="font-bold text-xl md:text-4xl leading-[97.5px] capitalize tracking-[0.0375em]">
            welcome to
          </p>
          <Image
            src="/landing_page/images/Largo_Hero_Logo.png"
            alt=""
            height={183}
            width={327}
          />
          <p className="mt-6 md:mt-14 font-medium text-base md:text-xl leading-7 tracking-[0.075em] max-w-[400px]">
            Explore our range of electric bikes and discover the future of
            cycling.
          </p>
          <BrowseProductButton />
          <div className="w-[300px] md:w-[501px] border-[1.5px] border-[#FF8811] mt-4 md:mt-[34.8px]"></div>
        </div>
      </section>
    </>
  );
}