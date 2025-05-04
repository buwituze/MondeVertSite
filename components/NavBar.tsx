"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Facebook } from "lucide-react";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export default function Navbar() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <header
        className={`rounded-full w-5/6 z-50 pointer-events-auto transition-all duration-300 ${
          hasScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-white shadow-md"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-8">
          <Link
            href="/"
            className="flex flex-row flex-wrap items-center gap-2 font-bold text-xl"
          >
            <Image
              src="/images/MondeVert LOGO.png"
              alt="Logo"
              width={30}
              height={30}
            />
            <span>MondeVert</span>
          </Link>

          <nav className="hidden md:flex gap-6 items-center">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-[#00bf63]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-[#00bf63]"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-[#00bf63]"
            >
              Services
            </Link>

            {/* Gallery Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-sm font-medium transition-colors hover:text-[#00bf63]"
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              >
                Gallery <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {isGalleryOpen && (
                <div className="absolute top-full mt-2 bg-white rounded-md shadow-lg py-2 w-40">
                  <Link
                    href="/gallery/art"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsGalleryOpen(false)}
                  >
                    Art Gallery
                  </Link>
                  <Link
                    href="/gallery/media"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsGalleryOpen(false)}
                  >
                    Media
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/events"
              className="text-sm font-medium transition-colors hover:text-[#00bf63]"
            >
              Events
            </Link>
            <Link
              href="/getinvolved"
              className="text-sm font-medium transition-colors hover:text-[#00bf63]"
            >
              Get Involved
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-[#00bf63]"
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-[#00bf63] hover:text-[#85e41e] transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-[#00bf63] hover:text-[#85e41e] transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook
                className="w-4 h-4 text-[#00bf63] hover:text-[#85e41e] transition-colors"
                style={{ marginLeft: -7 }}
              />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
