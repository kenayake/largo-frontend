"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRef, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";

//TODO: Change FakeDB to actual database pull

export function ImageCarousel({ images }) {
  // Use the received images array

  const [_, setInit] = useState();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative px-[10%]">
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          enabled: true,
        }}
        slidesPerView={"1"}
        modules={[Navigation]}
        spaceBetween={25}
        rewind={true}
        onInit={() => setInit(true)}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
        }}
      >
        {images.length > 0 &&
          images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={`relative aspect-[7/12] my-5 mx-4 bg-slate-400 ${
                    index % 2 && "mt-14"
                  }`}
                >
                  {index % 2 ? (
                    <div className="absolute -right-3 -bottom-3 border-2 border-amber-500 border-opacity-75 border-t-0 border-l-0 w-[90%] h-[90%]"></div>
                  ) : (
                    <div className="absolute -top-3 -right-3 border-2 border-amber-500 border-opacity-75 border-b-0 border-l-0 w-[90%] h-[90%]"></div>
                  )}
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <button className="absolute top-[47%] left-[2%] md:left-[5%] z-20" ref={prevRef} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="45"
          fill="none"
          viewBox="0 0 35 45"
          className="w-5/6 md:w-full"
        >
          <path fill="#D38E0C" d="M35 .625v43.75L.625 22.5 35 .625Z" />
        </svg>
      </button>
      <button className="absolute top-[47%] right-[1%] md:right-[5%] z-20" ref={nextRef} type="b">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="45"
          fill="none"
          viewBox="0 0 35 45"
          className="w-5/6 md:w-full"
        >
          <path fill="#D38E0C" d="M0 44.375V.625L34.375 22.5 0 44.375Z" />
        </svg>
      </button>
    </div>
  );
}
