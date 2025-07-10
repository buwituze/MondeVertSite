"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FlagshipEventSection() {
  return (
    <section className="w-full relative overflow-hidden py-16">
      {/* <div className="flex mx-auto m-auto justify-center items-center mb-13">
        <span className="h-1 w-12 bg-[#e3c31e] mr-4"></span>
        <h3
          className=" font-heading font-medium text-4xl uppercase tracking-wider"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffd700, #00bf63, #00bf63)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Flagship Event
        </h3>
      </div> */}
      {/* Dotted background pattern */}
      <div className="absolute text-green-600 inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#B7410E" />
            </pattern>
            <radialGradient id="fadeGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="fadeMask">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#fadeGradient)"
              />
            </mask>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#dotPattern)"
            mask="url(#fadeMask)"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-0 relative z-10">
        {/* Left side - Image (no padding/margin) */}
        <div className="w-7/8 md:w-full h-[300px] md:h-[450px] rounded-tr-3xl rounded-br-3xl relative overflow-hidden">
          <Image
            src="/images/mondevert image.jpg"
            alt="Beyond The Frame Event"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 md:hidden"></div>
        </div>

        {/* Right side - Event details */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-10 md:py-0">
          <div className="max-w-lg space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-4xl font-bold text-gray-800 font-sans">
                Beyond The Frame
              </h2>
            </div>

            <p className="text-gray-600 font-sans">
              Beyond The Flame is a reoccuring creative event designed to bring
              immersive experience to another level! Through visual
              storytelling, interactive workshops, and innovative displays,
              "Beyond The Frame" brings together participants to explore
              environmental challenges and solutions in various creative and
              engaging ways.
            </p>
            {/* <p className="text-gray-600 font-sans">
              Through Beyond The Frame, MondeVert unites art, culture, and
              technology to inspire creative environmental stewardship.
            </p> */}

            <div>
              <h2 className="text-xl md:text-xl mb-2 font-bold text-gray-800 font-sans">
                What To Expect
              </h2>

              <div>
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
                  <p className="ml-3 text-gray-600 font-sans">
                    Hands-on mural painting workshops
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
                  <p className="ml-3 text-gray-600  font-sans">
                    Immersive Environment simulations through AR/VR
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
                  <p className="ml-3 text-gray-600 font-sans">
                    Environmental storytelling sessions
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
                  <p className="ml-3 text-gray-600 font-sans">
                    Networking with local artists and environmentalists
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9.75v7.5"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-sans">Held Annually</span>
              </div>

              <div className="flex mt-0 items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-sans">
                  Entirely Inclusive
                </span>
              </div>
            </div>

            <Link
              href="/events"
              className="group inline-flex items-center gap-2 bg-[#00bf63] hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium mt-4"
            >
              Go to Events
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
