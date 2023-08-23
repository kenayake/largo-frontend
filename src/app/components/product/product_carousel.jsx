"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRef, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";

export function ProductCarousel({ products }) {
  const [_, setInit] = useState();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        slidesPerView={"auto"}
        spaceBetween={20} // Adjusted spacing for mobile devices
        centeredSlides={true}
        modules={[Navigation]}
        rewind={true}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide
              className="relative h-auto max-w-fit"
              key={index}
            >
              <div
                className="w-[100%] bg-zinc-400 flex justify-center items-center"
              >
                <img
                  src={product.image}
                  alt={`Image ${index + 1}`}
                  className="object-cover h-auto max-w-full" // Adjusted image styling
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 px-6 pb-6"> {/* Adjusted padding for mobile */}
                <p className="mb-2 text-xl font-bold leading-8 tracking-wider capitalize"> {/* Adjusted font size */}
                  {product.name.replace(/\.[^/.]+$/, "")}
                </p>
                <button className="flex items-end text-[#ff8811] hover:underline underline-offset-2"> {/* Adjusted button style */}
                  <p className="text-xl font-medium">Read more</p> {/* Adjusted font size */}
                  <BiRightArrowAlt className="w-6 h-6 ml-1" /> {/* Adjusted icon size */}
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute z-10 flex justify-center invisible w-full -translate-y-1/2 inset-y-1/2 h-fit">
        {/* ... Your navigation buttons */}
      </div>
    </div>
  );
}
