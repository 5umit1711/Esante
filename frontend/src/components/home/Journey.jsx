import { motion } from "framer-motion";

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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const itemFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const textFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const textFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const Journey = () => {
  return (
    <section className="w-full bg-white pt-32 pb-32 flex flex-col justify-center">

      {/* TOP ICONS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full grid grid-cols-4 gap-x-14 gap-y-16 place-items-center px-20"
      >
        {imagesTop.map((img, i) => (
          <motion.div
            key={i}
            variants={itemFromLeft}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden"
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

      {/* CENTER TEXT */}
      <div className="text-center my-24 px-6 overflow-hidden">
        <motion.p
          variants={textFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-gray-700 leading-relaxed"
        >
          <span className="italic">From dreaming in your room</span> to
        </motion.p>

        <motion.p
          variants={textFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-semibold text-orange-500 mt-4"
        >
          living in another country.
        </motion.p>
      </div>

      {/* BOTTOM ICONS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full grid grid-cols-4 gap-x-14 gap-y-16 place-items-center px-20"
      >
        {imagesBottom.map((img, i) => (
          <motion.div
            key={i}
            variants={itemFromRight}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden"
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Journey;
