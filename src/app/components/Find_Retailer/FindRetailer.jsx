import React from 'react'
import Image from 'next/image'

const FindRetailer = () => {
    return (
        <section className='container min-h-screen'>
            <div className='grid grid-cols-2'>
                <div>

                    <Image
                        src="/landing_page/images/ratailer.png"
                        alt=""
                        className="object-contain my-44"
                        width={720}
                        height={720}
                    />
                </div>
                <div className='grid grid-rows-2'>
                    <div className='mb-4 text-6xl -ml-20 mt-56'>
                        <p>
                            Come and Let’s Make Your <br /> Dream Property Come True
                        </p>
                        <div className="border-solid border-[#ff8811] border-t border-r-[0] border-b-[0] border-l-[0] w-[474px] h-0 relative mt-5"></div>
                    </div>
                    <div className='bg-black h-1/2 -ml-10 mt-3'>
                        <form className='ml-10 pr-28 mt-12' action="">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                        </form>
                        <button
                            type="button"
                            // onClick=''
                            className="group border-[1.5px] rounded-md border-[#FF8811] text-[#FF8811] w-20 h-10 ml-10  flex justify-center items-center gap-4 -mt-2 hover:bg-[#FF8811] hover:text-[#DFD3BB]"
                        >
                            <p className="flex-none flex-grow-0 order-none text-sm font-bold leading-4">Submit</p>
                            <svg
                                width="8"
                                height="8"
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
                    </div>
                    {/* <div className='container h-1/4 w-screen bg-black -ml-10 mt-96 -mb-20'></div> */}
                </div>
            </div>
        </section>
    )
}

export default FindRetailer