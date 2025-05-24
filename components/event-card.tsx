import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import type { Event } from "@/types/event";

interface EventCardProps {
  event: Event;
}

export const EventCard = memo(function EventCard({ event }: EventCardProps) {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Format posted date for display
  const formatPostedDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Link
      href={`/events/${event.id}`}
      className="group block w-full overflow-hidden rounded-lg relative focus:outline-none focus:ring-2 focus:ring-[#00bf63] focus:ring-offset-2 transition-all duration-200"
      aria-label={`View details for ${event.title}`}
    >
      {/* Image and overlay */}
      <div className="relative aspect-square w-full">
        <Image
          src={event.imageSrc || "/placeholder.svg"}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-all duration-300"></div>

        {/* Text positioned at the bottom left */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-sans text-xl font-bold mb-1 line-clamp-2 group-hover:text-[#e3c31e] transition-colors duration-200">
            {event.title}
          </h3>
          <p className="text-md font-sans text-white/90 mb-1">
            {formatDate(event.date)}
          </p>
          <p className="font-sans text-sm text-gray-200">
            Posted: {formatPostedDate(event.postedDate)}
          </p>
        </div>

        {/* Hover indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-[#00bf63] text-white px-2 py-1 rounded-full text-xs font-medium">
            View Details
          </div>
        </div>
      </div>
    </Link>
  );
});
