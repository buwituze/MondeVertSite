"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionVisionSection() {
  return (
    <section className="w-full text-gray-800 relative pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/geometric-forest-pattern-stockcake.jpg"
          alt="Geometric Green Pattern"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 bg-opacity-25"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto rounded-t-xl overflow-hidden bg-white/90 p-0 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Content Column */}
            <div className="p-8 h-full flex flex-col justify-between">
              {/* Mission Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-10 mb-15"
              >
                <h2 className="font-subheading text-3xl text-gray-800 font-bold mb-1">
                  Our Mission
                </h2>
                <div className="flex flex-row mx-16 gap-2 items-center mb-3">
                  <span className=" text-purple-600">•</span>
                  <span className="text-purple-600">•</span>
                  <span className=" text-purple-600">•</span>
                </div>
                <p className="font-sans text-gray-700">
                  To spark environmental consciousness through art, culture, and
                  technology. We create immersive experiences that make
                  conservation engaging and inspire innovative sustainable
                  solutions among Rwanda's youth and communities.
                </p>
              </motion.div>

              {/* Vision Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-15"
              >
                <h2 className="font-subheading text-3xl text-gray-800 font-bold mb-1">
                  Our Vision
                </h2>
                <div className="flex flex-row mx-15 gap-2 items-center mb-3">
                  <span className=" text-red-400">•</span>
                  <span className="text-red-400">•</span>
                  <span className=" text-red-400">•</span>
                </div>
                <p className="font-sans text-gray-700">
                  A future where Rwandans embrace sustainability as a way of
                  life. Where creativity and environmental consciousness
                  intersect, transforming how communities understand and respond
                  to climate challenges through artistic expression and digital
                  innovation.
                </p>
              </motion.div>
              {/* Call to Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="#contactus"
                  className="inline-block px-6 py-3 bg-[#e3c31e] text-white font-medium hover:bg-[#ffd700] transition-colors duration-300 shadow-md"
                >
                  Join Our Mission
                </a>
              </motion.div>
            </div>

            {/* Right Media Column */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-full w-full overflow-hidden"
            >
              <div className="h-full">
                {/* <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/mission-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                <Image
                  src="/images/mondevert-beyond-the-frame.jpg"
                  alt=""
                  fill
                  className="w-full h-full object-cover"
                />

                {/* Overlay with text */}
                {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center px-6">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      Art. Culture. Technology.
                    </h3>
                    <p className="text-white text-lg">
                      Creativity for Environmental Stewardship
                    </p>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
