"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Search, ArrowRight, Loader2 } from "lucide-react";
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

        // Create a query to get all documents from mediaGallery collection
        // Ordered by dateUploaded in descending order (newest first)
        const q = query(
          collection(db, "mediaGallery"),
          orderBy("dateUploaded", "desc")
        );

        const querySnapshot = await getDocs(q);

        const fetchedImages: DisplayImage[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Omit<MediaImage, "id">;

          // Convert Firestore timestamp to readable date string
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
      image.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const downloadImage = (image: DisplayImage, e: React.MouseEvent) => {
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
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl sm:mt-15">
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
          <div className="container px-4 md:px-6 w-full md:w-[92%] mx-auto">
            {/* "Looking for more?" section */}
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
                <div className="flex justify-between items-center mb-8">
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
                <div className="flex ">
                  {/* Images grid */}
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 ${
                      selectedImage ? "w-2/3" : "w-full"
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

                  {/* Side panel for selected image */}
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
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
