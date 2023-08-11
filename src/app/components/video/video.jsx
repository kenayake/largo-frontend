export default function Video() {
  return (
    <section className="relative w-full h-[calc(100vh*110/100)]">
      <div className="font-medium leading-relaxed tracking-widest capitalize text-7xl text-center">
      Handcrafted E-Bike
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 w-full bg-[#030A0D]" />
      <div className="flex content-center justify-center w-full h-full ">
      


        <video
          src="/landing_page/video/video_largo.mp4"
          // type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
          autoPlay
          loop
          controls
          muted
          className="z-10 w-9/12 -mt-32"
        />
        {/* <h1 className="absolute inset-x-0 font-bold leading-10 tracking-widest text-center capitalize -top-8 text-7xl">
          Handcrafted e-Bike
        </h1> */}
      </div>
    </section>
  );
}
