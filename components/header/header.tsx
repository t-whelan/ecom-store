import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
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
