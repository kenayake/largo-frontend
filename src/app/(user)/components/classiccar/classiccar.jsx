import React from 'react';

const classiccar = () => {
  return (
    <div className=" h-[300px] sm:h-[674px] relative overflow-hidden mb-8 sm:mb-16" id='car'> {/* Adjusted height */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover sm:bg-contain"
        style={{ backgroundImage: 'url("/landing_page/images/mobil.png")' }}
      >
        <div className="h-[30px] sm:h-[50px] absolute top-10 left-5 md:top-0 md:left-0 w-full flex justify-center items-center">
          <p className="mt-5 text-4xl font-medium leading-relaxed tracking-widest text-white capitalize sm:text-7xl sm:mt-10">
            Classic Car Conversion
          </p>
        </div>
        <div className="h-[30px] sm:h-[50px] absolute bottom-0 left-0 w-full flex justify-center items-center">
          <p className="-mt-10 text-4xl font-medium leading-relaxed tracking-widest text-white capitalize sm:text-7xl sm:-mt-20">
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default classiccar;
