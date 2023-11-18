"use client";

import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const FeaturedNewsSlider = () => {
  const [swiper, setSwiper] = useState(null);

  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    onSwiper: (swiper) => setSwiper(swiper),
  };

  return (
    <div className="relative">
      <Swiper {...swiperParams}>
        <SwiperSlide>
          <Link href="/news/[slug]" as="/news/news-list-card">
            <img
              src="/landing_page/images/ilustrasi-tangan.jpeg"
              alt=""
              className="w-[100vw] md:w-[100vw] md:h-[60vh] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <p className="font-[Oswald] font-normal text-xl mb-2">
                Lorem Ipsum Dolor Sit Ametaaa
              </p>
              <p className="font-[Oswald] font-light text-xs mb-1">
                Thursday, 31 June 2023
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/news/[slug]" as="/news/news-list-card">
            <img
              src="/landing_page/images/ilustrasi-tangan.jpeg"
              alt=""
              className="w-[100vw] md:w-[100vw] md:h-[60vh] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <p className="font-[Oswald] font-normal text-xl mb-2">
                Lorem Ipsum Dolor Sit Ametaaa
              </p>
              <p className="font-[Oswald] font-light text-xs mb-1">
                Thursday, 31 June 2023
              </p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const NewsListCard = () => (
  <div className="flex justify-between mb-10 md:w-[48%]">
    <div className="flex flex-row justify-center">
      <Link href="/news/[slug]" as="/news/news-list-card">
        <img
          src="/landing_page/images/ilustrasi-tangan.jpeg"
          className="w-[150px] h-[100px] md:w-[17vw] md:h-[10vw] object-cover"
        />
      </Link>
      <div className="ml-5 flex flex-col">
        <Link href="/news/[slug]" as="/news/news-list-card">
          <p className="font-[Oswald] font-normal text-sm text-justify text-white md:text-base lg:text-xl">
            Lorem Ipsum Dolor Sit Ametaaa
          </p>
        </Link>
        <p className="font-[Oswald] font-light text-xs tracking-[2%] text-white/[.37] mt-1">
          Thursday, 31 June 2023
        </p>
        <p className="font-[Oswald] font-light text-xs tracking-[2%] text-justify text-white/50 mb-1 mt-1 lg:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link href="/news/[slug]" as="/news/news-list-card">
          <button className="ml-auto">
            <p className="font-[Oswald] justify-end items-center font-bold text-sm text-[#FF8811] underline md:mt-[1vh] lg:mt-[5vh]">
              Read More
            </p>
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const CollabCard = () => (
  <div className="flex justify-between mb-10 md:w-[48%]">
    <img
      src="/landing_page/images/unionwell.jfif"
      alt=""
      className="w-[150px] h-[100px] md:w-[10vw] md:h-[10vw]"
    />
    <div className="ml-5 flex flex-col">
      <p className="font-[Oswald] font-normal text-sm text-justify text-white md:text-base lg:text-xl">
        Largo x UNIONWELL
      </p>
      <p className="font-[Oswald] font-light text-xs text-justify tracking-[2%] text-white/50 lg:mb-[4vh]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna.
      </p>
      <button className="ml-auto">
        <p className="font-[Oswald] justify-end items-center font-bold text-sm text-[#FF8811] underline lg:mt-[5vh]">
          Visit Site
        </p>
      </button>
    </div>
  </div>
);

const NewsCollab = () => {
  return (
    <section className="mx-auto">
      <div className="w-10/12 mx-auto">
        <div className="pb-[5vh] font-normal mt-20 mb-1">
          <h1 className="mb-4 text-xl text-[#FF8811] lg:text-3xl">
            Featured news
          </h1>
          <FeaturedNewsSlider />
        </div>
        <div className="font-normal mt-1">
          <h1 className="mb-5 text-xl text-[#FF8811] lg:text-3xl">All News</h1>
          <div className="flex-row justify-between md:flex flex-wrap">
            <NewsListCard />
            <NewsListCard />
            <NewsListCard />
            <NewsListCard />
            <NewsListCard />
            <NewsListCard />
            <NewsListCard />
            <NewsListCard />
            <NewsListCard />
            <NewsListCard />
          </div>
        </div>
        <div className="pb-[10vh] font-normal mt-2 mb-10">
          <h1 className="mb-4 text-xl text-[#FF8811] lg:text-3xl lg:mt-9 lg:mb-9">
            All Collaborations
          </h1>
          <div className="flex justify-between md:flex flex-wrap">
            <CollabCard />
            <CollabCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCollab;
