import React from 'react'

const Yellowbox = () => {
  return (
<div class="h-0 bg-black bg-opacity-25 flex justify-center items-center mb-48 mt-20">
  <div class="container bg-d38e0c h-56 w-1/2 rounded-lg shadow">
    <div className='grid items-center justify-center grid-cols-3 mt-8 text-center'>
      <div><img src="/landing_page/images/loog-1.png" alt="Image 1" className="mx-auto overflow-hidden transition-transform duration-300 hover:scale-105" />Full Charging Time <br />4 - 6 Hours</div>
      <div><img src="/landing_page/images/loog-2.png" alt="Image 1" className="mx-auto overflow-hidden transition-transform duration-300 hover:scale-105" />Max Speed Up To <br />55 km/h</div>
      <div><img src="/landing_page/images/loog-3.png" alt="Image 1" className="mx-auto overflow-hidden transition-transform duration-300 hover:scale-105" />3 Months <br />Battery Guarantee</div>
    </div>
  </div>
</div>
  );
}

export default Yellowbox