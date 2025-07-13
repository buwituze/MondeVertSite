"use client";
// events/page.tsx

import { useState, useMemo } from "react";
import { events } from "@/data/events";
import { EventCard } from "@/components/event-card";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function EventsPage() {
  const [showUpcoming, setShowUpcoming] = useState(false);

  const { upcomingEvents, pastEvents } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming: typeof events = [];
    const past: typeof events = [];

    events.forEach((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);

      if (eventDate >= today) {
        upcoming.push(event);
      } else {
        past.push(event);
      }
    });

    upcoming.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    past.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return { upcomingEvents: upcoming, pastEvents: past };
  }, []);

  const filteredEvents = showUpcoming ? upcomingEvents : pastEvents;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-2 items-center mt-5">
            <div className="mt-10 space-y-4 ml-1 md:ml-10">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore Our Events
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Join us for immersive experiences that unite art, culture, and
                technology to foster environmental stewardship and inspire
                sustainable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#e3c31e] hover:bg-green-700"
                >
                  <Link href="#events"> View Upcoming Events</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/images/Beyond-the-frame-event.jpg"
              alt="Community members engaged in environmental art projects"
              width={500}
              height={600}
              className="h-80 mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Toggle Button - Placed between Hero and Events sections */}
      <div className="container mx-auto px-4 pt-8 flex justify-center">
        <div
          className="relative flex items-center h-12 rounded-full bg-[#e3c31e] w-64 cursor-pointer"
          onClick={() => setShowUpcoming(!showUpcoming)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowUpcoming(!showUpcoming);
            }
          }}
          aria-label={`Switch to ${showUpcoming ? "past" : "upcoming"} events`}
        >
          <div
            className={`absolute w-1/2 h-10 mr-1 rounded-full transition-all duration-300 ease-in-out ${
              !showUpcoming
                ? "ml-1 left-0 bg-[#00bf63]"
                : "left-1/2 ml-[-3px] bg-[#00bf63]"
            }`}
          ></div>
          <span
            className={`w-1/2 text-center z-10 transition-colors duration-200 ${
              !showUpcoming ? "text-white font-medium" : "text-white"
            }`}
          >
            Happened
          </span>
          <span
            className={`w-1/2 text-center z-10 transition-colors duration-200 ${
              showUpcoming ? "text-white font-medium" : "text-black"
            }`}
          >
            Upcoming 1+
          </span>
        </div>
      </div>

      {/* Events Grid */}
      <section className="py-10" id="events">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {showUpcoming ? "Upcoming Events" : "Our Past Events"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-lg text-gray-500">
                  {showUpcoming
                    ? "No upcoming events scheduled at the moment. Check back soon!"
                    : "No past events to show for now. Check out our upcoming events!"}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
