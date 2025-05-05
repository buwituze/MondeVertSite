import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/types/event";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="group block w-full overflow-hidden rounded-lg relative"
    >
      {/* Image and overlay */}
      <div className="relative aspect-square w-full">
        <Image
          src={event.imageSrc || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

        {/* Text positioned at the bottom left */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className=" font-sans text-xl font-bold">{event.title}</h3>
          <p className="text-md font-sans text-white">on {event.date}</p>
          <p className=" font-sans text-sm text-gray-200">
            Posted: {event.postedDate}
          </p>
        </div>
      </div>
    </Link>
  );
}
