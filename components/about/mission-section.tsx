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
    <section className="w-full text-gray-800 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/geometric-forest-pattern-stockcake.jpg"
          alt="Geometric Green Pattern"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10 bg-opacity-25"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Mission Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-subheading text-3xl md:text-4xl text-white font-bold mb-4">
            Our Mission
          </h2>
          <p className="font-sans text-white">
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
              className="bg-white bg-opacity-90 backdrop-blur-sm border-t-2 rounded-lg p-6 h-full flex flex-col hover:shadow-lg hover:bg-white transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-[#ffd700] font-sans">
                {mission.title}
              </h3>
              <p className="text-gray-600 text-sm font-sans">
                {mission.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Get Involved Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30">
            <h3 className="text-2xl font-bold text-gray-700 mb-3">
              Get Involved Today
            </h3>
            <p className="text-gray-500 mb-5">
              Join our community of creative environmentalists and be part of
              the change. Together, we can build a sustainable future through
              art and innovation.
            </p>
            <a
              href="#contactus"
              className="inline-block px-6 py-3 bg-[#e3c31e] text-white font-medium rounded-lg hover:bg-[#ffd700] transition-colors duration-300 shadow-md"
            >
              Join Our Mission
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
