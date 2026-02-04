import { motion } from "framer-motion";

const zoomReveal = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CTA = () => {
  return (
    <section className="w-full bg-[#FFFDF6] py-24">
      <div className="px-20">

        <motion.div
          variants={zoomReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            type: "tween",
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
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
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-semibold mb-4"
          >
            Ready To Start Your{" "}
            <span className="italic">Australian</span> Journey?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-lg opacity-90 mb-8"
          >
            Let Our Experts In Mumbai And Brisbane Guide You Every
            <br />
            Step Of The Way.
          </motion.p>

          {/* NORMAL BUTTON (NO FRAMER MOTION) */}
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
