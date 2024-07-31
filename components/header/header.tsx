import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
const Header = () => {
  return (
    <div>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            <Image
              src="/images/motor-logo.png"
              alt="logo"
              width={70}
              height={30}
              style={{
                borderRadius: " 15",
              }}
            />
            BMW LifeStyle Store
          </Link>
          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default Header;
