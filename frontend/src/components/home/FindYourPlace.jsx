import { motion } from "framer-motion";

const fromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const hoverTween = {
  type: "tween",
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1],
};

const FindYourPlace = () => {
  return (
    <section className="w-full bg-white py-32">
      <div className="w-full px-20">

        {/* SECTION HEADING */}
        <motion.div
          variants={fromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Find Your Place in{" "}
            <span className="text-orange-500 italic">Australia</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Explore major hubs for education and employment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CARD (CLASSROOM) */}
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.04, transition: hoverTween }}
            className="relative rounded-3xl overflow-hidden will-change-transform"
          >
            <img
              src="/find-place/classroom.png"
              alt="University classroom"
              className="w-full h-130 object-cover"
            />

            <div className="absolute top-4 left-4 bg-[#003C32] text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
              🏆 Ranked #1 in Australia
            </div>

            <div className="absolute bottom-4 right-4 bg-white text-[#003C32] text-sm px-4 py-2 rounded-full flex items-center gap-2">
              👥 54,000+ Students
            </div>

            <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>

          {/* RIGHT CARD (UNIVERSITY DETAILS) */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.04, transition: hoverTween }}
            className="bg-[#003C32] text-white rounded-3xl p-10 relative will-change-transform"
          >
            <img
              src="/find-place/melbourne.png"
              alt="Melbourne"
              className="w-full h-45 object-cover rounded-2xl mb-6"
            />

            <span className="inline-block bg-white/20 text-sm px-3 py-1 rounded-full mb-4">
              Melbourne, Victoria
            </span>

            <h3 className="text-2xl font-semibold mb-2">
              The University of Melbourne
            </h3>

            <p className="text-sm opacity-90 mb-4">
              Known for Law, Medicine & Health, Psychology
            </p>

            <p className="text-sm mb-6">
              🔵 #14 globally (QS 2024)
            </p>

            <button className="border border-white px-5 py-2 rounded-lg text-sm hover:bg-white hover:text-[#003C32] transition">
              Download Brochure
            </button>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                ‹
              </button>
              <div className="w-24 h-0.5 bg-gray-300 relative">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-orange-500" />
              </div>
              <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
                ›
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FindYourPlace;
