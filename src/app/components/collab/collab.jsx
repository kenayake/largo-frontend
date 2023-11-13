import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewsCard = () => (
  <div className="flex flex-col justify-center">
    <img
      src="/landing_page/images/ilustrasi-tangan.jpeg"
      alt=""
      class="w-full h-full"
    />
    <p className="font-[Oswald] font-light text-[15px]/[26px] tracking-[2%] text-white/[.37] mt-6">
      Thursday, 31 June 2023
    </p>
    <p className="font-[Oswald] font-normal text-[28px]/[47.5px] text-white mb-1">
      Lorem Ipsum Dolor Sit Amet
    </p>
    <p className="font-[Oswald] font-light text-[16px]/[26px] tracking-[2%] text-justify text-white/50 w-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
      ligula consectetur, ultrices mauris.
    </p>
    <div className={"w-full flex justify-end items-center mx-auto"}>
      <Link href="/news/[slug]" as="/news/news-list-card">
        <button className="w-[130px] h-[40px] rounded-[7px] border-[1.5px] border-[#FF8811] mt-[38px] ml-auto">
          <p className="font-[Oswald] font-bold text-[16px] text-[#FF8811]">
            Read More &gt;
          </p>
        </button>
      </Link>
    </div>
  </div>
);

const CollabCardOne = () => (
  <div className="flex flex-col w-[259.2px] h-[445px] items-center">
    <img src="/landing_page/images/unionwell.jfif" alt="" />
    <p className="font-[Oswald] font-light text-[16px]/[26px] tracking-[2%] text-center text-white/50 mb-[35px] mt-[12px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      Aliquam in hendrerit urna.
    </p>
    <button className="w-[130px] h-[40px] rounded-[7px] border-[1.5px] border-[#FF8811]">
      <p className="font-[Oswald] font-bold text-[16px] text-[#FF8811]">
        Visit Site
      </p>
    </button>
  </div>
);

const CollabCard = () => (
  <div className="flex flex-col w-[259.2px] h-[445px] items-center">
    <img src="/landing_page/images/unionwell.jfif" alt="" />
    <p className="font-[Oswald] font-light text-[16px]/[26px] tracking-[2%] text-center text-white/50 mb-[35px] mt-[12px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      Aliquam in hendrerit urna.
    </p>
    <button className="w-[130px] h-[40px] rounded-[7px] border-[1.5px] border-[#FF8811]">
      <p className="font-[Oswald] font-bold text-[16px] text-[#FF8811]">
        Visit Site
      </p>
    </button>
  </div>
);

export default function LatestNews() {
  return (
    <section className="mx-auto">
      {" "}
      {/* Added mx-auto to center the entire section */}
      <hr className="w-[222px] border-[3px] border-[#FF8811] mx-auto mb-[46px] mt-[97px]" />
      <p className="font-[Oswald] font-medium text-[60px]/[90px] tracking-[4%] text-white text-center mb-[72px]">
        Latest News
      </p>
      <div
        className={`flex flex-col justify-center gap-10 w-10/12 mx-auto md:flex-row md:items-center md:mb-10 md:w-10/12 md:mx-auto md:place-content-between`}
      >
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className={"w-10/12 flex justify-end items-center mx-auto"}>
        <Link  href='/newscollab'>
          <button>
            <p className="font-[Oswald] font-bold text-xl text-[#FF8811] underline underline-offset-auto">
              See all news
            </p>
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-x-20 gap-y-[30px] justify-center mt-[49px] items-center mb-[47px] md:flex-row md:w-10/12 md:mx-auto xl:gap-x-[110px] xl:place-content-between">
        <p className="font-[Oswald] font-medium text-[60px]/[90px] tracking-[4%]  text-white flex text-center  md:text-left md:text-[40px]/[90px] lg:text-[60px]/[90px] xl:max-w-[300px]">
          Our Latest Collaboration
        </p>
        <CollabCardOne />
        <CollabCard />
      </div>
      <p className="font-[Oswald] font-medium text-[44px]/[60px] tracking-[9%] text-center mt-[47px] mb-[25px]">
        #LOKALPRIDE
      </p>
    </section>
  );
}
