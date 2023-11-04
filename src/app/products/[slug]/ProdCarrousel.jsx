"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRef, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";

//TODO: Change FakeDB to actual database pull



export function ProdCarousel({ images }) {
  // Use the received images array

  const [_, setInit] = useState();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
      <div className="relative my-20">
          <Swiper
              navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
              }}
              slidesPerView={"auto"}
              spaceBetween={200}
              centeredSlides={true}
              modules={[Navigation]}
              rewind={true}
              onInit={() => setInit(true)}
          >
              {images.length > 0 && images.map((element, index) => {
                  return (
                      <SwiperSlide
                          className="relative object-contain h-auto max-w-fit"
                          key={index}
                      >
                          <div
                              className="w-[524px] h-[441px] bg-zinc-400 flex justify-center items-center relative overflow-hidden transition-transform duration-300 hover:scale-105"
                              style={{
                                  backgroundImage: `url(/landing_page/images/${element})`, // Update with your actual path
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                              }}
                          >
                              {/* Black overlay */}
                              <div className="absolute inset-0 bg-black opacity-50"></div>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 px-12 pb-12">
                              <p className="mb-4 text-5xl font-bold leading-10 tracking-wider capitalize">
                                  {element.replace(/\.[^/.]+$/, "")} {/* Display filename without extension */}
                              </p>
                              <button className="flex items-end text-[#ff8811] hover:underline underline-offset-4">
                                  <p className="text-3xl font-medium">Read more</p>
                                  <BiRightArrowAlt className="w-8 h-8 ml-1 " />
                              </button>
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
            className="hover:fill-[#DFD3BB] group/prev"
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
                  className="group-hover/prev:fill-[#031723]"
                ></path>
              </g>
            </g>
          </svg>
        </button>
        <div className="flex-initial w-[650px]"></div>
        <button className="visible" ref={nextRef}>
          <svg
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:fill-[#DFD3BB] group/next"
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
                  className="group-hover/next:fill-[#031723]"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
