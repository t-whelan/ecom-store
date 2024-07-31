"use client";

import useCartService from "@/lib/hooks/UseCartStore";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Menu = () => {
  const { items } = useCartService();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      <ul className="flex items-stretch"></ul>
      <li className="list-none">
        <Link className="btn btn-ghost rounded-btn" href="/cart">
          Cart
          {mounted && items.length != 0 && (
            <div className="badge badge-secondary">
              {items.reduce((a, c) => a + c.qty, 0)}
              {""}
            </div>
          )}
        </Link>
      </li>
      <li className="list-none">
        <button className="btn btn-ghost rounded-btn" type="button">
          Sign In
        </button>
      </li>
    </div>
  );
};

export default Menu;
