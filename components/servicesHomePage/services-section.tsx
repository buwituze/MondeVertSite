"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Mic,
  Monitor,
  Camera,
  Paintbrush,
  ImageIcon,
  ArrowRight,
  Users,
} from "lucide-react";

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Storytelling & Performative Arts",
      description:
        "We craft and use poetry, murals, and live performances to tell compelling environmental stories.",
      category: "Creative Education",
      icon: <Mic className="w-6 h-6 text-[#00bf63]" />,
    },
    {
      id: 2,
      title: "Immersive Experiences",
      description:
        "Blending traditional art with digital innovations, such as AR/VR, for immersive environmental education.",
      category: "Interactive Technology",
      icon: <Monitor className="w-6 h-6 text-[#00bf63]" />,
    },
    {
      id: 3,
      title: "Corporate Trainings",
      description:
        "Customized workshops promoting environmental awareness and activities in the corporate sector.",
      category: "Training",
      icon: <Users className="w-6 h-6 text-[#00bf63]" />,
    },
    {
      id: 4,
      title: "Interactive Nature Photography",
      description:
        "Guided explorations of Rwanda's natural landscapes combining adventure with education.",
      category: "Immersive Experiences",
      icon: <Camera className="w-6 h-6 text-[#00bf63]" />,
    },
    {
      id: 5,
      title: "Community-Led Initiatives",
      description:
        "Empowering local communities through murals, street art, and sustainable innovation.",
      category: "Community Engagement",
      icon: <Paintbrush className="w-6 h-6 text-[#00bf63]" />,
    },
    {
      id: 6,
      title: "Environmental Art Exhibitions",
      description:
        "Showcasing environmental-themed art through visual storytelling and interactive displays.",
      category: "Art & Education",
      icon: <ImageIcon className="w-6 h-6 text-[#00bf63]" />,
    },
  ];

  return (
    <section className="w-[92%] mx-auto bg-white">
      <div className="container mt-16 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
          {/* Left column - Text content */}
          <div className="lg:col-span-6 pr-0 lg:pr-8 my-auto">
            {/* <h2 className="font-subheading text-4xl font-bold text-gray-700 mb-6">
              We Offer Exclusive <br />
              Services For You
            </h2> */}
            <h2 className="font-subheading text-4xl font-bold text-gray-700 mb-6">
              We Offer Creative Services <br />
              For You and Your Business
            </h2>
            {/* <p className="text-gray-600 mb-8">
              MondeVert unites art, culture, and technology to foster
              environmental stewardship and inspire innovative sustainable
              solutions among young generations and the broader community in
              Rwanda.
            </p> */}

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-[#e3c31e]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className=" font-sans ml-3 text-gray-600">
                  Storytelling workshops that craft compelling environmental
                  narratives
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-[#e3c31e]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="font-sans ml-3 text-gray-600">
                  Mural and canvas painting workshops for visual environmental
                  advocacy
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-[#e3c31e]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className=" font-sans ml-3 text-gray-600">
                  Immersive AR/VR experiences that educate on environmental
                  issues
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-[#e3c31e]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="font-sans ml-3 text-gray-600">
                  Community empowerment through public art and sustainable
                  innovation
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-[#e3c31e]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="ml-3 font-sans text-gray-600">
                  Corporate workshops that blend environmental awareness with
                  team activities
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-[#e3c31e]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="ml-3 font-sans text-gray-600">
                  Guided nature photography adventures that connect participants
                  with landscapes
                </p>
              </div>
            </div>

            <Link
              href="/services"
              className="font-sans inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00bf63] to-[#ffd700] text-white font-medium rounded-full hover:opacity-90 transition-colors"
            >
              View All Services <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right column - Service cards in grid layout */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.slice(0, 4).map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  {/* Icon Circle */}
                  <div className="mb-4 bg-[#E6F7EF] w-12 h-12 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-sans font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  {/* Category Tag */}
                  <div className="text-xs font-sans font-medium text-[#00bf63] mb-2">
                    {service.category}
                  </div>
                  {/* Description */}
                  <p className="text-sm font-sans text-gray-600 mb-4">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex font-sans items-center text-sm font-medium text-[#00bf63]"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
