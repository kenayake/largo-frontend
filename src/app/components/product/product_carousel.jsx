"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRef, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/navigation";

export function ProductCarousel({ products }) {
  const [_, setInit] = useState();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        slidesPerView={isMobile ? 1 : 2.5}
        spaceBetween={150} // Adjusted spacing for mobile devices
        centeredSlides={true}
        modules={[Navigation]}
        rewind={true}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url("${product.image}")`,
                backgroundSize: `cover`,
                backgroundPosition: 'center',
              }}
            >
            <div className="md:h-[30vw] h-80">
              <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
                  <p className="mb-2 text-5xl font-bold leading-8 tracking-wider capitalize">
                    {product.name.replace(/\.[^/.]+$/, "")}
                  </p>
                  <button className="flex items-end text-[#ff8811] hover:underline underline-offset-2">
                    <p className="text-xl font-medium">Read more</p>
                    <BiRightArrowAlt className="w-6 h-6 ml-1" />
                  </button>
                </div>
            </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute z-10 flex justify-center invisible w-full -translate-y-1/2 inset-y-1/2 h-fit">
        <button className="visible" ref={prevRef}>
          <svg
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:hover:fill-[#DFD3BB] active:fill-[#DFD3BB] group/next"
          >
            <g id="503a77b2">
              <path
                id="dbc70633"
                d="M0.999958 30.5C0.999958 46.7924 14.2076 60 30.5 60C46.7924 60 60 46.7924 60 30.5C60 14.2076 46.7924 1 30.5 1C14.2076 1 0.999958 14.2076 0.999958 30.5Z"
                stroke="#DFD3BB"
                strokeWidth="2"
              ></path>
              <g id="fbed2c81">
                <path
                  id="f9d1d41f"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.2141 31.3026L37.7238 31.3026L37.7238 29.6973L25.2141 29.6973L30.265 24.6464L29.1299 23.5113L22.1413 30.4999L29.1299 37.4885L30.265 36.3534L25.2141 31.3026Z"
                  fill="#DFD3BB"
                  className="md:group-hover/next:fill-[#031723] md:fill-[#DFD3BB] fill-[#031723]"
                ></path>
              </g>
            </g>
          </svg>
        </button>
        <div className="flex-initial w-screen md:w-[40vw]"></div>
        <button className="visible" ref={nextRef}>
          <svg
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:hover:fill-[#DFD3BB] group/next active:fill-[#DFD3BB]"
          >
            <g id="9408d6da">
              <circle
                id="801cb17b"
                cx="30.5"
                cy="30.5"
                r="29.5"
                stroke="#DFD3BB"
                strokeWidth="2"
              ></circle>
              <g id="cd7bac2b">
                <path
                  id="422c8abc"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.786 31.3026L23.2764 31.3026L23.2764 29.6973L35.786 29.6973L30.7351 24.6464L31.8702 23.5113L38.8588 30.4999L31.8702 37.4885L30.7351 36.3534L35.786 31.3026Z"
                  fill="#DFD3BB"
                  className="md:group-hover/next:fill-[#031723] md:fill-[#DFD3BB] fill-[#031723]"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
