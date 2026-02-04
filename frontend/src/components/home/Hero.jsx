import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden">

      <motion.img
        src="/hero.png"
        alt="Migration support"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{
          duration: 1.6,
          ease: "easeOut",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl overflow-hidden">

          <motion.h1
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="text-4xl md:text-6xl font-light leading-tight italic"
          >
            Migration simplified,
          </motion.h1>

          <motion.h1
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="text-4xl md:text-6xl font-bold not-italic"
          >
            Dreams amplified.
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.2,
              ease: "easeOut",
            }}
            className="mt-10"
          >
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
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
