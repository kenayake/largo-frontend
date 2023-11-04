import React from "react";

const Yellowbox = () => {
  return (
    // <div class="bg-black bg-opacity-25 flex justify-center items-center pb-48 pt-20">
      
    // </div>
    <div class="container bg-d38e0c py-6 w-3/4 md:w-1/2 rounded-lg shadow absolute inset-x-0 -top-2">
        <div className="grid items-center justify-center grid-cols-3 mt-8 text-center">
          <div>
            <img
              src="/product_page/images/loog-1.png"
              alt="Image 1"
              className="mx-auto overflow-hidden transition-transform duration-300 hover:scale-105"
            />
            Full Charging Time <br />4 - 6 Hours
          </div>
          <div>
            <img
              src="/product_page/images/loog-2.png"
              alt="Image 1"
              className="mx-auto overflow-hidden transition-transform duration-300 hover:scale-105"
            />
            Max Speed Up To <br />
            55 km/h
          </div>
          <div>
            <img
              src="/product_page/images/loog-3.png"
              alt="Image 1"
              className="mx-auto overflow-hidden transition-transform duration-300 hover:scale-105"
            />
            3 Months <br />
            Battery Guarantee
          </div>
        </div>
      </div>
  );
};

export default Yellowbox;
