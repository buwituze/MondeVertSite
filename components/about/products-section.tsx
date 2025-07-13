"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Place {
  id: string;
  name: string;
  imageSrc: string;
}

const featuredPlaces: Place[] = [
  {
    id: "1",
    name: "Nyungwe Forest",
    imageSrc: "/images/Nyugwe Forest.jpg",
  },
  {
    id: "2",
    name: "Lake Kivu",
    imageSrc: "/images/lake kivu.jpg",
  },
  {
    id: "3",
    name: "Volcanoes National Park",
    imageSrc: "/images/virunga national park.jpg",
  },
];

export default function PlacesSection() {
  return (
    <section className="pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-subheading text-3xl md:text-4xl font-bold mb-4">
            Places We'll Visit
          </h2>
          <p className="text-gray-700 font-sans text-lg">
            Discover the breathtaking destinations we'll explore together. From
            pristine forests to stunning lakes, each location offers unique
            experiences and unforgettable memories waiting to be made.
          </p>
        </div>

        <div className="text-center mb-12">
          <Button
            asChild
            className="group bg-emerald-700 font-sans hover:bg-emerald-800 text-white px-6 py-2 rounded-md"
          >
            <Link href="/services/#nature-photography">
              Lean More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPlaces.map((place) => (
            <div
              key={place.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={place.imageSrc || "/placeholder.svg"}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg font-sans">
                  {place.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
