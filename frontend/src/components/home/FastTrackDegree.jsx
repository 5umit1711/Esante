import { useState } from "react";
import { motion } from "framer-motion";

const programs = {
  Management: [
    {
      title: "Masters in Business Management",
      image: "/fast-track/management-1.png",
      description:
        "Lorem ipsum opms herist Lorem ipsum opms herist Lorem ipsum opms herist Lorem ipsum herist Lorem ipsuna...",
    },
    {
      title: "Masters in Business Management",
      image: "/fast-track/management-2.png",
      description:
        "Lorem ipsum opms herist Lorem ipsum opms herist Lorem ipsum opms herist Lorem ipsum herist Lorem ipsuna...",
    },
  ],
  Engineering: [],
  Medical: [],
};

const skills = [
  { title: "Nurses", image: "/fast-track/nurses.png" },
  { title: "Chefs", image: "/fast-track/chefs.png" },
  { title: "Information Technology", image: "/fast-track/it.png" },
];

const fromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FastTrackDegree = () => {
  const [activeTab, setActiveTab] = useState("Management");

  return (
    <section className="w-full bg-[#FFFDF6] py-32">
      <div className="w-full px-20">

        {/* SECTION HEADING */}
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Fast-Track Your <span className="text-orange-500 italic">Degree</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Foundation and diploma programs designed for university success.
          </p>
        </motion.div>

        {/* PROGRAM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-28">
          {programs[activeTab].map((item, i) => {
            const variant = i % 2 === 0 ? fromLeft : fromRight;

            return (
              <motion.div
                key={i}
                variants={variant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "tween",
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
                className="rounded-2xl overflow-hidden bg-[#003C32] text-white will-change-transform"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-65 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-4">
                    {item.description}
                  </p>
                  <a href="#" className="text-sm underline">
                    Explore More
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((item, i) => {
            const variant =
              i === 0 ? fromLeft : i === 2 ? fromRight : fadeUp;

            return (
              <motion.div
                key={i}
                variants={variant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "tween",
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
                className="rounded-2xl overflow-hidden bg-[#003C32] text-white will-change-transform"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Lorem ipsum opms herist Lorem ipsum opms herist Lorem ipsum
                    opms herist Lorem ipsum herist Lorem ipsuna...
                  </p>
                  <a href="#" className="text-sm underline">
                    Explore More
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FastTrackDegree;
