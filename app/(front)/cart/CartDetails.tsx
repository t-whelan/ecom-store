"use client";
import useCartService from "@/lib/hooks/UseCartStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function CartDetails() {
  const router = useRouter();
  const { items, itemsPrice, decrease, increase } = useCartService();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;

  return (
    <>
      <h1 className="py-4 text-2xl">Shopping Cart</h1>
      {items.length === 0 ? (
        <div>
          Your Cart is empty...{" "}
          <Link href="/">
            <p>GO Shopping</p>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qauntity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.slug}>
                    <td>
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        <span className="px-2">{item.name}</span>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn"
                        type="button"
                        onClick={() => decrease(item)}
                      >
                        -
                      </button>
                      <span className="px-2">{item.qty}</span>
                      <button
                        className="btn"
                        type="button"
                        onClick={() => increase(item)}
                      >
                        +
                      </button>
                    </td>
                    <td>R{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card bg:base-300">
            <div className="card-body">
              <ul>
                <li>
                  <div className="pb-3 text-xl">
                    Subtotal ({items.reduce((a, c) => a + c.qty, 0)}) : R
                    {itemsPrice}
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/shipping")}
                    className="btn btn-primary w-full"
                  >
                    Proceed to Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
