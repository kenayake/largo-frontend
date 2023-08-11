import React from 'react'
import Image from 'next/image'
import { ProdCarousel } from './ProdCarrousel';
import Product from '../product/product';
import Yellowbox from './yellowbox';

const ProductDetail = () => {

    const images = ['HXR2.png', 'HXR1.png', 'HXR.png', 'UWxLargo.png'];

    return (
        <section>
            <div className='grid grid-cols-2 px-[10%] pb-[10vh] mt-36'>
                <div className='text-7xl'>
                    <Image src="/landing_page/images/hx2r.png" alt="Image Alt Text" height={620} width={528} />
                </div>
                <div className='text-7xl  col-span-2 md:col-span-1'>
                    HXR2 Series
                    <br />
                    <div
                        className="text-[#d38e0c] text-left relative w-[272px] h-[43px] -mb-20 mt-14"
                        style={{ font: "500 32px/33.5px 'Oswald', sans-serif" }}
                    >
                        SPECIFICATION :
                    </div>
                    <br />
                    <div
                        className="text-[#dfd3bb] text-left relative w-[666px] h-[455px]"
                        style={{ font: "500 22px/33.5px 'Oswald', sans-serif" }}
                    >
                        Powdercoat Paint
                        <br />
                        Mid Drive BLDC 48v / 960 watt
                        <br />
                        Distance Range 45 km
                        <br />
                        Handmade Vintage Frame Set
                        <br />
                        Handmade Springer Fork
                        <br />
                        Special Design Seat Suspension Features
                        <br />
                        Soft Compound Saddle
                        <br />
                        Aluminium Box Battery &amp; Controller
                        <br />
                        10” LED Headlamp
                        <br />
                        Schwalbe Fat Frank 26 x 23.5
                        <br />
                        Rim Alloy TCM Double Wall (50 mm wide)
                        <br />
                        Drum Brake for Ebike
                        <br />
                        Special Part Designed and Produce by CNC, Lassercut{" "}
                    </div>
                </div>

            </div>

            <Yellowbox/>
            
            <ProdCarousel images={images} />        

        </section>


    );
};

export default ProductDetail