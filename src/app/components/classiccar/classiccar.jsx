import React from 'react';

const classiccar = () => {
  return (
    <div className="w-screen h-[674px] relative overflow-hidden mb-16" id='car'>
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover sm:bg-contain"
        style={{ backgroundImage: 'url("/landing_page/images/mobil.png")' }}
      >
        <div className="h-[50px] absolute top-0 left-0 w-full flex justify-center items-center">
          <p className="font-medium leading-relaxed tracking-widest capitalize text-7xl mt-10 text-white">Classic Car Conversion</p>
        </div>
        <div className="h-[50px] absolute bottom-0 left-0 w-full flex justify-center items-center">
          <p className="font-medium leading-relaxed tracking-widest capitalize text-7xl -mt-20 text-white">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default classiccar;