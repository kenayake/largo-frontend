import { ProductCarousel } from "./product_carousel";

export default async function Product() {
  const products = await fetch(`${process.env.VERCEL_ENV==='development'?'http://':'https://'}${process.env.VERCEL_URL}/api/mongo`, {
    next: { revalidate: 0 },
  }).then((res) => res.json());

  return (
    <section id="product">
      <div className="md:pt-[15vh] px-[10%] md:pb-[10vh] font-normal leading-10 capitalize mt-20 mb-10">
        <p className="mb-4 text-6xl opacity-50">Check out our</p>
        <p className="text-7xl">recently added Series</p>
      </div>
      <ProductCarousel
        products={products.filter((product) => product.type === "ebike")}
      />
    </section>
  );
}
