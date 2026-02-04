import { motion, useScroll, useTransform } from "framer-motion";
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

const Services = () => {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Heading
  const headingX = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);

  // Paragraph
  const textX = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);

  // Videos
  const videoScale = useTransform(scrollYProgress, [0, 0.4, 1], [0.85, 1, 0.85]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-32"
    >
      <div className="w-full px-20">

        {/* TOP TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 overflow-hidden">
          <motion.h2
            style={{ x: headingX, opacity: headingOpacity }}
            className="text-4xl md:text-5xl font-semibold text-gray-900 will-change-transform"
          >
            Everything You Need for
            <br />
            Your <span className="text-orange-500">Australia Dream</span>
          </motion.h2>

          <motion.p
            style={{ x: textX, opacity: textOpacity }}
            className="text-gray-600 leading-relaxed max-w-xl will-change-transform"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
        </div>

        {/* VIDEO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <motion.div
              key={i}
              style={{
                scale: videoScale,
                opacity: videoOpacity,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative group rounded-3xl overflow-hidden cursor-pointer will-change-transform"
              onMouseEnter={() => videoRefs.current[i]?.play()}
              onMouseLeave={() => videoRefs.current[i]?.pause()}
            >
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={item.video}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-130 object-cover"
              />

              {/* GRADIENT OVERLAY */}
              <div className="
                absolute inset-0
                bg-linear-to-t from-black/70 via-black/30 to-black/10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
                pointer-events-none
              " />

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10 pointer-events-none">
                <span className="inline-block bg-orange-500 text-sm px-3 py-1 rounded-full mb-2">
                  {item.title}
                </span>
                <p className="text-lg font-medium">{item.subtitle}</p>
              </div>

              {/* PLAY ICON */}
              <div className="
                absolute inset-0 flex items-center justify-center
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                pointer-events-none z-10
              ">
                <div className="
                  w-16 h-16 rounded-full
                  bg-white/90 backdrop-blur-md
                  flex items-center justify-center
                  shadow-xl
                ">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-7 h-7 text-black ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
