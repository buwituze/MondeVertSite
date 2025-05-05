// events/[id]/page.tsx
import { getEventById } from "@/data/events";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";

export default function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={event.heroImageSrc || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {event.title}
            </h1>
            <p className="font-sans text-lg text-white opacity-90">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction and Details Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Storyboard Image & Introduction - Takes up 2/3 of the width */}
            <div className="lg:col-span-2 space-y-8">
              <p className=" font-sans leading-relaxed text-gray-700">
                This is experiencing the world like never before.
              </p>

              {/* Storyboard Image */}
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={event.storyboardImageSrc || "/placeholder.svg"}
                  alt="Event Storyboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Event Details Card - Takes up 1/3 of the width */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md lg:sticky lg:top-4 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
                Event Details
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CalendarIcon className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-700">Date</p>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <ClockIcon className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-700">Time</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-700">Location</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
              </div>

              <button className="font-sans mt-8 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
                RSVP Now
              </button>

              <p className="font-sans mt-4 text-sm text-gray-600 text-center">
                {event.registrationInfo}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            About the Event
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* About Image */}
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={event.aboutImageSrc || "/placeholder.svg"}
                alt="About the event"
                fill
                className="object-cover"
              />
            </div>

            {/* About Content */}
            <div className="space-y-4">
              <p className="font-sans text-gray-700 leading-relaxed">
                {event.aboutEvent}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What to Expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {event.eventHighlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="font-sans inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
                  Highlight {index + 1}
                </span>
                <p className="font-sans text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Events */}
      <section className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <Link
            href="/events"
            className="font-sans text-green-600 hover:text-green-800 font-medium flex items-center"
          >
            ← Back to all events
          </Link>
        </div>
      </section>
    </div>
  );
}
