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
      <div className="grid gap-10 md:gap-20 md:grid-cols-2 grid-cols-1 px-[10%] md:px-[5%] pb-[10vh] mt-36">
        <div className="w-full aspect-[5/6] relative">
          <img
            src={product.image}
            alt="Image Alt Text"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:col-span-1 flex flex-col">
          <h1 className="text-5xl lg:text-7xl">{product.name}</h1>
          {/* <br /> */}
          <div
            className="text-[#d38e0c] text-2xl text-left relative mb-1.5 mt-7 lg:mt-14"
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
      </div>

      <div className="relative mt-20 pb-18 bg-black bg-opacity-25 h-screen">
        {/* Yellow Box */}
        <div class="container bg-d38e0c py-6 w-3/4 md:w-1/2 rounded-lg shadow absolute inset-x-0 -top-28 mx-auto">
          <div className="grid items-center justify-center md:grid-cols-3 text-center">
            <div>
              <img
                src="/product_page/images/loog-1.png"
                alt="Image 1"
                className="mx-auto overflow-hidden transition-transform duration-300 hover:scale-105"
              />
              Full Charging Time <br />4 - 6 Hours
            </div>
            <div>
              <img
                src="/product_page/images/loog-2.png"
                alt="Image 1"
                className="mx-auto overflow-hidden transition-transform duration-300 hover:scale-105"
              />
              Max Speed Up To <br />
              55 km/h
            </div>
            <div>
              <img
                src="/product_page/images/loog-3.png"
                alt="Image 1"
                className="mx-auto overflow-hidden transition-transform duration-300 hover:scale-105"
              />
              3 Months <br />
              Battery Guarantee
            </div>
          </div>
        </div>
        <div className="h-40"></div>
        {/* <ProdCarousel images={product.additionalImages} /> */}
        <div className="relative aspect-[7/12] w-1/6 border-2 border-amber-500 border-opacity-50 mx-auto">
          <div className="absolute aspect-[7/12] -left-10 -top-10 w-100">
            <img src="/landing_page/images/prod-5.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
