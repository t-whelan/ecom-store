import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            <Image
              src="/images/bmw-logo.png"
              alt="logo"
              width={70}
              height={30}
            />
            BMW LifeStyle Store
          </Link>
          <ul className="flex">
            <li>
              <Link className="btn btn-ghost rounded-btn" href="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost rounded-btn" href="/signin">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
