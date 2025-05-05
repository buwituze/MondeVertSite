"use client";

import { motion } from "framer-motion";

export default function AboutTitle() {
  return (
    <div className="relative py-9 overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <span className="text-[12rem] font-bold text-gray-200">ESSENCE</span>
      </div>

      {/* Actual title */}
      <div className="container mx-auto text-center relative z-10  mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl font-bold">
            <span className="text-[#e3c31e]">Our Story</span>
          </h2>
          {/* <div className="w-24 h-1 bg-[#e3c31e] mx-auto mt-4"></div> */}
        </motion.div>
      </div>
    </div>
  );
}
