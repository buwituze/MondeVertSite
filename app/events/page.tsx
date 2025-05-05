import { events } from "@/data/events";
import { EventCard } from "@/components/event-card";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
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
                  <Link href="#donate">View Upcoming Events</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#volunteer">Past Events</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Community members engaged in environmental art projects"
              width={800}
              height={600}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
