"use client"

import { useRouter } from 'next/navigation'; // Import from 'next/router'

export default function BrowseProductButton() {
  const router = useRouter();

  // const handleButtonClick = () => {
  //   // Use an absolute path for routing
  //   router.push('.  /FindRetailer'); // Corrected path
  // };


  return (
    <button
      type="button"
      onClick={() => router.push('./FindRetailer')}
      className="group border-[1.5px] rounded-md border-[#FF8811] text-[#FF8811] w-40 h-12 flex justify-center items-center gap-4 mt-7 hover:bg-[#FF8811] hover:text-[#DFD3BB]"
    >
      <p className="flex-none flex-grow-0 order-none text-sm font-bold leading-4">Find Retailer</p>
      <svg
        width="12"
        height="12"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#FF8811] group-hover:fill-[#DFD3BB]"
      >
        <path
          d="M14.5563 5.50005L2.72185 17.3345L0.721803 15.3345L12.5563 3.50001L1.97691 3.35116L1.93767 0.562331L17.2782 0.778175L17.494 16.1187L14.7052 16.0794L14.5563 5.50005Z"
        />
      </svg>
    </button>
  );
}
