"use client";
import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import AboutUs from "../../about-us/page";

import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about-us" },
    { name: "PRODUCT & SERVICES", link: "/#product" },
    { name: "NEWS & COLLAB", link: "/news" },
  ];
  let pathname = usePathname();

  let [open, setOpen] = useState(false);
  let [navbarBackground, setNavbarBackground] = useState("transparent");
  let [selectedElement, setSelectedElement] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // let [selectedElement, setSelectedElement] = useState(Links[0].name);

  useEffect(() => {
    console.log(`Route changed to: ${pathname}`);
  }, [pathname]);

  useEffect(() => {
    if (isMobile) {
      setNavbarBackground("black");
    } else {
      setNavbarBackground("transparent");
    }
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the window width

      if (isMobile) {
        setNavbarBackground("black");
      } else {
        if (scrollPosition > 500) {
          setNavbarBackground("black");
        } else {
          setNavbarBackground("transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuItemClick = (linkName) => {
    setSelectedElement(false);
    // setSelectedElement(linkName);
    setOpen(false);
  };

  return (
    <div
      className={`fixed inset-x-0 top-0  ${
        pathname === "/"
          ? navbarBackground === "black"
            ? "bg-black"
            : "bg-transparent"
          : "bg-black"
      } duration-300 z-50`}
    >
      <div
        className={`justify-between bg-transparent md:items-stretch md:flex md:pl-48 px-7`}
      >
        {!open ? (
          <Image
            src={logo}
            alt="Logo"
            className={`object-cover w-24 h-12 my-2 cursor-pointer duration-30 ${
              !open ? "visible" : "hidden"
            }`}
            onClick={handleScrollToTop}
          />
        ) : null}

        <div className="font-bold text-2xl font-[Oswald] text-gray-800 w-28"></div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden"
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>

        <ul
          className={`md:flex items-center pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 duration-300 pt-6
          md:pt-0 bg-black md:bg-transparent ${
            open ? "top-0" : "top-[-490px]"
          }`}
        >
          {open ? (
            <Image
              src={logo}
              alt="Logo"
              className={`object-cover w-24 h-12 mb-7 cursor-pointer duration-300 `}
            />
          ) : null}

          {Links.map((link) => (
            <li
              key={link.name}
              className={`h-[52px] whitespace-nowrap text-xl font-semibold md:flex ${
                selectedElement === link.name
                  ? "border-b-4 border-b-[#FF8811]"
                  : ""
              } md:px-4 md:h-full my-3 md:items-center `}
            >
              <a
                href={link.link}
                className={`${
                  selectedElement === link.name
                    ? "text-[#FF8811]"
                    : "text-[#DFD3BB]"
                } opacity-100 hover:text-gray-400 duration-300`}
                onClick={() => handleMenuItemClick(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
