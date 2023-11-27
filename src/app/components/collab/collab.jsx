import React from "react";
import Image from "next/image";
import { getNews } from "@/lib/firebase/get_document";
import moment from "moment/moment";

const CollabCardOne = () => (
  <div className="flex flex-col w-[259.2px] h-[445px] items-center">
    <img src="/landing_page/images/unionwell.jfif" alt="" />
    <p className="font-light text-[16px]/[26px] tracking-[2%] text-center text-white/50 mb-[35px] mt-[12px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      Aliquam in hendrerit urna.
    </p>
    <button className="w-[130px] h-[40px] rounded-[7px] border-[1.5px] border-[#FF8811]">
      <p className="font-bold text-[16px] text-[#FF8811]">
        Visit Site
      </p>
    </button>
  </div>
);

const CollabCard = () => (
  <div className="flex flex-col w-[259.2px] h-[445px] items-center">
    <img src="/landing_page/images/unionwell.jfif" alt="" />
    <p className="font-light text-[16px]/[26px] tracking-[2%] text-center text-white/50 mb-[35px] mt-[12px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      Aliquam in hendrerit urna.
    </p>
    <button className="w-[130px] h-[40px] rounded-[7px] border-[1.5px] border-[#FF8811]">
      <p className="font-bold text-[16px] text-[#FF8811]">
        Visit Site
      </p>
    </button>
  </div>
);

const NewsCard = (news) => {
  return (
    <div className="flex flex-col justify-center">
      <img src={news.image} alt="" class="w-full h-full" />
      <p className="font-[Oswald] font-light text-[15px]/[26px] tracking-[2%] text-white/[.37] mt-6">
        {moment(news.uploadDate.toDate().toUTCString()).format("LLL")}
      </p>
      <p className="font-[Oswald] font-normal text-[28px]/[47.5px] text-white mb-1">
        {news.title}
      </p>
      <p className="font-[Oswald] font-light text-[16px]/[26px] tracking-[2%] text-justify text-white/50 w-auto">
        {news.shortDescription}
      </p>
      <button className="w-[130px] h-[40px] rounded-[7px] border-[1.5px] border-[#FF8811] mt-[38px] ml-auto">
        <p className="font-[Oswald] font-bold text-[16px] text-[#FF8811]">
          Read More &gt;
        </p>
      </button>
    </div>
  );
};

const LatestNews = async () => {
  const [news, exists] = await getNews({});

  return (
    <section className="mx-auto">
      {" "}
      {/* Added mx-auto to center the entire section */}
      <hr className="w-[222px] border-[3px] border-[#FF8811] mx-auto mb-[46px] mt-[97px]" />
      <p className="font-[Oswald] font-medium text-[60px]/[90px] tracking-[4%] text-white text-center mb-[72px]">
        Latest News
      </p>
      <div
        className={`flex flex-col justify-center gap-10 w-10/12 mx-auto md:flex-row md:items-center md:mb-36 md:w-10/12 md:mx-auto md:place-content-between`}
      >
        {news.map((news) => {
          return <NewsCard {...news} />;
        })}
      </div>
      <div className={"w-10/12 flex justify-end items-center mx-auto"}>
        <Link  href='/newscollab'>
          <button>
            <p className="font-bold text-xl text-[#FF8811] underline underline-offset-auto">
              See all news
            </p>
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-x-20 gap-y-[30px] justify-center mt-[49px] items-center mb-[47px] md:flex-row md:w-10/12 md:mx-auto xl:gap-x-[110px] xl:place-content-between">
        <p className="font-medium text-[60px]/[90px] tracking-[4%]  text-white flex text-center  md:text-left md:text-[40px]/[90px] lg:text-[60px]/[90px] xl:max-w-[300px]">
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
};

export default LatestNews;
