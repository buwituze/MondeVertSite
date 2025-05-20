"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-emerald-600 text-white relative">
      <div
        className="absolute inset-0 w-full h-full overflow-hidden opacity-20"
        style={{ zIndex: 0 }}
      >
        <Image
          src="/images/footerpatterns.png"
          alt="Background Pattern"
          width={310}
          height={200}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="container mx-auto py-8 md:py-12 px-4 sm:px-6 relative z-10">
        {/* Mobile/Tablet layout - Stacked with centered content */}
        <div className="lg:hidden">
          {/* Logo and description centered on mobile/tablet */}
          <div className="flex flex-col items-center mb-8">
            <Link
              href="/"
              className="mb-3 bg-white p-2 rounded-lg inline-block"
            >
              <Image
                src="/images/MondeVertFooterLogo-removebg-preview.png"
                alt="MondeVert Logo"
                width={200}
                height={100}
                className="h-auto w-48 sm:w-56"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-4 text-center max-w-md">
              MondeVert combines art, technology, and culture to promote
              sustainable living and environmental awareness.
            </p>
            <div className="flex gap-4 mb-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-[#e3c31e] hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-[#e3c31e] hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-[#e3c31e] hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Two column layout for navigation sections on tablet/small screens */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold text-lg mb-3">Explore</h3>
              <nav className="flex flex-col gap-2 items-center sm:items-start">
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/#about"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/art-gallery"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/events"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="/donate"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Get Involved
                </Link>
              </nav>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold text-lg mb-3">Get Involved</h3>
              <nav className="flex flex-col gap-2 items-center sm:items-start">
                <Link
                  href="/#donate"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Donate
                </Link>
                <Link
                  href="/#volunteer"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Volunteer
                </Link>
                <Link
                  href="/#partner"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Partner with us
                </Link>
                <Link
                  href="/partner"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Spread The Word
                </Link>
              </nav>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold text-lg mb-3">Resources</h3>
              <nav className="flex flex-col gap-2 items-center sm:items-start">
                <Link
                  href="/blog"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
                >
                  Terms of Service
                </Link>
              </nav>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold text-lg mb-3">Contact</h3>
              <div className="flex flex-col gap-2 items-center sm:items-start">
                <p className="text-sm text-gray-300">+250-783446127</p>
                <p className="text-sm text-gray-300 overflow-hidden text-ellipsis max-w-[180px] xs:max-w-full sm:max-w-full">
                  mondevert.solutions@gmail.com
                </p>
                <h3 className="font-bold text-md mt-2 mb-1">Location</h3>
                <p className="text-sm text-gray-300">Rwanda, Kigali</p>
                <p className="text-sm text-gray-300">Kimironko, Bumbogo</p>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-[#e3c31e]"
                >
                  View On Map
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout - Full 5-column grid */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8">
          {/* Logo and Description Column */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="mb-3 bg-white mr-4 p-2 rounded-lg inline-block"
            >
              <Image
                src="/images/MondeVertFooterLogo-removebg-preview.png"
                alt="MondeVert Logo"
                width={180}
                height={90}
                className="h-auto"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-4 text-left">
              MondeVert combines art, technology, and culture to promote
              sustainable living and environmental awareness.
            </p>
            <div className="flex gap-4 mb-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-[#e3c31e] hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-[#e3c31e] hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-[#e3c31e] hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* About Column */}
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Services
              </Link>
              <Link
                href="/art-gallery"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/events"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Events
              </Link>
              <Link
                href="/donate"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Get Involved
              </Link>
            </nav>
          </div>

          {/* Get Involved Column */}
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-lg mb-4">Get Involved</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/getinvolved/#donate"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Donate
              </Link>
              <Link
                href="/getinvolved/#volunteer"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Volunteer
              </Link>
              <Link
                href="/getinvolved/#partner"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Partner with us
              </Link>
              <Link
                href="/partner"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Spread The Word
              </Link>
            </nav>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/blog"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-300">+250-783446127</p>
              <p className="text-sm text-gray-300 overflow-hidden text-ellipsis max-w-[180px] xs:max-w-full sm:max-w-full">
                mondevert.solutions@gmail.com
              </p>
            </div>
            <h3 className="font-bold text-lg mt-2 mb-1">Location</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-300">Rwanda, Kigali</p>
              <p className="text-sm text-gray-300">Kimironko, Bumbogo</p>
              <Link
                href="#"
                className="text-sm text-gray-300 hover:text-[#e3c31e]"
              >
                View On Map
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright - Same for all screen sizes */}
        <div className="border-t border-gray-300 mt-6 pt-6 text-center lg:text-left">
          <p className="text-sm text-[#e3c31e]">
            © {new Date().getFullYear()} MondeVert Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
