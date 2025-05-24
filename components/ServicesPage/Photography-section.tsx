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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Visual Storytelling & Photography
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Capture Rwanda's natural beauty while learning to tell powerful
              environmental stories that inspire conservation and community
              action.
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
                  Explore Rwanda's breathtaking landscapes through guided
                  photography adventures. Document conservation efforts while
                  discovering local ecosystems and learning how visual
                  storytelling can drive environmental awareness and action.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Join a safari <ArrowRight className="ml-1 h-4 w-4" />
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
                  Master the art of environmental storytelling through
                  photography. Learn technical skills while developing
                  compelling narratives that highlight conservation challenges
                  and inspire community engagement in sustainability efforts.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Book a workshop <ArrowRight className="ml-1 h-4 w-4" />
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
                  Professional Guidance
                </h4>
                <p className="text-gray-600">
                  Learn from experienced visual storytellers who specialize in
                  conservation photography and environmental advocacy.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Map className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Diverse Ecosystems
                </h4>
                <p className="text-gray-600">
                  Explore Rwanda's stunning natural heritage from pristine
                  forests to vibrant lakes, each with unique conservation
                  stories.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Impact-Driven Content
                </h4>
                <p className="text-gray-600">
                  Create powerful visual content that contributes to
                  conservation awareness and environmental education in your
                  community.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/#contactus"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
              >
                View our photography gallery
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
