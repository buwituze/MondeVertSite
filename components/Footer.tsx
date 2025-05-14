"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full  bg-[#00bf63] text-white">
      <div className="absolute opacity-20" style={{ zIndex: 0 }}>
        <Image
          src="/images/footerpatterns.png"
          alt="MondeVert Logo"
          width={300}
          height={200}
          className="h-116"
        />
      </div>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-3 bg-white mr-4 p-2 rounded-lg">
              <Image
                src="/images/MondeVertFooterLogo-removebg-preview.png"
                alt="MondeVert Logo"
                width={400}
                height={200}
                className="h-22"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-4 text-center md:text-left">
              MondeVert combines art, technology, and culture to promote
              sustainable living and environmental awareness.
            </p>
            <div className="flex gap-4 mb-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-[#e3c31e] hover:text-green-400 transition-colors" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-[#e3c31e] hover:text-green-400 transition-colors" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook
                  className="w-6 h-6  text-[#e3c31e] hover:text-green-400 transition-colors"
                  style={{ marginLeft: -7 }}
                />
              </Link>
            </div>
          </div>

          {/* About Column */}
          <div className="flex flex-col items-center md:items-start mt-3">
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
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

          {/* Get Involved & Contact Column */}
          <div className="flex flex-col items-center md:items-start  mt-3">
            <h3 className="font-bold text-lg mb-4">Get Involved</h3>
            <nav className="flex flex-col gap-2 mb-6">
              <Link
                href="/donate"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Donate
              </Link>
              <Link
                href="/volunteer"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Volunteer
              </Link>
              <Link
                href="/partner"
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
          <div className="flex flex-col items-center md:items-start  mt-3">
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

          <div className="flex flex-col items-center md:items-start  mt-3">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-300">+250-783446127</p>
              <p className="text-sm text-gray-300">
                mondevert.solutions@gmail.com
              </p>
            </div>
            <h3 className="font-bold text-lg  mt-2 mb-1">Location</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-300">Rwanda, Kigali</p>
              <p className="text-sm text-gray-300">Kimironko, Bumbogo</p>
              <Link href="#">
                <p className="text-sm text-gray-300">View On Map</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-center md:text-left">
          <p className="text-sm text-[#e3c31e]">
            © {new Date().getFullYear()} MondeVert Solutions. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Copyright */}
    </footer>
  );
}
