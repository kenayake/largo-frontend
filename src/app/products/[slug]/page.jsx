import React from "react";
import clientPromise from "@/lib/mongo_singleton";
import { ImageCarousel } from "./image_carousel";
import Yellowbox from "./yellowbox";
import ShopButton from "./shop_buttons";

const ProductDetail = async ({ params }) => {
  const client = await clientPromise;

  const productCol = client.db(process.env.DB_NAME).collection("products");

  const product = await productCol.findOne({ name: decodeURI(params.slug) });

  const whatsappIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill="#000"
        d="M13.494 3.978a6.953 6.953 0 0 0-4.966-2.061c-3.867 0-7.02 3.152-7.02 7.02 0 1.239.327 2.443.936 3.506l-.992 3.64 3.719-.977a7.021 7.021 0 0 0 3.357.857c3.868 0 7.02-3.152 7.02-7.02 0-1.877-.73-3.64-2.054-4.965ZM8.528 14.773a5.852 5.852 0 0 1-2.975-.815l-.212-.127-2.21.58.588-2.153-.142-.22a5.854 5.854 0 0 1-.892-3.102A5.847 5.847 0 0 1 8.52 3.1c1.559 0 3.025.609 4.123 1.714a5.795 5.795 0 0 1 1.707 4.13c.014 3.215-2.607 5.829-5.823 5.829Zm3.202-4.363c-.177-.085-1.041-.51-1.197-.574-.163-.057-.276-.085-.397.085-.12.177-.453.574-.552.687-.1.12-.206.134-.383.042-.177-.085-.743-.276-1.41-.87-.523-.468-.87-1.042-.977-1.22-.099-.176-.014-.268.078-.36.078-.078.177-.206.262-.305.085-.1.12-.177.177-.29.057-.12.029-.22-.014-.305-.042-.085-.397-.95-.538-1.303-.142-.34-.29-.298-.397-.305h-.34a.636.636 0 0 0-.467.22c-.156.177-.61.602-.61 1.466s.63 1.7.716 1.813c.085.12 1.24 1.891 2.996 2.65.418.184.744.29.999.368.418.134.8.113 1.105.07.34-.049 1.041-.424 1.183-.835.149-.411.149-.758.099-.836-.05-.078-.156-.113-.333-.198Z"
      />
    </svg>
  );

  const instagramIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill="#000"
        d="M5.525 1.917h5.95a4.111 4.111 0 0 1 4.108 4.108v5.95a4.109 4.109 0 0 1-4.108 4.108h-5.95a4.111 4.111 0 0 1-4.109-4.108v-5.95a4.108 4.108 0 0 1 4.109-4.108Zm-.142 1.416a2.55 2.55 0 0 0-2.55 2.55v6.234c0 1.41 1.14 2.55 2.55 2.55h6.234a2.55 2.55 0 0 0 2.55-2.55V5.883c0-1.41-1.14-2.55-2.55-2.55H5.383Zm6.836 1.063a.886.886 0 1 1 0 1.771.886.886 0 0 1 0-1.771Zm-3.72 1.062a3.542 3.542 0 1 1 0 7.084 3.542 3.542 0 0 1 0-7.084Zm0 1.417a2.125 2.125 0 1 0 0 4.25 2.125 2.125 0 0 0 0-4.25Z"
      />
    </svg>
  );

  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill="#000"
        d="M14.166 13.25H12.75V7.052L8.5 9.708 4.25 7.052v6.198H2.833v-8.5h.85L8.5 7.76l4.816-3.01h.85m0-1.417H2.833c-.786 0-1.417.63-1.417 1.417v8.5a1.417 1.417 0 0 0 1.417 1.417h11.334a1.417 1.417 0 0 0 1.416-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417Z"
      />
    </svg>
  );

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
        <div className="md:col-span-3 md:my-16 md:space-y-5 flex md:flex-col flex-wrap justify-between md:justify-center w-full md:w-fit">
          <div className="space-y-3 w-fit">
            <p className="font-bold md:text-[2vw] text-[2.5vh] tracking-wider">
              Color Option
            </p>
            <div className="flex space-x-3">
              {product.colorOptions.map((option) => (
                <div
                  className="w-12 h-12 rounded-full"
                  style={{ backgroundColor: `#${option.colorCode}` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="space-y-3 w-max flex flex-col order-first md:order-last">
            <p className="font-bold md:text-[2vw] text-[2.5vh] tracking-wider">
              Buy Now!
            </p>
            <ShopButton name={"WhatsApp"} icon={whatsappIcon} link={`https://wa.me/628129995349?text=I'm%20interested%20in%20your%20car%20for%20sale`} />
            <ShopButton name={"Instagram"} icon={instagramIcon} link={'https://www.instagram.com/largo_ebike/'} />
            <ShopButton name={"Email"} icon={emailIcon} />
          </div>
        </div>
      </div>

      <div className="relative pt-28 md:pb-16 mt-16 lg:pt-[20vh] bg-black bg-opacity-25">
        <Yellowbox features={product.additionalFeatures} />
        <ImageCarousel images={product.additionalImages} />
      </div>
    </section>
  );
};

export default ProductDetail;
