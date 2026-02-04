import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WhyAustralia = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // LEFT CONTENT
  const textX = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);

  // STATS
  const statY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const statOpacity = useTransform(scrollYProgress, [0.15, 0.5, 0.9], [0, 1, 0]);

  // IMAGE
  const imageX = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);

  return (
    <section
      ref={ref}
      className="w-full bg-[#FBF9F4] py-32"
    >
      <div className="w-full px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          style={{
            x: textX,
            opacity: textOpacity,
          }}
          className="will-change-transform"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Why <span className="text-orange-500 italic">Australia</span> is the
            <br />
            Global Destination of Choice
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed max-w-xl">
            With 42 top universities, studying in Australia offers high-quality
            education, career opportunities, and cultural experience. It is
            known for its globally recognized degrees, research facilities, and
            strong industry connections, making it one of the top destinations
            for international students.
          </p>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            {[
              { value: "140,000+", text: "skilled and family visas granted" },
              { value: "1.9m+", text: "temporary visas granted" },
              { value: "13,000+", text: "humanitarian visas granted" },
            ].map((item, i) => (
              <motion.div
                key={i}
                style={{
                  y: statY,
                  opacity: statOpacity,
                }}
                className="will-change-transform"
              >
                <p className="text-3xl font-bold text-orange-500">
                  {item.value}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          style={{
            x: imageX,
            opacity: imageOpacity,
          }}
          className="relative w-full h-130 lg:ml-auto will-change-transform"
        >
          <motion.img
            src="/why-australia.png"
            alt="Why study in Australia"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="absolute inset-0 rounded-3xl bg-black/10 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

export default WhyAustralia;
