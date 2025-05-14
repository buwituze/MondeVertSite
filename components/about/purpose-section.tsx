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
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Left side - Big words with artistic background */}
          <div className="space-y-6 mx-30" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-5xl font-bold leading-tight text-black"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 ml-5 w-60"
                  style={{
                    background: `
                    radial-gradient(circle at 50% 50%, #00bf63, transparent 60%),
                    radial-gradient(circle at 80% 40%, #ffd700, transparent 60%),
                    radial-gradient(ellipse at 60% 40%, rgba(0, 191, 99, 0.7), transparent 70%),
                    radial-gradient(ellipse at 40% 50%, rgba(255, 215, 0, 0.7), transparent 70%)
                  `,
                    filter: "blur(25px)",
                    transform: "scale(1.2)",
                    opacity: 0.8,
                  }}
                ></div>

                {/* Text with padding to account for the background */}
                <p className="font-sans text-gray-800 text-5xl font-semibold mb-4 relative z-10 p-8">
                  What If Sustainability Felt Inspiring?
                </p>
              </div>
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
            className="p-8"
          >
            <p className="text-gray-700 mb-4">
              At MondeVert, we make conservation engaging by blending art,
              culture, and technology into immersive experiences. Founded by
              visual storyteller Vanson Cyuzuzo Rutagengwa, we emerged from a
              simple observation: traditional environmental education often
              fails to create emotional connections that drive action.
            </p>
            <p className="text-gray-700 mb-4">
              Our approach transforms how people engage with sustainability
              through workshops, immersive experiences, and public art. From our
              base in Kigali, we partner with businesses, schools, and
              government agencies to create programs that address environmental
              challenges while building lasting cultural connections.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
