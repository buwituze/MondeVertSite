"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const missions = [
  {
    title: "Environmental Education",
    description:
      "Making conservation engaging and accessible through creative expression and interactive learning experiences.",
  },
  {
    title: "Youth Empowerment",
    description:
      "Inspiring the next generation to become environmental stewards and innovative problem-solvers in their communities.",
  },
  {
    title: "Community Engagement",
    description:
      "Partnering with local communities to implement sustainable solutions and foster collective action for environmental care.",
  },
  {
    title: "Creative Economy",
    description:
      "Nurturing artistic talent and leveraging creativity as a powerful tool for environmental advocacy and positive change.",
  },
];

export default function MissionSection() {
  return (
    <section className="w-full text-gray-800 relative bg-[#e3c31e]">
      <div className="container mx-auto px-4 py-16 relative">
        {/* Mission Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-200">
            To use art, culture, and technology as tools to foster environmental
            stewardship and inspire innovative sustainable solutions among young
            generations and the broader community in Rwanda.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-t-2 rounded-lg p-6 h-full flex flex-col hover:bg-white transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-[#ffd700] ">
                {mission.title}
              </h3>
              <p className="text-gray-600 text-sm">{mission.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
