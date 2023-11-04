import React from "react";
import Image from "next/image";

const NewsCard = () => (
  <div className="flex flex-col">
    <img
      src="/landing_page/images/ilustrasi-tangan.jpeg"
      alt=""
      width={358}
      height={212}
    />
    <p className="font-[Oswald] font-light text-[15px]/[26px] tracking-[2%] text-white/[.37] mt-6">
      Thursday, 31 June 2023
    </p>
    <p className="font-[Oswald] font-normal text-[28px]/[47.5px] text-white mb-1">
      Lorem Ipsum Dolor Sit Amet
    </p>
    <p className="font-[Oswald] font-light text-[16px]/[26px] tracking-[2%] text-justify text-white/50 max-w-[358px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
      ligula consectetur, ultrices mauris.
    </p>

    <button className="w-[180px] h-[60px] rounded-[7px] border-[1.5px] border-[#FF8811] mt-[68px] ml-[178px]">
      <p className="font-[Oswald] font-bold text-[20px]/[20px] text-[#FF8811]">
        Read More &gt;
      </p>
    </button>
  </div>
);

const CollabCardOne = () => (
  <div className="flex flex-col w-[259.2px] h-[445px] items-center">
    <img src="/landing_page/images/unionwell.jfif" alt="" />
    <p className="font-[Oswald] font-light text-[16px]/[26px] tracking-[2%] text-center text-white/50 mb-[35px] mt-[12px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      Aliquam in hendrerit urna.
    </p>
    <button className="w-[154px] h-[60px] rounded-[7px] border-[1.5px] border-[#FF8811]">
      <p className="font-[Oswald] font-bold text-[20px]/[20px] text-[#FF8811]">
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
    <button className="w-[154px] h-[60px] rounded-[7px] border-[1.5px] border-[#FF8811]">
      <p className="font-[Oswald] font-bold text-[20px]/[20px] text-[#FF8811]">
        Visit Site
      </p>
    </button>
  </div>
);

export default function latestnews() {
  return (
    <section>
      <hr className="w-[222px] border-[3px] border-[#FF8811] mx-auto mb-[46px] mt-[97px]" />

      <p className="font-[Oswald] font-medium text-[60px]/[90px] tracking-[4%] text-white text-center mb-[72px]">
        Latest News
      </p>

      <div className={`flex flex-row gap-x-[60px] justify-center`}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>

      <div className="flex flex-row gap-x-[155px] justify-center mt-[49px] items-center mb-[47px]">
        <p className="font-[Oswald] font-medium text-[58px]/[90px] tracking-[4%]  text-white">
          Our <br />
          Latest <br />
          Collaboration
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
