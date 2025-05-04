"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const missions = [
  {
    title: "Environmental Education",
    description:
      "Making conservation engaging and accessible through creative expression and interactive learning experiences.",
    color: "#85e41e", // Green
  },
  {
    title: "Youth Empowerment",
    description:
      "Inspiring the next generation to become environmental stewards and innovative problem-solvers in their communities.",
    color: "#e3c31e",
  },
  {
    title: "Community Engagement",
    description:
      "Partnering with local communities to implement sustainable solutions and foster collective action for environmental care.",
    color: "#85e41e",
  },
  {
    title: "Creative Economy",
    description:
      "Nurturing artistic talent and leveraging creativity as a powerful tool for environmental advocacy and positive change.",
    color: "#e3c31e",
  },
];

export default function MissionSection() {
  return (
    <section className="w-full py-24 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="MondeVert Mission"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#85e41e]/50 to-transparent opacity-60"></div>
          </motion.div>

          {/* Right side - Mission content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-gray-700">
                To use art, culture, and technology as tools to foster
                environmental stewardship and inspire innovative sustainable
                solutions among young generations and the broader community in
                Rwanda.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <ChevronRight
                    className="flex-shrink-0 w-5 h-5 mt-1"
                    style={{ color: mission.color, fill: mission.color }}
                  />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{mission.title}</h3>
                    <p className="text-sm text-gray-700">
                      {mission.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
