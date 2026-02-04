import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CTA = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.92, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4, 1], [20, 0, 20]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFDF6] py-24"
    >
      <div className="px-20">

        <motion.div
          style={{ scale, opacity }}
          className="
            w-full
            rounded-[40px]
            bg-linear-to-br from-orange-500 via-orange-400 to-orange-600
            py-20 px-10
            text-center
            text-white
            will-change-transform
          "
        >
          <motion.h2
            style={{ y: textY, opacity }}
            className="text-3xl md:text-4xl font-semibold mb-4"
          >
            Ready To Start Your{" "}
            <span className="italic">Australian</span> Journey?
          </motion.h2>

          <motion.p
            style={{ y: textY, opacity }}
            className="max-w-2xl mx-auto text-lg opacity-90 mb-8"
          >
            Let Our Experts In Mumbai And Brisbane Guide You Every
            <br />
            Step Of The Way.
          </motion.p>

          {/* NORMAL BUTTON */}
          <button
            className="
              bg-white text-orange-500
              px-8 py-3
              rounded-full
              font-medium
              transition-transform duration-200 ease-out
              hover:scale-105
              hover:bg-orange-100
            "
          >
            Book Free Call
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
