import React from "react";

import Largo from "./images/Largo Logo.png";

import Blogger from "./images/jam_blogger.png";

import Instagram from "./images/bi_instagram.png";

import Youtube from "./images/bi_youtube.png";

import Image from 'next/image' 

//TODO: TAR GANTI IMAGE JD SVG
//MUNGKIN

export default function Footer() {
    return (
        <footer className="w-full text-white bg-black " id="footer">
            <div className="grid grid-cols-1 overflow-x-hidden md:grid-cols-2 xl:grid-cols-5 justify-items-center">
                <div className="order-last mb-16 md:h-max md:mb-0 xl:mb-16 md:order-first md:ml-16 md:mt-16 md:visible">
                    <Image src={Largo} alt="" className="w-[150px] h-[83px] mb-6" />
                    <div className="flex justify-between w-full p-2 space-x-6 md:space-x-4 lg:space-x-6">
                        <a href="https://www.instagram.com/largo_ebike/" target="_blank"><Image src={Instagram} alt="" /></a>
                        <a href="https://www.youtube.com/watch?v=GI2B-vfgUnE" target="_blank"><Image src={Youtube} alt="" /></a>
                        <Image src={Blogger} alt="" />
                    </div>
                </div>
                <ul className="flex flex-col px-12 mt-16 lg:ml-12 2xl:ml-24 xl:ml-12 md:mt-16 md:px-0 xl:mb-32 md:justify-self-start">
                    <li className="">
                        <h1 className="text-lg font-semibold leading-9">
                            Get to know us more
                        </h1>
                    </li>
                    <li className="mt-6">
                        <p>
                            Largo is a garage that specialize in creating handcrafted E-bikes that combine modern technology with vintage aesthetics.
                        </p>
                    </li>
                    <li className="mt-4">
                        <div className="flex px-5 pt-3 pb-4 border border-white rounded-lg w-80">
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Email"
                                className="flex-1 text-white bg-transparent placeholder:text-white focus:outline-none"
                            />
                            <a href="">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.99992 1.05737L15.8053 6.86137L14.8613 7.80537L10.6666 3.60937V16H9.33325V3.60937L5.13859 7.80537L4.19459 6.86137L9.99992 1.05737ZM18.6666 17.3334V18.6667H1.33325V17.3334H18.6666Z"
                                        fill="white"
                                    />
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
                <div className="grid w-full grid-cols-2 col-span-3 md:grid-cols-3">
                    <div className="mt-16 justify-self-center md:justify-self-end">
                        <h1 className="text-2xl font-semibold leading-9 ">Company</h1>
                        <div className="space-y-2.5">
                            <p>
                                <a href="" className=" hover:underline">
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href="" className=" hover:underline">
                                    About Us
                                </a>
                            </p>
                            <p>
                                <a href="" className=" hover:underline">
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <a href="" className=" hover:underline">
                                    Testimonials
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 justify-self-center">
                        <h1 className="text-2xl font-semibold leading-9 ">Ride</h1>
                        <div className="space-y-2.5">
                            <p>
                                <a href="" className=" hover:underline">
                                    HXR Series
                                </a>
                            </p>
                            <p>
                                <a href="" className=" hover:underline">
                                    HXR2 Series
                                </a>
                            </p>
                            <p>
                                <a href="" className=" hover:underline">
                                    L Series
                                </a>
                            </p>
                            <p>
                                <a href="" className=" hover:underline">
                                    LX Series
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 mb-16 justify-self-center md:justify-self-start">
                        <h1 className="text-2xl font-semibold leading-9 ">Find More</h1>
                        <div className="space-y-2.5">
                            <p>
                                <a href="" className=" hover:underline">
                                    Sustainability
                                </a>
                            </p>
                            <p>
                                <a href="" className=" hover:underline">
                                    Find a retailer
                                </a>
                            </p>
                            <p>
                                <a href="" className=" hover:underline">
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <a href="" className=" hover:underline">
                                    Testimonials
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="flex justify-center pb-4 text-sm font-semibold bg-black">
                Copyright 2023&nbsp;
                <span>
                    <Image src={Largo} alt="" className="w-[35px] h-[20px] " />
                </span>
                &nbsp;All rights reserved.
            </p>
        </footer>
    );
}
