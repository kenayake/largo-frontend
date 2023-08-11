import { ProductCarousel } from "./product_carousel";

export default function Product() {

  const images = ['image-8.png', 'image-9.png', 'uwxlargo.jpeg', 'AboutUs.png'];

  return (
    <section>
      <div className="pt-[15vh] px-[10%] pb-[10vh] font-normal leading-10 capitalize mt-20 mb-10">
        <p className="mb-4 text-6xl opacity-50">Check out our</p>
        <p className="text-7xl">recently added Series</p>
      </div>
      <ProductCarousel images={images} />
    </section>
  );
}