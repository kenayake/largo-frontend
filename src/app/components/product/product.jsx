import { ProductCarousel } from "./product_carousel";

export default function Product() {

  const images = ['hxr2.png', 'HXR.png', 'HXR2.png', 'HXR1.png'];

  return (
    <section id="product">
      <div className="pt-[15vh] px-[10%] pb-[10vh] font-normal leading-10 capitalize mt-20 mb-10">
        <p className="mb-4 text-6xl opacity-50">Check out our</p>
        <p className="text-7xl">recently added Series</p>
      </div>
      <ProductCarousel images={images} />
    </section>
  );
}