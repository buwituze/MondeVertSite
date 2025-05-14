"use client";
// Enhanced Hero.jsx component with animated background, parallax, and word animation

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationState, setAnimationState] = useState("visible"); // "entering", "visible", "exiting", "hidden"

  const animatedWords = [
    "Differently",
    "Creatively",
    "Through Art",
    "With Purpose",
  ];
  const heroRef = useRef(null);

  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true);

    // Word animation sequence
    const runAnimationCycle = () => {
      // Word is visible for 1 second
      setTimeout(() => {
        // Start exit animation
        setAnimationState("exiting");

        // After exit animation completes (0.5s)
        setTimeout(() => {
          setAnimationState("hidden");

          // Wait 1s before showing next word
          setTimeout(() => {
            // Increment to next word
            setCurrentWordIndex((prevIndex) =>
              prevIndex === animatedWords.length - 1 ? 0 : prevIndex + 1
            );

            // Start entry animation for new word
            setAnimationState("entering");

            // After entry animation completes (0.5s), set to visible
            setTimeout(() => {
              setAnimationState("visible");

              // Schedule next cycle
              runAnimationCycle();
            }, 500);
          }, 1000);
        }, 500);
      }, 1000);
    };

    // Start the animation cycle
    setAnimationState("entering");
    setTimeout(() => {
      setAnimationState("visible");
      runAnimationCycle();
    }, 500);

    // Parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full grid grid-cols-1 min-h-[100vh] md:grid-cols-2 overflow-hidden relative"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none organic-pattern-overlay"></div>

      <div className="bg-white pl-26 relative z-10">
        <div
          className="flex flex-col justify-center h-screen space-y-12"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div>
            <h1
              className={`font-sans text-xl font-semibold pt-33 bg-clip-text text-transparent transition-all duration-800 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-24 opacity-0"
              }`}
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffd700, #00bf63, #ffd700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)", // Sharp easing
              }}
            >
              Where Art Meets Sustainability
            </h1>

            <h1
              className={`font-heading text-5xl md:text-5xl pt-3 leading-17 pb-3 transition-all duration-800 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-24 opacity-0"
              }`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
              }}
            >
              Experience Sustainability{" "}
              <span className="word-animation-container">
                <span
                  className={`word-animation word-animation-${animationState}`}
                >
                  {animatedWords[currentWordIndex]}
                </span>
              </span>
            </h1>

            <p
              className={`font-sans mb-0 text-lg transition-all duration-700 ${
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

      <div
        className={`bg-white flex justify-center mr-20 align-middle gap-3 pt-25 transition-all duration-800 relative z-10 ${
          isLoaded ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="bg-gray-200 rounded-lg w-[250px] self-center h-[340px] hover-float">
          <Image
            src="/images/umusambi-flying.jpg"
            alt="Digital Nature"
            width={250}
            height={340}
            className="rounded-lg h-85 transition-all hover:scale-105 duration-500"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-gray-200 rounded-lg w-[220px] h-[280px] hover-float-delay-1">
            <Image
              src="/images/art-piece.jpg"
              alt="Digital Nature"
              width={220}
              height={340}
              className="rounded-lg h-70 transition-all hover:scale-105 duration-500"
            />
          </div>
          <div className="bg-gray-200 rounded-lg w-[220px] h-[220px] hover-float-delay-2">
            <Image
              src="/images/arvr.jpg"
              alt="Digital Nature"
              width={220}
              height={340}
              className="rounded-lg h-55 transition-all hover:scale-105 duration-500"
            />
          </div>
        </div>
      </div>

      {/* Add global styles for animations */}
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

        /* Organic pattern background */
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

        /* Word animation styling */
        .word-animation-container {
          display: inline-block;
          position: relative;
          min-width: 500px;
          min-height: 1.3em;
          color: #e3c31e;
          overflow: hidden;
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

        /* Scroll indicator styling */
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
