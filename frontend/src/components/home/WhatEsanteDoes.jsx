import { motion } from "framer-motion";

const features = [
  {
    title: "Migration Advisors",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    points: [
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
    ],
    image: "/what-we-do/migration.png",
    bg: "bg-[#003C32]",
    titleColor: "text-orange-500",
    button: "bg-orange-500 text-white",
  },
  {
    title: "Education & Training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    points: [
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
    ],
    image: "/what-we-do/education.png",
    bg: "bg-orange-500",
    titleColor: "text-white",
    button: "bg-white text-black",
  },
];

const fromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const WhatEsanteDoes = () => {
  return (
    <section className="w-full bg-white py-32">
      <div className="w-full px-20">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            What <span className="text-orange-500">Esante</span> Does For You?
          </h2>
          <p className="mt-4 text-gray-600">
            A thriving economy, top-tier education, and an unmatched lifestyle await.
          </p>
        </motion.div>

        {/* FEATURE BLOCKS */}
        <div className="rounded-[40px] overflow-hidden">
          {features.map((item, i) => {
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className={`${item.bg} text-white grid grid-cols-1 lg:grid-cols-2`}
              >

                {/* IMAGE FIRST (ONLY FOR ODD / EDUCATION) */}
                {!isEven && (
                  <motion.div
                    variants={fromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="p-12 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative w-full h-105 rounded-3xl overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  </motion.div>
                )}

                {/* CONTENT */}
                <motion.div
                  variants={isEven ? fromLeft : fromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="p-16 flex flex-col justify-center"
                >
                  <h3 className={`text-3xl font-semibold mb-4 ${item.titleColor}`}>
                    {item.title}
                  </h3>

                  <p className="opacity-90 mb-6 max-w-xl">
                    {item.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✔</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`px-6 py-3 rounded-lg w-fit font-medium ${item.button}`}
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                {/* IMAGE LAST (ONLY FOR EVEN / MIGRATION) */}
                {isEven && (
                  <motion.div
                    variants={fromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="p-12 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative w-full h-105 rounded-3xl overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  </motion.div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatEsanteDoes;
