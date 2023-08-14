'use client'
import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import Image from 'next/image'
import { IoMenu, IoClose } from "react-icons/io5";
import AboutUs from "../AboutUs/aboutus";
const Nav = () => {
  let Links = [
    { name: "HOME", link: "#hero" },
    { name: "ABOUT US", link: "#video" },
    { name: "PRODUCT & SERVICES", link: "#product" },
    // { name: "FIND A RETAILER", link: "#findretailer" },
    { name: "CONTACT US", link: "#footer" },
  ];
  
  let [open, setOpen] = useState(false);
  let [navbarBackground, setNavbarBackground] = useState("transparent");
  let [selectedElement, setSelectedElement] = useState(Links[0].name);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setNavbarBackground("black");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top:0, behavior: 'smooth'});
  }

  return (
    <div
      className={`w-full fixed top-0 left-0 ${navbarBackground === "black" ? "bg-black" : "bg-transparent"} transition-all duration-300 z-50`}
    >
      <div className="justify-between bg-transparent md:items-stretch md:flex md:pl-48 px-7">
        {navbarBackground === "black" && (
          <Image src={logo} alt="Logo" className="object-cover w-24 h-12 my-2 cursor-pointer" onClick={handleScrollToTop} />
        )}
        <div className="font-bold text-2xl font-[Oswald] text-gray-800 w-28"></div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden"
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>

        <ul
          className={`md:flex md:pb-0 pb-12 absolute md:static ${navbarBackground === "black" ? "bg-black" : "bg-transparent"} md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className={`text-xl font-semibold md:flex ${selectedElement === link.name ? "border-b-4 border-b-[#FF8811]" : ""} md:px-4 md:h-full md:my-0 my-7 md:items-center`} style={{ height: "72px" }}
            >
              <a
                href={link.link}
                className={`${selectedElement === link.name ? "text-[#FF8811]" : "text-[#DFD3BB]"} opacity-100 hover:text-gray-400 duration-500`}
                onClick={() => setSelectedElement(link.name)}
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
