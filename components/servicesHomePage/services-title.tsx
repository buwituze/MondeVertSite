"use client";

import { motion } from "framer-motion";

export default function ServicesTitle() {
  return (
    <div className="relative py-10 overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <span className="text-[12rem] font-subheading font-bold text-gray-200 pt-10">
          Services
        </span>
      </div>

      {/* Actual title */}
      <div className="container mx-auto text-center relative z-10 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl font-bold pt-16">
            <span className="text-[#e3c31e]">What we Offer</span>
          </h2>
          {/* <div className="w-24 h-1 bg-[#ffd700] mx-auto mt-4"></div> */}
        </motion.div>
      </div>
    </div>
  );
}
