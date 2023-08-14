import React from 'react';

const classiccar = () => {
  return (
    <div className="w-screen h-[300px] sm:h-[674px] relative overflow-hidden mb-8 sm:mb-16" id='car'> {/* Adjusted height */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover sm:bg-contain"
        style={{ backgroundImage: 'url("/landing_page/images/mobil.png")' }}
      >
        <div className="h-[30px] sm:h-[50px] absolute top-10 left-5 md:top-0 md:left-0 w-full flex justify-center items-center">
          <p className="font-medium leading-relaxed tracking-widest capitalize text-4xl sm:text-7xl mt-5 sm:mt-10 text-white">
            Classic Car Conversion
          </p>
        </div>
        <div className="h-[30px] sm:h-[50px] absolute bottom-0 left-0 w-full flex justify-center items-center">
          <p className="font-medium leading-relaxed tracking-widest capitalize text-4xl sm:text-7xl -mt-10 sm:-mt-20 text-white">
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default classiccar;
