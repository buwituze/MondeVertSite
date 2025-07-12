"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Search, ArrowRight, Loader2, X } from "lucide-react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MediaImage {
  id: string;
  src: string;
  event: string;
  dateUploaded: Timestamp;
  caption: string;
}

interface DisplayImage {
  id: string;
  src: string;
  event: string;
  date: string;
  caption: string;
}

export default function Media() {
  const [images, setImages] = useState<DisplayImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<DisplayImage | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch images from Firebase
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const q = query(
          collection(db, "artGallery"),
          orderBy("dateUploaded", "desc")
        );

        const querySnapshot = await getDocs(q);

        const fetchedImages: DisplayImage[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Omit<MediaImage, "id">;
          const dateUploaded = data.dateUploaded?.toDate();
          const formattedDate = dateUploaded
            ? dateUploaded.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Unknown date";

          fetchedImages.push({
            id: doc.id,
            src: data.src,
            event: data.event,
            caption: data.caption,
            date: formattedDate,
          });
        });

        setImages(fetchedImages);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages = images.filter(
    (image) =>
      (image.caption?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (image.event?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (image.date?.toLowerCase() || "").includes(searchTerm.toLowerCase())
  );

  // Download image
  const downloadImage = async (image: DisplayImage, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const response = await fetch(image.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `mondevert-${image.event
        .replace(/\s+/g, "-")
        .toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      // Fallback to original method if fetch fails
      const link = document.createElement("a");
      link.href = image.src;
      link.download = `mondevert-${image.event
        .replace(/\s+/g, "-")
        .toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-22 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center justify-center xs:space-y-10 md:space-y-4 text-center">
              <h1 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl sm:mt-15">
                Art Gallery
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

        <section className="w-full py-10 md:py-12">
          <div className="container px-4 md:px-6 w-full md:w-[92%] mx-auto">
            {/* Loading State */}
            {loading && (
              <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-[#00bf63]" />
                <p className="text-lg font-medium">Loading images...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <p className="text-lg font-medium text-red-600">Error</p>
                <p className="text-muted-foreground text-center max-w-md">
                  {error}
                </p>
                <Button
                  onClick={() => window.location.reload()}
                  variant="outline"
                >
                  Try Again
                </Button>
              </div>
            )}

            {/* Content - only show when not loading and no error */}
            {!loading && !error && (
              <>
                {/* Search bar */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Featured Art</h2>
                </div>

                {/* Main content with side panel view */}
                <div className="flex ">
                  {/* Images grid */}
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 ${
                      selectedImage ? "md:w-2/3 w-full" : "w-full"
                    }`}
                  >
                    {filteredImages.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-64 space-y-2 text-center col-span-4">
                        <p className="text-lg font-medium">
                          {searchTerm
                            ? "No images found"
                            : "No images available"}
                        </p>
                        <p className="text-muted-foreground">
                          {searchTerm
                            ? "Try a different search term"
                            : "Images will appear here when added to the gallery"}
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
                                alt={image.caption ?? "Event Image"}
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

                  {/* Desktop Side panel for selected image */}
                  {selectedImage && (
                    <div className="hidden md:block w-2/3 border-l ml-4 pl-4 h-screen sticky top-0 overflow-y-auto">
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
                          alt={selectedImage.caption ?? "Event Image"}
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
                          Uploaded on {selectedImage.date}
                        </p>
                        <Button
                          onClick={(e) => downloadImage(selectedImage, e)}
                          className="w-full bg-[#e3c31e] hover:bg-[#d4b419]"
                        >
                          <Download className="h-4 w-4 mr-2" /> Download Image
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Modal for selected image */}
                {selectedImage && (
                  <div className="md:hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-sm w-full max-h-[90vh] overflow-y-auto">
                      <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="text-lg font-medium">
                          {selectedImage.event}
                        </h3>
                        <button
                          onClick={() => setSelectedImage(null)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="p-4">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
                          <Image
                            src={selectedImage.src}
                            alt={selectedImage.caption ?? "Event Image"}
                            className="object-contain"
                            fill
                          />
                        </div>

                        <div className="space-y-4">
                          <p className="text-sm">{selectedImage.caption}</p>
                          <p className="text-sm text-muted-foreground">
                            Event: {selectedImage.event}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Uploaded on {selectedImage.date}
                          </p>
                          <Button
                            onClick={(e) => downloadImage(selectedImage, e)}
                            className="w-full bg-[#e3c31e] hover:bg-[#d4b419]"
                          >
                            <Download className="h-4 w-4 mr-2" /> Download Image
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
