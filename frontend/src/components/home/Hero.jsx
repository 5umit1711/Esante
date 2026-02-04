const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden">
      <img
        src="/hero.png"
        alt="Migration support"
        className="
    absolute inset-0 w-full h-full object-cover
    scale-105
    animate-hero-image
  "
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl">
          <h1
            className="
            text-4xl md:text-6xl 
            font-light leading-tight
            italic
            animate-fade-up
          "
          >
            Migration simplified,
            <br />
            <span className="font-bold not-italic">Dreams amplified.</span>
          </h1>

          <div className="mt-10 animate-fade-up animation-delay-300">
            <button
              className="
              px-8 py-3 
              border border-orange-500 
              text-orange-500 
              rounded-full
              hover:bg-orange-500 
              hover:text-white
              hover:scale-105
              transition-all duration-300
            "
            >
              Book Free Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
