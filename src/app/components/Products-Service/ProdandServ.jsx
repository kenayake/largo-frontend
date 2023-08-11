import React from "react";

const ProdandServ = () => {
  return (
    <div className="pt-[15vh] px-[10%] pb-[10vh] font-normal leading-10 capitalize mt-20 mb-10">
      <p className="mb-4 text-6xl opacity-50 text-center">Product and Services</p>
      <div className="grid grid-cols-2 text-center mt-14">
        <div className="text-7xl px-3">
          Largo E-Bike
          <img src="/landing_page/images/prodserv-1.png" alt="Largo E-Bike" className="mx-auto mt-8 overflow-hidden transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="text-6xl mt-3 px-3">
          Classic Car Conversion
          <img src="/landing_page/images/Prodserv-2.png" alt="Classic Car Conversion" className="mx-auto mt-8 overflow-hidden transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </div>
  );
}

export default ProdandServ;