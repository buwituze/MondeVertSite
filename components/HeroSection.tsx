"use client";
// Enhanced Hero.jsx component with reduced spacing and fixed parallax

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationState, setAnimationState] = useState("visible");
  const [windowWidth, setWindowWidth] = useState(0);

  const animatedWords = [
    "Differently",
    "Creatively",
    "Through Art",
    "With Purpose",
  ];
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const runAnimationCycle = () => {
      setTimeout(() => {
        setAnimationState("exiting");
        setTimeout(() => {
          setAnimationState("hidden");
          setTimeout(() => {
            setCurrentWordIndex((prevIndex) =>
              prevIndex === animatedWords.length - 1 ? 0 : prevIndex + 1
            );
            setAnimationState("entering");
            setTimeout(() => {
              setAnimationState("visible");
              runAnimationCycle();
            }, 500);
          }, 1000);
        }, 500);
      }, 1000);
    };

    setAnimationState("entering");
    setTimeout(() => {
      setAnimationState("visible");
      runAnimationCycle();
    }, 500);

    // Parallax effect - DISABLED on mobile/tablet screens
    const handleScroll = () => {
      // Only apply parallax on desktop screens (lg and above)
      if (window.innerWidth >= 1024) {
        const maxScroll = 300;
        const newScrollY = Math.min(window.scrollY, maxScroll);
        setScrollY(newScrollY);
      } else {
        setScrollY(0); // Reset scroll offset on smaller screens
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine screen size
  const isMobile = windowWidth < 768;
  const isDesktop = windowWidth >= 1024;

  return (
    <div
      ref={heroRef}
      className="sm:mt-10 lg:mt-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden relative"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none organic-pattern-overlay"></div>

      {/* Text Content Section */}
      <div className="bg-white relative z-10 px-6 sm:px-8 md:px-12 lg:pl-16 lg:pr-4 xl:pl-20 xl:pr-6">
        <div
          className="flex flex-col justify-center min-h-[60vh] sm:min-h-[90vh] md:min-h-[63vh] lg:min-h-screen py-12 md:py-8 space-y-4 sm:space-y-6 lg:space-y-8 max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-0"
          style={{
            transform: isDesktop ? `translateY(${scrollY * 0.05}px)` : "none",
          }}
        >
          <div>
            <h1
              className={`font-sans text-lg sm:mt-7 md:text-xl font-semibold bg-clip-text text-transparent transition-all duration-800 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-24 opacity-0"
              }`}
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffd700, #00bf63, #ffd700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
              }}
            >
              Where Art Meets Sustainability
            </h1>

            <h1
              className={`font-subheading text-4xl md:text-5xl lg:text-6xl pt-3 leading-tight lg:leading-tight pb-3 transition-all duration-800 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-24 opacity-0"
              }`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
              }}
            >
              Experience Sustainability{" "}
              <span
                className={`word-animation-container ${
                  isMobile ? "block" : ""
                }`}
              >
                <span
                  className={`word-animation word-animation-${animationState}`}
                >
                  {animatedWords[currentWordIndex]}
                </span>
              </span>
            </h1>

            <p
              className={`font-sans mb-0 text-base md:text-lg transition-all duration-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: "500ms",
                transitionTimingFunction: "ease-out",
              }}
            >
              MondeVert transforms environmental stewardship through creativity.
              Using art, culture, and technology, we inspire communities to
              embrace sustainable living.
            </p>
          </div>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{
              transitionDelay: "500ms",
              transitionTimingFunction: "ease-out",
            }}
          >
            <Link href="/getinvolved">
              <Button
                className="font-sans text-white button-pulse"
                style={{
                  background: "#00bf63",
                  height: "48px",
                  borderRadius: "10px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                Get Involved
              </Button>
            </Link>
            <Link href="/events">
              <Button
                className="font-sans bg-[#00bf63]/30 text-[#00bf63] hover:bg-[#00bf63]/40 transition-all"
                style={{
                  height: "48px",
                  borderRadius: "10px",
                }}
              >
                Join Our Events
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Grid Section */}
      <div
        className={`bg-white flex items-center px-6 sm:px-8 md:px-12 lg:pl-4 lg:pr-16 xl:pl-6 xl:pr-20 py-6 sm:py-8 md:py-0 transition-all duration-800 relative z-10 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: isDesktop ? `translateY(${scrollY * 0.1}px)` : "none",
          transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
        }}
      >
        {/* Common Grid Layout for All Screen Sizes */}
        <div className="lg:mt-14 grid grid-cols-1 gap-3 w-full max-w-lg mx-auto lg:ml-0 lg:mr-auto">
          {/* Top horizontal image */}
          <div className=" bg-gray-200 rounded-lg w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[220px] hover-float">
            <Image
              src="/images/umusambi-flying.jpg"
              alt="Digital Nature"
              width={600}
              height={400}
              className="rounded-lg w-full h-full object-cover transition-all hover:scale-105 duration-500"
            />
          </div>
          {/* Bottom two images in a grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-200 rounded-lg w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[240px] hover-float-delay-1">
              <Image
                src="/images/art-piece.jpg"
                alt="Digital Nature"
                width={300}
                height={240}
                className="rounded-lg w-full h-full object-cover transition-all hover:scale-105 duration-500"
              />
            </div>
            <div className="bg-gray-200 rounded-lg w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[240px] hover-float-delay-2">
              <Image
                src="/images/arvr.jpg"
                alt="Digital Nature"
                width={300}
                height={240}
                className="rounded-lg w-full h-full object-cover transition-all hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Styles remain the same */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 191, 99, 0.7);
          }
          70% {
            transform: scale(1.02);
            box-shadow: 0 0 0 10px rgba(0, 191, 99, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 191, 99, 0);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutToLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes leafFloat {
          0%,
          100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
        }

        @keyframes scrollDown {
          0% {
            opacity: 1;
            height: 0;
          }
          50% {
            height: 8px;
          }
          100% {
            opacity: 0;
            height: 15px;
          }
        }

        .organic-pattern-overlay {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30,50 Q45,30 60,50 T90,50' stroke='%2300bf6310' fill='none' stroke-width='0.5'/%3E%3Cpath d='M10,50 Q25,20 40,50 T70,50' stroke='%23ffd70010' fill='none' stroke-width='0.5'/%3E%3Ccircle cx='70' cy='60' r='2' fill='%2300bf6305' /%3E%3Ccircle cx='30' cy='40' r='3' fill='%23ffd70005' /%3E%3C/svg%3E");
          opacity: 0.4;
          animation: leafFloat 15s ease-in-out infinite;
          background-size: 300px 300px;
        }

        .hover-float {
          animation: float 8s ease-in-out infinite;
        }

        .hover-float-delay-1 {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .hover-float-delay-2 {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .button-pulse {
          animation: pulse 3s infinite;
        }

        .button-pulse::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: shine 4s infinite;
        }

        .word-animation-container {
          display: inline-block;
          position: relative;
          min-width: 400px;
          min-height: 1.3em;
          color: #e3c31e;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .word-animation-container {
            min-width: 300px;
          }
        }

        @media (min-width: 1024px) {
          .word-animation-container {
            min-width: 400px;
          }
        }

        .word-animation {
          display: inline-block;
          position: absolute;
          left: 0;
          color: #e3c31e;
          white-space: nowrap;
          width: auto;
        }

        .word-animation-entering {
          animation: slideInFromRight 0.5s forwards
            cubic-bezier(0.16, 1, 0.3, 1);
        }

        .word-animation-exiting {
          animation: slideOutToLeft 0.5s forwards cubic-bezier(0.7, 0, 0.84, 0);
        }

        .word-animation-hidden {
          opacity: 0;
        }

        .word-animation-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .scroll-indicator-container {
          width: 30px;
          height: 50px;
          border: 2px solid rgba(0, 191, 99, 0.3);
          border-radius: 15px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 10px;
        }

        .scroll-indicator span {
          width: 4px;
          background-color: rgba(0, 191, 99, 0.6);
          border-radius: 2px;
          animation: scrollDown 2s infinite;
          display: block;
        }
      `}</style>
    </div>
  );
}
