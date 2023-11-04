import React from "react";
import clientPromise from "@/lib/mongo_singleton";
import { ProdCarousel } from "./ProdCarrousel";
import Yellowbox from "./yellowbox";

const ProductDetail = async ({ params }) => {
  const client = await clientPromise;

  const productCol = client.db(process.env.DB_NAME).collection("products");

  const product = await productCol.findOne({ name: decodeURI(params.slug) });

  return (
    <section>
      <div className="grid  md:grid-cols-12 grid-cols-1 px-[10%] pb-[15vh] mt-36">
        <div className="w-full aspect-[5/6] relative col-span-5">
          <div className="absolute w-full h-full -bottom-5 -right-5 bg-slate-500 bg-opacity-25 -z-10"></div>
          <img
            src={product.image}
            alt="Image Alt Text"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col col-span-5 place-self-center">
          <h1 className="text-7xl tracking-wider">{product.name}</h1>
          {/* <br /> */}
          <div
            className="text-[#d38e0c] text-3xl text-left relative mb-1.5 mt-7"
            style={{ font: "'Oswald', sans-serif" }}
          >
            SPECIFICATION :
          </div>
          {/* <br /> */}
          <div
            className="text-[#dfd3bb] text-xl text-left w-full flex-grow flex-shrink"
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
        <div className="col-span-2">
          <p className="font-bold text-3xl">Color Option</p>
        </div>
      </div>

      <div className="relative mt-20 pb-18 bg-black bg-opacity-25 h-screen">
        <Yellowbox />
        <div className="h-40"></div>
        {/* <ProdCarousel images={product.additionalImages} /> */}
        <div className="relative aspect-[7/12] h-[400px] mx-auto ">
          <div className="absolute -right-3 -bottom-3 border-2 border-amber-500 border-opacity-75 border-t-0 border-l-0 w-[90%] h-[90%]"></div>
          <img
            src="/landing_page/images/prod-5.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
