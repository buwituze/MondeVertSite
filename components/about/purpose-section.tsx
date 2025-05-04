"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function PurposeSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          repeatDelay: 1,
        },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <section className="relative py-5 mb-0 overflow-hidden">
      {/* Background image with reduced opacity */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-15"
          style={{
            backgroundImage: "url('/images/art-piece.jpg')",
          }}
        />
        {/* Add gold overlay */}
        <div className="absolute inset-0 bg-[#00bf63] opacity-40" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Left side - Big words */}
          <div className="space-y-6 mx-34" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-5xl font-bold leading-tight text-white"
            >
              Art. Culture.
              <div className="relative inline-block">
                <span className="relative z-10 text-white"> Technology</span>
                <svg
                  className="absolute -top-4 -left-8 w-[calc(100%+4rem)] h-[calc(100%+2rem)] z-0"
                  viewBox="0 0 300 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M30,50 C40,20 100,10 150,10 C200,10 260,20 270,50 C260,80 200,90 150,90 C100,90 40,80 30,50"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial="hidden"
                    animate={controls}
                    variants={circleVariants}
                  />
                </svg>
              </div>
              <div>For The Environment.</div>
            </motion.div>
          </div>

          {/* Right side - Explanation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.3 },
              },
            }}
            className=" p-8"
          >
            <p className="text-white mb-4">
              MondeVert is a vibrant social enterprise headquartered in Kigali,
              Rwanda that unites art, culture, and technology to influence
              people to become environmentally conscious and provide sustainable
              solutions.
            </p>
            <p className="text-white mb-4">
              We're not your typical environmental organization - we're a
              creative hub that makes conservation exciting and engaging through
              interactive workshops, immersive experiences, and community
              projects.
            </p>
            <p className="text-white">
              Our purpose is simple but powerful: to help our audience and
              customers understand and care about our environment in ways that
              are fun, meaningful, and inspire action.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
