import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const imagesTop = [
  "/icons/kangaroo.png",
  "/icons/students.png",
  "/icons/city.png",
  "/icons/culture.png",
  "/icons/opera.png",
  "/icons/melbourne.png",
  "/icons/handshake.png",
  "/icons/beach.png",
];

const imagesBottom = [
  "/icons/passport.png",
  "/icons/flag.png",
  "/icons/documents.png",
  "/icons/buildings.png",
  "/icons/taxi.png",
  "/icons/arrow.png",
  "/icons/campus.png",
  "/icons/celebration.png",
];

const Journey = () => {
  const ref = useRef(null);

  // Scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // TOP ICONS → from LEFT
  const topX = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const topOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);

  // BOTTOM ICONS → from RIGHT
  const bottomX = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);

  // TEXT
  const textLeftX = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const textRightX = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section
      ref={ref}
      className="w-full bg-white pt-32 pb-32 flex flex-col justify-center"
    >

      {/* TOP ICONS */}
      <div className="w-full grid grid-cols-4 gap-x-14 gap-y-16 place-items-center px-20">
        {imagesTop.map((img, i) => (
          <motion.div
            key={i}
            style={{
              x: topX,
              opacity: topOpacity,
            }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "tween", duration: 0.25 }}
            className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden will-change-transform"
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* CENTER TEXT */}
      <div className="text-center my-24 px-6 overflow-hidden">
        <motion.p
          style={{
            x: textLeftX,
            opacity: textOpacity,
          }}
          className="text-2xl md:text-3xl text-gray-700 leading-relaxed"
        >
          <span className="italic">From dreaming in your room</span> to
        </motion.p>

        <motion.p
          style={{
            x: textRightX,
            opacity: textOpacity,
          }}
          className="text-2xl md:text-3xl font-semibold text-orange-500 mt-4"
        >
          living in another country.
        </motion.p>
      </div>

      {/* BOTTOM ICONS */}
      <div className="w-full grid grid-cols-4 gap-x-14 gap-y-16 place-items-center px-20">
        {imagesBottom.map((img, i) => (
          <motion.div
            key={i}
            style={{
              x: bottomX,
              opacity: bottomOpacity,
            }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "tween", duration: 0.25 }}
            className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden will-change-transform"
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Journey;
