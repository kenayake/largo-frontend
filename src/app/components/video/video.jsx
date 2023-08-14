export default function Video() {
  return (
    <section className="relative w-full h-[calc(100vh*110/100)]" id="video">
      <div className="font-medium leading-relaxed tracking-widest capitalize text-6xl text-center mt-8 md:mt-16"> {/* Adjusted margin-top */}
        Handcrafted E-Bike
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 w-full bg-[#030A0D]" />
      <div className="flex content-center justify-center w-full h-full items-center ">
        <video
          src="/landing_page/video/video_largo.mp4"
          autoPlay
          loop
          controls
          muted
          className="z-10 w-full md:w-9/12 -mt-32"
        />
      </div>
    </section>
  );
}
