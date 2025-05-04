"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/logo-green-flower.png"
                alt="MondeVert Logo"
                width={140}
                height={140}
                className="mb-4"
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
          <div className="flex flex-col items-center md:items-start">
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
                href="/programs"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Programs
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

          {/* Resources Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/tutorial"
                className="text-sm text-gray-300 hover:text-[#e3c31e] transition-colors"
              >
                Tutorial
              </Link>
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

          {/* Get Involved & Contact Column */}
          <div className="flex flex-col items-center md:items-start">
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
            </nav>

            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-300">+250-783446127</p>
              <p className="text-sm text-gray-300">
                mondevert.solutions@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
          <p className="text-sm text-[#e3c31e]">
            © {new Date().getFullYear()} MondeVert Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
