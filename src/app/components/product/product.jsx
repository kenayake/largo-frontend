import clientPromise from "@/lib/mongo_singleton";
// import { ProductCarousel } from "./product_carousel";
import ProductList from "./product_list";

export default async function Product() {
  const client = await clientPromise
    
  const productCol = client.db(process.env.DB_NAME).collection('products')
  
  const products = await productCol.find().toArray()

  return (
    <section id="product">
      <div className="md:pt-[15vh] px-[10%] pb:[20px] md:pb-[10vh] font-normal leading-10 capitalize mb-10">
        <p className="mb-4 text-6xl opacity-50">Check out our</p>
        <p className="text-7xl">recently added Series</p>
      </div>
      <div className="flex justify-center">
        <ProductList
          products={JSON.parse(JSON.stringify(products.filter((product) => product.type === "ebike")))}
        />
      </div>
    </section>  
  );
}
