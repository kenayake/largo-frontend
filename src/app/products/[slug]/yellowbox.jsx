import React from "react";

const Yellowbox = ({ features }) => {
  return (
    <div class="container bg-d38e0c py-3 md:py-6 w-[90%] md:w-1/2 rounded-lg shadow absolute inset-x-0 -top-16 md:-top-28 mx-auto">
      <div className="grid justify-center grid-cols-3 text-center items-start">
        <div>
          <img
            src="/product_page/images/loog-1.png"
            alt="Image 1"
            className="overflow-hidden transition-transform duration-300 hover:scale-105 md:w-5/12 w-1/2 mx-auto mb-2"
          />
          <p className="md:text-[1.5vw] text-white">Full Charging Time</p>
          <p className="text-black md:text-[1.125vw]">{features.chargingTime}</p>
        </div>
        <div>
          <img
            src="/product_page/images/loog-2.png"
            alt="Image 1"
            className="overflow-hidden transition-transform duration-300 hover:scale-105 md:w-5/12 w-1/2 mb-2 mx-auto"
          />
          <p className="md:text-[1.5vw] text-white">Max Speed Up To</p>
          <p className="text-black md:text-[1.125vw]">{features.maxSpeed}</p>
        </div>
        <div>
          <img
            src="/product_page/images/mileage.png"
            alt="Image 1"
            className="overflow-hidden transition-transform duration-300 hover:scale-105 md:w-5/12 w-1/2 mb-2 mx-auto"
          />
          <p className="md:text-[1.5vw] text-white">Mileage</p>
          <p className="text-black md:text-[1.125vw]">{features.mileage}</p>
        </div>
      </div>
    </div>
  );
};

export default Yellowbox;
