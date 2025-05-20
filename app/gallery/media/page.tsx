"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Search, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Media() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1552764307-5272f13c5121?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Environmental art workshop in Kigali",
      event: "Beyond the Frame",
      date: "March 15, 2025",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Students creating recycled art installations",
      event: "Youth Conservation Workshop",
      date: "February 2, 2025",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551886775-3f738129db9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Community mural painting in downtown Kigali",
      event: "Art for Conservation",
      date: "January 18, 2025",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Interactive storytelling about Rwanda's biodiversity",
      event: "Environmental Narratives",
      date: "December 10, 2024",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "AR/VR environmental experiences showcase",
      event: "Tech & Nature Exhibition",
      date: "November 5, 2024",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Young artists presenting environmental pieces",
      event: "Youth Art Competition",
      date: "October 22, 2024",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Collaborative painting session at community center",
      event: "Community Art Day",
      date: "September 15, 2024",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1464998857633-50e59685bbe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Guided environmental safari in Akagera National Park",
      event: "Art in Nature",
      date: "August 28, 2024",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Photography workshop capturing wildlife",
      event: "Nature Through The Lens",
      date: "July 12, 2024",
    },
  ]);

  interface Image {
    id: number;
    src: string;
    event: string;
    date: string;
    caption: string;
  }

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredImages = images.filter(
    (image) =>
      image.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const downloadImage = (image: Image, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the panel when clicking download

    // In a real application, you would implement proper download functionality
    // This is a simplified version for demonstration
    const link = document.createElement("a");
    link.href = image.src;
    link.download = `mondevert-${image.event
      .replace(/\s+/g, "-")
      .toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section - Kept as requested */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Media Gallery
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore our collection of images showcasing MondeVert's
                environmental art events, workshops, and community projects in
                Rwanda.
              </p>
              <p className="text-sm text-muted-foreground">
                Looking for specific event photos? Visit our{" "}
                <Link href="/events" className="text-[#00bf63] hover:underline">
                  Events page
                </Link>{" "}
                to browse complete galleries for each event.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            {/* "Looking for more?" section moved to the top */}
            <div className="mb-12 text-center">
              <div className="inline-block rounded-lg bg-yellow-200/50 p-6 max-w-2xl mb-4">
                <h3 className="text-lg font-bold mb-2">Looking for more?</h3>
                <p className="text-muted-foreground mb-4">
                  Visit our events page to explore complete photo galleries from
                  specific workshops, exhibitions, and community projects.
                </p>
                <Button asChild className="bg-[#00bf63] hover:bg-[#00a056]">
                  <Link href="/events">
                    Browse Event Galleries{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Search bar */}
            <div className="flex justify-between items-center mb-15 ">
              <h2 className="text-2xl font-bold">Featured Images</h2>
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by event or date..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Main content with side panel view */}
            <div className="flex">
              {/* Images grid - simplified as requested */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 ${
                  selectedImage ? "w-2/3" : "w-full"
                }`}
              >
                {filteredImages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 space-y-2 text-center col-span-4">
                    <p className="text-lg font-medium">No images found</p>
                    <p className="text-muted-foreground">
                      Try a different search term
                    </p>
                  </div>
                ) : (
                  <>
                    {filteredImages.map((image) => (
                      <div
                        key={image.id}
                        className="group relative overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.caption}
                            className="object-cover transition-transform group-hover:scale-105"
                            fill
                          />
                          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                          <button
                            onClick={(e) => downloadImage(image, e)}
                            className="absolute top-2 right-2 bg-white/80 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                            title="Download image"
                          >
                            <Download className="h-4 w-4 text-[#00bf63]" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Side panel for selected image - Google Images style */}
              {selectedImage && (
                <div className="w-2/3 border-l ml-4 pl-4 h-screen sticky top-0 overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-medium">
                      {selectedImage.event}
                    </h3>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Close
                    </button>
                  </div>

                  <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.caption}
                      className="object-contain"
                      fill
                    />
                  </div>

                  <div className="space-y-4">
                    <p>{selectedImage.caption}</p>
                    <p className="text-sm text-muted-foreground">
                      Event: {selectedImage.event}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      On {selectedImage.date}
                    </p>
                    <Button
                      onClick={(e) => downloadImage(selectedImage, e)}
                      className="w-full bg-[#e3c31e] hover:bg-[#e3c31e]"
                    >
                      <Download className="h-4 w-4 mr-2" /> Download Image
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
