import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Palette,
  ImageIcon,
  Camera,
  Globe,
} from "lucide-react";

export default function EnvironmentalArtExhibitions() {
  return (
    <section id="art-exhibitions" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Environmental Art Exhibitions
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing environmental-themed art through visual storytelling
              and interactive displays that raise awareness and promote
              environmental consciousness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Gallery and Exhibition Spaces
                </h3>
                <p className="text-gray-600 mb-4">
                  MondeVert creates, selects, and manages artwork that raises
                  awareness and promotes environmental consciousness. Our
                  curated collections are displayed in our physical gallery
                  spaces, creating immersive experiences that educate and
                  inspire visitors about environmental stewardship.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Visit our galleries <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Multi-Platform Art Distribution
                </h3>
                <p className="text-gray-600 mb-4">
                  Our environmental artwork is available through various
                  channels including our online platforms, physical galleries,
                  airport shops, and other strategic locations throughout
                  Rwanda. This wide distribution ensures our message reaches
                  diverse audiences across the country.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Explore online collection{" "}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Our Exhibition Approach
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="relative h-48 bg-emerald-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-16 w-16 text-emerald-600" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Visual Storytelling
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    We use photography and visual arts to tell compelling
                    stories about environmental challenges and solutions,
                    creating emotional connections between viewers and nature.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      Photography & Visual Arts
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="relative h-48 bg-emerald-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-16 w-16 text-emerald-600" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Interactive Displays
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    Our exhibitions feature interactive elements that engage
                    visitors in environmental topics through hands-on
                    experiences, digital components, and participatory art
                    installations.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      Immersive Experiences
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="relative h-48 bg-emerald-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Palette className="h-16 w-16 text-emerald-600" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Artist Collaborations
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    We partner with local and international artists who share
                    our passion for environmental conservation, creating a
                    platform for diverse voices and perspectives on
                    environmental issues.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      Creative Partnerships
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Exhibition Impact
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Educational Outcomes
                </h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Increased awareness of local and global environmental
                      challenges
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Enhanced understanding of conservation efforts in Rwanda
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Inspiration for personal environmental action and behavior
                      change
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Cultural & Economic Benefits
                </h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Support for local artists and growth of Rwanda's creative
                      economy
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Cultural exchange and collaboration between diverse
                      communities
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Positioning Rwanda as a leader in environmental art and
                      education
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="#upcoming-exhibitions"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-8 transition-colors duration-300"
              >
                View Upcoming Exhibitions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
