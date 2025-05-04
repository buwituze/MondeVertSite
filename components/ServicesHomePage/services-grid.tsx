"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mic,
  Monitor,
  Camera,
  Paintbrush,
  ImageIcon,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Storytelling & Performative Arts",
      description:
        "We craft and use poetry, murals, and live performances to tell compelling environmental stories.",
      category: "Creative Education",
      icon: <Mic className="h-6 w-6 text-[#00bf63]" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-emerald-500/20 to-emerald-500/5",
    },
    {
      id: 2,
      title: "Immersive Experiences",
      description:
        "Blending traditional art with digital innovations, such as AR/VR, for immersive environmental education.",
      category: "Interactive Technology",
      icon: <Monitor className="h-6 w-6 text-[#00bf63]" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      id: 3,
      title: "Corporate Trainings",
      description:
        "Customized workshops promoting environmental awareness and activities in the corporate sector.",
      category: "Training",
      icon: <Users className="h-6 w-6 text-[#00bf63]" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-amber-500/20 to-amber-500/5",
    },
    {
      id: 4,
      title: "Interactive Nature Photography",
      description:
        "Guided explorations of Rwanda's natural landscapes combining adventure with education.",
      category: "Immersive Experiences",
      icon: <Camera className="h-6 w-6 text-[#00bf63]" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-indigo-500/20 to-indigo-500/5",
    },
    {
      id: 5,
      title: "Community-Led Initiatives",
      description:
        "Empowering local communities through murals, street art, and sustainable innovation.",
      category: "Community Engagement",
      icon: <Paintbrush className="h-6 w-6 text-[#00bf63]" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-rose-500/20 to-rose-500/5",
    },
    {
      id: 6,
      title: "Environmental Art Exhibitions",
      description:
        "Showcasing environmental-themed art through visual storytelling and interactive displays.",
      category: "Art & Education",
      icon: <ImageIcon className="h-6 w-6 text-[#00bf63]" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-purple-500/20 to-purple-500/5",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our diverse range of services designed to engage and educate
            through art, culture, and technology
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-0 z-10 bg-gradient-to-b",
                    service.color
                  )}
                ></div>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="relative z-20 -mt-8 mx-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                  {service.icon}
                </div>
              </div>

              <div className="p-6 pt-2">
                <div className="mb-2 text-xs font-medium text-[#00bf63]">
                  {service.category}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-4 text-gray-600">{service.description}</p>

                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-sm font-medium text-[#00bf63] transition-all duration-300 hover:text-[#00bf63]/80"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div
                className={cn(
                  "absolute inset-0 z-0 bg-gradient-to-t from-[#00bf63]/5 to-transparent opacity-0 transition-opacity duration-300",
                  hoveredCard === service.id && "opacity-100"
                )}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
