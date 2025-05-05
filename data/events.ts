// data/events.ts

import type { Event } from "@/types/event";

export const events: Event[] = [
  {
    id: "beyond-the-frame",
    title: "Beyond The Frame",
    date: "20-Apr-2025",
    time: "10:00 AM - 4:00 PM",
    postedDate: "March 28, 2025",
    location: "Kigali Creative Hub, Kigali, Rwanda",
    description:
      "Join us for a community mural painting event that explores environmental themes through collaborative art.",
    storyboardImageSrc: "/images/beyond-the-frame-storyboard.png",
    aboutImageSrc: "/images/beyond-the-frame-about.png",
    eventHighlights: [
      "Hands-on mural painting workshops",
      "Environmental storytelling sessions",
      "Collaborative art creation",
      "Networking with local artists and environmentalists"
    ],
    aboutEvent: "Beyond The Frame is an immersive art experience that brings together artists, environmentalists, and community members to create a large-scale mural that depicts Rwanda's natural beauty and environmental challenges. Participants will learn mural painting techniques while engaging in discussions about environmental stewardship and conservation efforts in Rwanda.",
    registrationInfo: "Registration is required for this event. Please complete the registration form below.",
    imageSrc: "/images/beyond-the-frame-card.png",
    heroImageSrc: "/images/beyond-the-frame-hero.png",
  },
  {
    id: "eco-safari",
    title: "Eco Safari Experience",
    date: "15-May-2025",
    time: "6:00 AM - 6:00 PM",
    postedDate: "April 2, 2025",
    location: "Akagera National Park, Eastern Province, Rwanda",
    description:
      "Explore Rwanda's natural beauty while learning about ecosystems and conservation efforts.",
    storyboardImageSrc: "/images/eco-safari-storyboard.png",
    aboutImageSrc: "/images/eco-safari-about.png",
    eventHighlights: [
      "Guided nature walks",
      "Wildlife photography workshops",
      "Conservation talks by local experts",
      "Hands-on conservation activities"
    ],
    aboutEvent: "Join us for an unforgettable Eco Safari Experience that combines adventure with environmental education. Explore Rwanda's breathtaking landscapes while learning about local ecosystems and conservation initiatives. Our experienced guides will lead you through diverse habitats, sharing insights about Rwanda's unique biodiversity and the challenges it faces.",
    registrationInfo: "Registration is required for this event. Please complete the registration form below.",
    imageSrc: "/placeholder.svg?height=600&width=400",
    heroImageSrc: "/placeholder.svg?height=800&width=1600",
  },
  {
    id: "digital-storytelling",
    title: "Digital Storytelling Workshop",
    date: "10-Jun-2025",
    time: "9:00 AM - 3:00 PM",
    postedDate: "April 15, 2025",
    location: "MondeVert Hub, Kigali, Rwanda",
    description:
      "Learn to craft compelling digital narratives that highlight environmental issues and inspire action.",
    storyboardImageSrc: "/images/digital-storytelling-storyboard.png",
    aboutImageSrc: "/images/digital-storytelling-about.png",
    eventHighlights: [
      "Introduction to digital storytelling techniques",
      "Hands-on training with digital tools and platforms",
      "Narrative development workshops",
      "Collaborative storytelling projects"
    ],
    aboutEvent: "The Digital Storytelling Workshop is designed to equip participants with the skills to create powerful digital narratives focused on environmental themes. Through a combination of technical training and creative exercises, participants will learn to use digital tools to craft stories that raise awareness about environmental issues and inspire positive action.",
    registrationInfo: "Registration is required for this event. Please complete the registration form below.",
    imageSrc: "/placeholder.svg?height=600&width=400",
    heroImageSrc: "/placeholder.svg?height=800&width=1600",
  },
];

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id);
}