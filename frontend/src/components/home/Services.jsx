import { motion } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "For Students",
    subtitle: "World - Class Education",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "For Professionals",
    subtitle: "Advance Your Career",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "For Migration",
    subtitle: "Advance Your Career",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const headingFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const textFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const videoReveal = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

const Services = () => {
  return (
    <section className="w-full bg-white py-32">
      <div className="w-full px-20">

        {/* TOP TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 overflow-hidden">
          <motion.h2
            variants={headingFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-semibold text-gray-900"
          >
            Everything You Need for
            <br />
            Your <span className="text-orange-500">Australia Dream</span>
          </motion.h2>

          <motion.p
            variants={textFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-gray-600 leading-relaxed max-w-xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
        </div>

        {/* VIDEO CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {services.map((item, i) => {
            const videoRef = useRef(null);

            return (
              <motion.div
                key={i}
                variants={videoReveal}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: i * 0.15,
                }}
                className="relative group rounded-3xl overflow-hidden cursor-pointer"
                onMouseEnter={() => videoRef.current?.play()}
                onMouseLeave={() => videoRef.current?.pause()}
              >
                {/* VIDEO */}
                <video
                  ref={videoRef}
                  src={item.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="
                    w-full h-130 object-cover
                    transition-transform duration-500 ease-out
                    group-hover:scale-105
                  "
                />

                {/* GRADIENT OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t from-black/70 via-black/30 to-black/10
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    pointer-events-none
                  "
                />

                {/* TEXT */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10 pointer-events-none">
                  <span className="inline-block bg-orange-500 text-sm px-3 py-1 rounded-full mb-2">
                    {item.title}
                  </span>
                  <p className="text-lg font-medium">{item.subtitle}</p>
                </div>

                {/* PLAY BUTTON */}
                <div
                  className="
                    absolute inset-0 flex items-center justify-center
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    pointer-events-none z-10
                  "
                >
                  <div
                    className="
                      w-16 h-16 rounded-full
                      bg-white/90 backdrop-blur-md
                      flex items-center justify-center
                      shadow-xl
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-black ml-1"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
