import React from "react";

export default function ShopButton({ name, icon, link }) {
  return (
    <a href={link} className="flex rounded-lg bg-[#FF8811] py-1 px-4 items-center text-black align-middle space-x-2 md:text-[1.25vw] hover:cursor-pointer hover:scale-105 duration-150 transition-transform">
      {icon}
      <p>{name}</p>
    </a>
  );
}
