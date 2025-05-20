"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Globe } from "lucide-react";
import Link from "next/link";
import FounderSection from "./about/founder-section";

// Team member data with enhanced expertise
const teamMembers = [
  {
    id: 1,
    name: "Vanson Cyuzuzo Rutagengwa",
    role: "Founder/CEO",
    image: "/images/team/vanson.jpg", // Replace with actual image path
    skills: [
      "Visual Storytelling",
      "Conservation Strategy",
      "Project Management",
      "Environmental Education",
    ],
    bio: "Vanson is the visionary behind MondeVert, combining his passion for conservation with artistic expression to create impactful environmental initiatives.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 2,
    name: "Niyotugendana Chancelline",
    role: "Financial Lead",
    image: "/images/team/chancelline.jpg", // Replace with actual image path
    skills: [
      "Financial Strategy",
      "Team Leadership",
      "Public Relations",
      "Event Management",
    ],
    bio: "Chancelline brings financial expertise and people skills to MondeVert, ensuring smooth operations and strong community relations.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Germain Nduwayo",
    role: "Art Lead",
    image: "/images/team/germain.jpg", // Replace with actual image path
    skills: [
      "Visual Art Direction",
      "Creative Workshops",
      "Exhibition Curation",
      "Art Education",
    ],
    bio: "Germain leads MondeVert's artistic initiatives, bringing creative vision and expertise in visual arts to our environmental storytelling.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Benitha Uwituze",
    role: "Digital Technology Lead",
    image: "/images/Benitha Uwituze.png", // Replace with actual image path
    skills: [
      "Digital Strategy",
      "Content Marketing",
      "Creative Technology",
      "UX Design",
    ],
    bio: "Benitha combines technical knowledge with creative marketing strategies to amplify MondeVert's digital presence and impact.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/benitha-uwituze/",
      website: "https://benithauwituze.netlify.app/",
    },
  },
];

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  return (
    <section className="w-full py-16 relative overflow-hidden bg-[#00bf63]">
      {/* Decorative Elements */}
      {/* <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,215,0,0) 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,191,99,0.1) 0%, rgba(0,191,99,0) 70%)",
        }}
      /> */}

      {/* Organic shape SVG */}
      {/* <div className="absolute top-1/4 right-1/4 opacity-10 rotate-45">
        <svg
          width="300"
          height="300"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#00bf63"
            d="M47.7,-51.5C58.9,-41.8,63.2,-24.3,64.1,-7.4C65.1,9.4,62.6,25.8,52.9,35.9C43.1,46,26.1,49.9,8.8,55.5C-8.5,61.1,-26.1,68.5,-40.3,64C-54.5,59.5,-65.3,43.2,-69.3,25.9C-73.4,8.6,-70.6,-9.5,-63.1,-24.2C-55.6,-38.9,-43.3,-50.3,-29.5,-58.9C-15.8,-67.5,-0.5,-73.4,12.8,-70.2C26.1,-67,36.5,-61.3,47.7,-51.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" font-heading text-4xl font-bold mb-4 text-white inline-block relative"
          >
            Our Team
            <div
              className="absolute bottom-0 left-0 w-full h-1 mt-1"
              style={{
                background: `linear-gradient(90deg, #00bf63 0%, #ffd700 100%)`,
                transform: "translateY(8px)",
              }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-200 max-w-2xl mx-auto"
          >
            Meet the passionate individuals behind MondeVert who combine their
            expertise in art, conservation, technology, and business to drive
            our mission forward.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Photo container - circular */}
                <div className="pt-8 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 128px"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center flex-grow flex flex-col">
                  <h3 className="font-medium text-lg mb-1 text-gray-800">
                    {member.name}
                  </h3>
                  <p
                    className="font-medium text-sm mb-4"
                    style={{ color: "#00bf63" }}
                  >
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex justify-center space-x-3">
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <Linkedin
                          size={16}
                          className="text-gray-500 hover:text-[#00bf63]"
                        />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={`Twitter profile of ${member.name}`}
                      >
                        <Twitter
                          size={16}
                          className="text-gray-500 hover:text-[#00bf63]"
                        />
                      </a>
                    )}
                    {member.socialLinks.website && (
                      <a
                        href={member.socialLinks.website}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={`Website of ${member.name}`}
                      >
                        <Globe
                          size={16}
                          className="text-gray-500 hover:text-[#00bf63]"
                        />
                      </a>
                    )}
                  </div>
                </div>

                {/* Animated gradient border on hover */}
                <div
                  className="h-1 w-full transition-transform duration-300 origin-left"
                  style={{
                    background: "linear-gradient(90deg, #00bf63, #ffd700)",
                    transform:
                      hoveredMember === member.id ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block m-auto py-2 px-8 rounded-lg font-medium text-lg relative overflow-hidden cursor-pointer group">
            <Link href="/getinvolved">
              <span className="relative z-10 bg-gradient-to-r from-[#00bf63] to-[#ffd700] bg-clip-text text-transparent">
                Join Our Team
              </span>
              <div className="absolute m-auto inset-0 bg-white rounded-lg transition-all duration-300" />
            </Link>
            {/* <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00bf63] to-[#ffd700]" /> */}
          </div>
          <p className="text-gray-300 text-sm mt-3 max-w-md mx-auto">
            Passionate about environmental conservation and creativity? We're
            always looking for talented individuals to join our mission.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
