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
      <div className="grid md:grid-cols-12 grid-cols-1 px-[5%] pb-[15vh] mt-24 justify-items-center">
        <div className="w-3/4 aspect-[5/6] relative col-span-5 group">
          <div className="absolute w-full h-full top-5 left-5 bg-slate-500 bg-opacity-25 -z-10"></div>
          <img
            src={product.image}
            alt="Image Alt Text"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col col-span-4 justify-self-start ml-7">
          <h1 className="md:text-[4.5vw] leading-none tracking-wider">
            {product.name}
          </h1>
          {/* <br /> */}
          <div
            className="text-[#d38e0c] md:text-[1.875vw] text-left relative mb-1.5 mt-7"
            style={{ font: "'Oswald', sans-serif" }}
          >
            SPECIFICATION :
          </div>
          {/* <br /> */}
          <div
            className="text-[#dfd3bb] md:text-[1.25vw] text-left w-full "
            style={{ font: "'Oswald', sans-serif" }}
          >
            {product.specification.map((specs) => {
              return (
                <p className="mb-1.5">
                  {specs}
                  <br />
                </p>
              );
            })}
          </div>
        </div>
        <div className="col-span-3 self-center my-10 space-y-5">
          <p className="font-bold md:text-[1.875vw] tracking-wider">Color Option</p>
          {product.colorOptions.map((option) => (
            <div className="py-2 px-5 rounded flex justify-center" style={{ backgroundColor: `#${option.colorCode}`}}>
              <p className="font-bold text-[#031723] md:text-[1.5vw]">
                {option.colorName}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative py-28 md:mt-16 2xl:pt-48 bg-black bg-opacity-25">
        <Yellowbox features={product.additionalFeatures}/>
        <ImageCarousel images={product.additionalImages} />
      </div>
    </section>
  );
};

export default ProductDetail;
