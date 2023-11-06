import React from "react";
import clientPromise from "@/lib/mongo_singleton";
import { ImageCarousel } from "./image_carousel";
import Yellowbox from "./yellowbox";

const ProductDetail = async ({ params }) => {
  const client = await clientPromise;

  const productCol = client.db(process.env.DB_NAME).collection("products");

  const product = await productCol.findOne({ name: decodeURI(params.slug) });

  return (
    <section>
      <div className="grid md:grid-cols-12 grid-cols-1 px-[10%] md:px-[5%] py-[10vh] lg:py-[15vh] min-h-fit justify-items-center gap-10 md:gap-0">
        <div className="w-11/12 md:w-3/4 aspect-[5/6] relative md:col-span-5 group">
          <div className="absolute w-full h-full top-5 left-5 bg-slate-500 bg-opacity-25 -z-10"></div>
          <img
            src={product.image}
            alt="Image Alt Text"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col md:col-span-4 justify-self-start md:ml-7">
          <h1 className="md:text-[4.5vw] text-[6vh] leading-none tracking-wider">
            {product.name}
          </h1>
          {/* <br /> */}
          <div
            className="text-[#d38e0c] md:text-[1.5vw] text-[3vh] text-left relative mb-1.5 mt-7"
            style={{ font: "'Oswald', sans-serif" }}
          >
            SPECIFICATION :
          </div>
          {/* <br /> */}
          <div
            className="text-[#dfd3bb] md:text-[1.25vw] text-[2.25vh] text-left w-full "
            style={{ font: "'Oswald', sans-serif" }}
          >
            {product.specification.map((specs) => {
              return (
                <p>
                  {specs}
                  <br />
                </p>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-3 md:my-16 space-y-5 w-full md:w-fit flex flex-row md:flex-col flex-wrap justify-between md:justify-center md:items-center">
          <p className="font-bold md:text-[1.875vw] text-[2.5vh] tracking-wider flex-none w-full md:w-fit">Color Option</p>
          {product.colorOptions.map((option) => (
            <div className="py-2 px-5 rounded w-max md:w-full flex justify-center flex-none" style={{ backgroundColor: `#${option.colorCode}`}}>
              <p className="font-bold text-[#031723] md:text-[1.5vw]">
                {option.colorName}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative pt-28 md:pb-16 mt-16 lg:pt-[20vh] bg-black bg-opacity-25">
        <Yellowbox features={product.additionalFeatures}/>
        <ImageCarousel images={product.additionalImages} />
      </div>
    </section>
  );
};

export default ProductDetail;
