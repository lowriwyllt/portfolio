"use client";

import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

const Layout = (): JSX.Element => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMenuButtonClick = (): void => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <Sidebar
        open={showSidebar}
        setOpen={setShowSidebar}
        onMenuButtonClick={handleMenuButtonClick}
      />
      <div
        className="flex justify-between text-darkPurple w-full h-[100px] top-0 left-0 fixed z-20 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm"
        ref={ref}
      >
        <div className="flex flex-row justify-between w-full">
          <Link
            href="/"
            aria-label="Home"
            className="m-5 flex flex-col items-center justify-center"
          >
            <Image
              src="/logo_Lowri_Roberts.png"
              alt="Logo Lowri Roberts - Web developer"
              width={61}
              height={50}
            />
            <p>Web Developer</p>
          </Link>
          <div className=" z-10 h-full justify-self-end flex flex-row items-center justify-end">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
