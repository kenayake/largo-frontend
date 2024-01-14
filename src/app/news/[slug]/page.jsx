// pages/news/[slug].jsx
import React from "react";
import { getNews } from "@/lib/firebase/get_document";
import moment from "moment/moment";

const RelatedCard = () => (
  <div>
    <div>
      <div className="flex flex-row">
        <img
          src="/landing_page/images/ilustrasi-tangan.jpeg"
          className="w-[100px] h-[70px] rounded lg:w-[8vw] lg:h-[13vh] object-cover"
        />
        <div className="ml-5 flex flex-col">
          <p className="font-light text-xs tracking-[2%] text-white/[.37] mt-1 md:text-sm">
            4 hours ago
          </p>
          <p className="font-normal text-base text-justify text-white md:text-2xl lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default async function NewsDetail({ params }) {
  const [news, exists] = await getNews({
    newsId: decodeURI(params.slug),
  });

  // const [news, exists] = await getNews();
  // console.log(params);
  // console.log(Object.assign({}, ...news));

  return (
    <>
      <div className="w-10/12 mx-auto flex flex-col pb-5 lg:flex-row">
        {/* News Page Content */}
        <div className="w-full mt-[13vh] md:mt-[14vh] lg:mt-[14vh] lg:pr-7 lg:pb-10 lg:w-3/4">
          <div className="bg-[#D38E0C] w-[100%] mx-auto rounded-md p-4 md:p-8">
            <div className="bg-[#17303F] w-32 md:py-1 md:px-9 rounded-md text-center text-base">
              Trending
            </div>
            <p className="text-white font-bold text-xl md:text-3xl pt-1 md:pt-3">
              {news.title}
            </p>
            <div className="flex flex-row mt-4 justify-between md:mt-3">
              {news.writer&& <div className="text-sm">Written by {news.writer}</div>}
              <div className="text-sm">
                {moment(news.uploadDate.toDate().toUTCString()).format("LLL")}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-col mt-8">
            <div className="w-full md:w-[100%]">
              <img
                src={news.image}
                alt=""
                className="w-full bg-cover bg-center rounded mb-4 md:mb-2 object-cover"
              />
            </div>
            <div className="flex justify-center items-center w-full md:w-100">
              <p className="text-white text-sm opacity-50 text-center">
                {news.imageCaption}
              </p>
            </div>
          </div>

          <hr className="w-[40vw] h-1 mx-auto my-4 bg-[#D38E0C] border-0 rounded md:my-3" />

          <p className="text-white text-sm font-light text-justify md:text-base">
            {news.description}
          </p>
        </div>
        <div className="lg:w-1/4 w-full lg:mt-[11vh] ">
          <h1 className="text-xl text-[#FF8811] mt-7 mb-2 lg:text-[2vw]">
            Related News
          </h1>
          <hr className="w-[100%] mb-4 h-0.5 mx-auto bg-[#D38E0C] border-0 md:my-3 " />
          <div className="gap-y-4 grid lg:gap-y-7">
            <RelatedCard />
            <RelatedCard />
            <RelatedCard />
            <RelatedCard />
            <RelatedCard />
          </div>
        </div>
      </div>
    </>
  );
}
