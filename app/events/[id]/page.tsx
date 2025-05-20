"use client";

import { useEffect, useState } from "react";
import { getEventById } from "@/data/events";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";

// Helper function to parse markdown-like syntax
function parseMarkdown(text: string) {
  if (!text) return "";

  // Handle bold text (**text**)
  const boldParsed = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Improved handling for newlines (\n\n)
  return boldParsed.split("\\n\\n").map((part, index) => (
    <p key={index} className="font-sans leading-relaxed text-gray-700 mb-2">
      <span dangerouslySetInnerHTML={{ __html: part }} />
    </p>
  ));
}

// Function to check if an event date is in the past
function isEventInPast(dateString: string): boolean {
  const today = new Date();

  // Parse the event date (format: "24 May 2025")
  const [day, month, year] = dateString.split(" ");
  const eventDate = new Date(`${month} ${day}, ${year}`);

  return today > eventDate;
}

const EventDetailPage = () => {
  const params = useParams();
  const eventId =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
      ? params.id[0]
      : "";
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (eventId) {
      const eventData = getEventById(eventId);
      setEvent(eventData);
      setLoading(false);
    }
  }, [eventId]);

  if (loading) {
    return <div className="py-16 text-center">Loading event...</div>;
  }

  if (!event) {
    return notFound();
  }

  // Check if event is in past
  const eventIsPast = isEventInPast(event.date);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px]">
        <Image
          src={event.heroImageSrc || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container w-200 mt-35 ml-14 px-4">
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
      <section className="py-12 w-[92%] ml-13 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Storyboard Image & Introduction - Takes up 2/3 of the width */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: event.introSentence.replace(
                      /\*\*(.*?)\*\*/g,
                      "<strong>$1</strong>"
                    ),
                  }}
                  className="font-sans leading-relaxed text-gray-700"
                />

                <p className="font-sans leading-relaxed text-gray-700">
                  {event.introDescription}
                </p>
              </div>

              {/* Storyboard Image */}
              <div className="relative h-120 w-full rounded-lg overflow-hidden shadow-lg">
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

              <button className="font-sans mt-8 w-full bg-gradient-to-r from-[#00bf63] to-[#ffd700] text-white font-medium py-3 px-4 rounded-md transition-colors">
                RSVP Now
              </button>

              <p className="font-sans mt-4 text-sm text-gray-600 text-center">
                {event.registrationInfo}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Should You Attend Section - New permanent section */}
      <section className="py-12 bg-yellow-300/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-[97%] ml-5">
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
            <div className="space-y-4 flex flex-col gap-3">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">
                  Why Should You Attend? 🌍✨
                </h2>
                {parseMarkdown(event.aboutEvent)}
              </div>

              {/* Only show gallery button if event date is in the past */}
              {eventIsPast && (
                <Link
                  href={event.eventGallery}
                  className="font-sans bg-[#e3c31e] w-34 text-white py-2 px-4 rounded-md hover:bg-yellow-300 font-medium"
                >
                  Event Gallery
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-12 w-[92%] ml-13 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What to Expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {event.eventHighlights.map((highlight: string, index: number) => {
              const parts = highlight.split("\\n\\n");
              const title = parts[0];
              const description = parts.length > 1 ? parts[1] : "";

              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm"
                >
                  <span className="font-sans inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
                    Highlight {index + 1}
                  </span>
                  <h3 className="font-medium text-gray-900 mb-2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: title.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>"
                        ),
                      }}
                    />
                  </h3>
                  <p className="font-sans text-gray-700">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Back to Events */}
      <section className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <Link
            href="/events"
            className="font-sans ml-5 text-green-600 hover:text-green-800 font-medium flex items-center"
          >
            ← Back to all events
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventDetailPage;
