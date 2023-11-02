import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-10/12 justify-items-center mx-5">
      {products.map((product, index) => {
        return (
          <div
            className=" relative w-full aspect-video"
          >
            <img src={product.image} className="object-cover inset-0 absolute h-full w-full object-bottom" alt="" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
              <p className="md:mb-2 xl:mb-4 text-2xl md:text-[2.5vw] font-bold md:leading-8 tracking-wider capitalize">
                {product.name.replace(/\.[^/.]+$/, "")}
              </p>
              <button className="flex items-end text-[#ff8811] hover:underline underline-offset-2">
                <Link
                  className="text-xl font-medium"
                  href={product.type==='ebike'?`/products/${product.name}`:'/classic-car-conversion'}
                >
                  Read more
                </Link>
                <BiRightArrowAlt className="w-6 h-6 ml-1" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
