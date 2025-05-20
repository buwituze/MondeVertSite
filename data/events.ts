// data/events.ts

import type { Event } from "@/types/event";

export const events: Event[] = [
  {
    id: "beyond-the-frame",
    title: "Beyond The Frame",
    date: "24 May 2025",
    time: "9:00 AM - 1:00 PM",
    postedDate: "May 7, 2025",
    location: "African Leadership University, Kigali, Rwanda",
    introSentence: "**Are you ready to experience sustainability like never before?**",
    introDescription:"MondeVert invites you to step Beyond the Frame, Kigali's most innovative event where art, culture, and technology collide to spark environmental consciousness through immersive experiences!",
    description: "Kigali's most innovative event where art, culture, and technology collide to spark environmental consciousness through immersive experiences!",
    storyboardImageSrc: "/images/beyondtheframe-storyboard.jpg",
    aboutImageSrc: "/images/events.jpg",
    eventHighlights: [
      "**Live Art in Action** \\n\\nWatch talented local artists create stunning environmental murals",
      "**Spoken Word Magic** \\n\\nFeel the power of poetry as performers bring climate stories to life",
      "**Digital Wonderland** \\n\\nExplore virtual reality landscapes that will change how you see our planet",
      "**Connect & Create** \\n\\nJoin our Network with like-minded change-makers, artists, and innovators",
      "**Be Inspired** \\n\\nLeave with fresh ideas and a deeper connection to environmental stewardship"
    ],
    aboutEvent: "Picture this: Live mural artists transforming blank canvases into vibrant environmental stories right before your eyes. Poets dropping powerful verses about our planet that will give you goosebumps. And here's the kicker, virtual reality experiences that transport you into breathtaking natural worlds without leaving Kigali! \\n\\nThis isn't an environmental lecture - it's a celebration where creativity meets conservation, and YOU are part of the experience!",
    registrationInfo: "Limited spots available. RSVP to secure your place in this unforgettable experience! #TheActionTime",
    imageSrc: "/images/Beyond-the-frame-event.jpg",
    heroImageSrc: "/images/Beyond-the-frame-event.jpg",
    eventGallery: "https://ikambavisuals.pixieset.com/photoshoot/"
  },
];

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id);
}