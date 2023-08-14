export default function Video() {
  return (
    <section className='relative w-full h-96 md:h-[calc(100vh*110/100)] mb-28 md:mb-0' id="video">
      <div className="mt-8 text-6xl font-medium leading-relaxed tracking-widest text-center capitalize md:mt-16"> {/* Adjusted margin-top */}
        Handcrafted E-Bike
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 w-full bg-[#030A0D] invisible md:visible" />
      <div className="flex items-center content-center justify-center w-full h-full ">
        <video
          src="/landing_page/video/video_largo.mp4"
          autoPlay
          loop
          controls
          muted
          className="z-10 w-full -mt-32 md:w-9/12"
        />
      </div>
    </section>
  );
}
