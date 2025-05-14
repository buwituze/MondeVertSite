"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustBanner() {
  return (
    <section
      className="w-[85%] bg-gray-100 py-4 px-16 mx-auto"
      style={{ borderRadius: "10px" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Trusted by companies */}
          <div className="space-y-0">
            <h3 className="text-lg font-medium text-[#85e41e] mb-3">
              Trusted By
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className=" hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={`/images/ALU.png`}
                    alt={`Partner ${i}`}
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                  {/* <Image
                    src={`/images/ALU.png`}
                    alt={`Partner ${i}`}
                    width={100}
                    height={40}
                    className="object-contain"
                  /> */}
                </div>
              ))}
            </div>
          </div>

          {/* Impact facts */}
          <div className="flex items-center justify-between">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-[#e3c31e]"
              >
                80+
              </motion.div>
              <p className="text-sm text-gray-600">Workshop Participants</p>
            </div>

            <div className="h-16 w-px bg-gray-300"></div>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-[#e3c31e]"
              >
                15+
              </motion.div>
              <p className="text-sm text-gray-600">Community Projects</p>
            </div>

            <div className="h-16 w-px bg-gray-300"></div>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl font-bold text-[#e3c31e]"
              >
                100+
              </motion.div>
              <p className="text-sm text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
