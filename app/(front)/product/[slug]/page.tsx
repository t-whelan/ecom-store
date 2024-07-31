import data from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/models/ProductModel";
import AddToCart from "@/components/products/AddToCart";

export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = data.products.find((x) => x.slug === params.slug);

  // Check if product is not found
  if (!product) {
    return <div>Product not found</div>; // Return JSX when product is undefined
  }

  // Render product details when product is found
  return (
    <>
      <div className="my-2">
        <Link href="/">Back to Products</Link>
      </div>

      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100%"
            style={{
              width: "100px",
              height: "auto",
            }}
          />
          <div>
            <ul className="space-y-4">
              <li>
                <h1 className="text-2xl">{product.name}</h1>
              </li>
              <li>
                {product.rating} of {product.numReviews} reviews
              </li>
              <li>
                {product.brand}
                <div className="divider"></div>
              </li>
              <li>Description: {product.description}</li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
          <div className="mb-2 flex justify-between">
            <div className="px-3">Price</div>
            <div className="px-5">R{product.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div className="px-3">status</div>
            <div className="px-5">
              {product.CountInStock > 0 ? "In stock" : "Unavailable"}
            </div>
          </div>
          <div className="card-actions justify-center">
            <AddToCart
              item={{
                ...product,
                qty: 0,
                color: "",
                size: "",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
