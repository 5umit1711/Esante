import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

const FastTrackDegree = () => {
  const [activeTab] = useState("Management");
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const rightX = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.95, 1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFDF6] py-32"
    >
      <div className="w-full px-20">

        {/* SECTION HEADING */}
        <motion.div
          style={{ x: leftX, opacity: fade }}
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
            const x = i % 2 === 0 ? leftX : rightX;

            return (
              <motion.div
                key={i}
                style={{ x, opacity: fade, scale }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden bg-[#003C32] text-white will-change-transform"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-65 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
            const x = i === 0 ? leftX : i === 2 ? rightX : 0;

            return (
              <motion.div
                key={i}
                style={{ x, opacity: fade, scale }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden bg-[#003C32] text-white will-change-transform"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
