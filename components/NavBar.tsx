"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Facebook, Menu, X } from "lucide-react";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export default function Navbar() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close the mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleClickOutside = () => {
        setIsMobileMenuOpen(false);
      };

      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed top-2 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <header
          className={`rounded-full w-[90%] z-50 border border-gray-200 pointer-events-auto transition-all duration-300 ${
            hasScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"
          }`}
        >
          <div className="flex h-16 items-center justify-between px-4 md:px-8">
            <Link
              href="/"
              className="flex flex-row flex-wrap items-center gap-2 font-bold text-xl"
            >
              <Image
                src="/images/MondeVertNavLogo-removebg-preview.png"
                alt="Logo"
                width={80}
                height={60}
              />
            </Link>

            {/* Desktop Navigation */}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsGalleryOpen(!isGalleryOpen);
                  }}
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

            {/* Social Icons - Hide on smaller screens */}
            <div className="hidden md:flex items-center gap-3">
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-[#00bf63]"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={(e) => e.stopPropagation()}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-20 right-4 z-40 bg-white rounded-lg shadow-lg w-64 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col p-4">
          <Link
            href="/"
            className="py-3 text-sm font-medium border-b border-gray-100 hover:text-[#00bf63]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="py-3 text-sm font-medium border-b border-gray-100 hover:text-[#00bf63]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="py-3 text-sm font-medium border-b border-gray-100 hover:text-[#00bf63]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>

          {/* Mobile Gallery Dropdown */}
          <div className="relative py-3 border-b border-gray-100">
            <button
              className="flex items-center w-full text-sm font-medium justify-between hover:text-[#00bf63]"
              onClick={(e) => {
                e.stopPropagation();
                setIsGalleryOpen(!isGalleryOpen);
              }}
            >
              Gallery <ChevronDown className="h-4 w-4" />
            </button>
            {isGalleryOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/gallery/art"
                  className="block py-2 text-sm hover:text-[#00bf63]"
                  onClick={() => {
                    setIsGalleryOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Art Gallery
                </Link>
                <Link
                  href="/gallery/media"
                  className="block py-2 text-sm hover:text-[#00bf63]"
                  onClick={() => {
                    setIsGalleryOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Media
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/events"
            className="py-3 text-sm font-medium border-b border-gray-100 hover:text-[#00bf63]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/getinvolved"
            className="py-3 text-sm font-medium border-b border-gray-100 hover:text-[#00bf63]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Involved
          </Link>
          <Link
            href="/contact"
            className="py-3 text-sm font-medium hover:text-[#00bf63]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="text-[#00bf63] hover:text-[#85e41e]"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="text-[#00bf63] hover:text-[#85e41e]"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="Facebook"
              className="text-[#00bf63] hover:text-[#85e41e]"
            >
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
