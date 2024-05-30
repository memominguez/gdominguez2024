"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/guillermo-logo.png";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className="h-[110px] bg-slate-700 mx-auto flex justify-between items-center w-[375px] px-6
        md:w-[768px] md:px-10 xl:w-[1280px]"
    >
      <Image src={Logo} width={90} height={90} alt="" />

      <nav className="hidden md:flex gap-10">
        <Link href="/" className="text-slate-200">
          Home
        </Link>
        <Link href="/contact" className="text-slate-200">
          Contact
        </Link>
      </nav>

      <button className="p-2 md:hidden " onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <Image src="./close-white.svg" width={30} height={30} alt="CLOSE" />
        ) : (
          <Image
            src="./hamburger-white.svg"
            width={30}
            height={30}
            alt="OPEN"
          />
        )}
      </button>
    </header>
  );
}
