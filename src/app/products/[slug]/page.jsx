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
      <div className="grid md:grid-cols-2 px-[10%] pb-[10vh] mt-36 ">
        <div className="w-[620px] h-[700px] lg:w-[528px] lg:h-[620px] relative">
          <img
            src="/landing_page/images/hx2r.png"
            alt="Image Alt Text"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="col-span-5 text-7xl md:col-span-1">
          {product.name}
          <br />
          <div
            className="text-[#d38e0c] text-left relative w-[272px] h-[43px] -mb-20 mt-14"
            style={{ font: "500 32px/33.5px 'Oswald', sans-serif" }}
          >
            SPECIFICATION :
          </div>
          <br />
          <div
            className="text-[#dfd3bb] text-left relative w-[666px] h-[455px]"
            style={{ font: "500 22px/33.5px 'Oswald', sans-serif" }}
          >
            {product.specification.map((specs) => {
              return (
                <>
                  {specs}
                  <br />
                </>
              );
            })}
          </div>
        </div>
      </div>

      <Yellowbox />

      <ProdCarousel images={product.additionalImages} />
    </section>
  );
};

export default ProductDetail;
