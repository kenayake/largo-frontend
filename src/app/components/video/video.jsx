export default function Video() {
  return (
    <section id="video">
      <div className="md:pt-[15vh] px-[10%] md:pb-[10vh] font-normal leading-10 capitalize mt-32 md:mt-0 text-center">
        <p className="text-7xl">Handcrafted E-Bike</p>
      </div>
      <div className="w-full h-[200px] md:h-[525px] flex items-center justify-center my-20 md:my-0">
        <video
          src="/landing_page/video/video_largo.mp4"
          autoPlay
          loop
          controls
          muted
          className="h-full max-w-full"
        />
      </div>
    </section>
  );
}
