"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  imageSrc: string;
}

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Forest Harmony",
    price: "RWF 75,000",
    description:
      "A vibrant depiction of Rwanda's lush forests, showcasing the delicate balance between wildlife and vegetation. Created using sustainable materials and natural pigments.",
    imageSrc: "/images/Nyugwe Forest.jpg",
  },
  {
    id: "2",
    name: "Water Guardian",
    price: "RWF 85,000",
    description:
      "An evocative piece highlighting the importance of water conservation in Rwanda. The flowing blues and greens represent the lifeblood of our ecosystems.",
    imageSrc: "/images/lake kivu.jpg",
  },
  {
    id: "3",
    name: "Earth Revival",
    price: "RWF 95,000",
    description:
      "A powerful statement on regeneration and hope, this mixed-media artwork combines traditional Rwandan patterns with contemporary environmental themes.",
    imageSrc: "/placeholder.svg?height=600&width=450",
  },
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Environmental Art Collection
          </h2>
          <p className="text-gray-700 text-lg">
            Explore our curated collection of environmental artwork created by
            our artists and community collaborators. Each piece tells a story of
            our natural world and inspires sustainable action.
          </p>
        </div>

        <div className="text-center mb-12">
          <Button
            asChild
            className="group bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-md"
          >
            <Link href="/gallery">
              View Art Gallery
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.imageSrc || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`Expand details for ${product.name}`}
                >
                  <Expand className="h-5 w-5 text-gray-800" />
                </button>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-800 font-medium mt-1">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={!!selectedProduct}
          onOpenChange={(open) => !open && setSelectedProduct(null)}
        >
          <DialogContent className="w-full h-full">
            <div className="flex flex-col gap-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProduct?.name}
                </DialogTitle>
              </DialogHeader>

              <div className="relative w-full aspect-[4/3] mx-auto">
                {selectedProduct && (
                  <Image
                    src={selectedProduct.imageSrc || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover rounded-md"
                  />
                )}
              </div>

              <div className="border border-gray-200 rounded-md p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">
                    {selectedProduct?.name}
                  </h3>
                  <p className="text-gray-800 font-medium">
                    {selectedProduct?.price}
                  </p>
                </div>
                <p className="text-gray-700">{selectedProduct?.description}</p>
              </div>

              <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white">
                Inquire About This Piece
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
