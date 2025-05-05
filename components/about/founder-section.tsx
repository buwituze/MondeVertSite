"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Camera,
  Palette,
  Globe,
  Leaf,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Icons to place around the founder image
const surroundingIcons = [
  {
    icon: Camera,
    position: "top-0 left-1/2 -translate-x-1/2",
    tooltip: "Visual Storytelling",
  },
  {
    icon: Palette,
    position: "top-1/4 right-0 translate-y-1/2",
    tooltip: "Art & Culture",
  },
  {
    icon: Globe,
    position: "bottom-0 left-1/2 -translate-x-1/2",
    tooltip: "Environmental Impact",
  },
  {
    icon: Leaf,
    position: "top-1/4 left-0 translate-y-1/2",
    tooltip: "Conservation",
  },
];

// Social media links
const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:mondevert.solutions@gmail.com", label: "Email" },
];

export default function FounderSection() {
  return (
    <section className="w-full py-10 bg-emerald-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Founder description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 pl-30"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Meet Our Visionalist
            </h2>

            <p className="text-gray-200">
              Vanson Cyuzuzo Rutagengwa is a conservationist and visual
              storytelling artist specializing in planetary health. His passion
              for the creative economy drives MondeVert's mission to unite art,
              culture, and technology for environmental stewardship.
            </p>

            <p className="text-gray-200">
              Through his leadership, MondeVert has become a vibrant hub for
              environmental education that engages Rwandans through creative
              expression and innovative sustainable solutions.
            </p>

            {/* Social media links */}
            <div className="pt-4">
              <h3 className="text-sm font-medium text-gray-300 mb-3">
                Connect with Vanson
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#00bf63] hover:text-white transition-colors"
                        aria-label={social.label}
                      >
                        <SocialIcon className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right side - Founder image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[300px] h-[420px]">
              {/* Outer thick gold layer - true pill/oval shape */}
              <div className="absolute inset-0 rounded-full bg-[#00bf63]/20"></div>

              {/* Inner thin green layer - true pill/oval shape */}
              <div className="absolute inset-[12px] rounded-full bg-[#ffd700]/70"></div>

              {/* Pill/oval-shaped image container */}
              <div className="absolute inset-[16px] overflow-hidden rounded-full">
                <Image
                  src="/images/At Bisoke Volcano.jpg"
                  alt="Vanson Cyuzuzo Rutagengwa - Founder of MondeVert"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Surrounding icons */}
              {surroundingIcons.map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} z-10`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="relative group">
                      <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#00bf63]" />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {item.tooltip}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
