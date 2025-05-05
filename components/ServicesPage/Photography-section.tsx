import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Leaf,
  Mic,
  Monitor,
  Camera,
  Paintbrush,
  ImageIcon,
  Users,
  Map,
  Palette,
  Laptop,
  Building,
} from "lucide-react";

// 4. Interactive Nature Photography Section
export default function NaturePhotographySection() {
  return (
    <section id="nature-photography" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Interactive Nature Photography
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Guided explorations of Rwanda's natural landscapes combining
              adventure, photography skills, and environmental education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Environmental Safaris
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore Rwanda's breathtaking natural landscapes while
                  learning essential photography skills. Our guided safaris take
                  you to stunning locations where you'll capture the beauty of
                  local ecosystems while gaining a deeper understanding of
                  conservation efforts and environmental challenges.
                </p>
                <Link
                  href="/services/photography/safaris"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Explore safaris <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Visual Storytelling Workshops
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to craft compelling visual narratives that highlight
                  environmental issues and inspire action. Our photography
                  workshops teach technical skills while focusing on how to use
                  images to tell powerful stories about our environment and the
                  need for conservation.
                </p>
                <Link
                  href="/services/photography/workshops"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Join a workshop <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Photography Experience Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Expert Guidance
                </h4>
                <p className="text-gray-600">
                  Learn from experienced photographers who specialize in nature
                  and environmental photography
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Map className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Stunning Locations
                </h4>
                <p className="text-gray-600">
                  Visit breathtaking natural settings throughout Rwanda, from
                  forests to lakes and mountains
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Conservation Focus
                </h4>
                <p className="text-gray-600">
                  Connect photography with environmental awareness and
                  conservation efforts
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
              >
                View our photography gallery{" "}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
