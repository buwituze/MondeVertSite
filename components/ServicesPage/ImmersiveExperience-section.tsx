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

// 2. Immersive Experiences Section
export default function ImmersiveExperiencesSection() {
  return (
    <section id="immersive-experiences" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Immersive Experiences
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Blending traditional art with digital innovations such as AR/VR to
              create interactive and memorable environmental education
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AR/VR Environmental Simulations
                </h3>
                <p className="text-gray-600 mb-4">
                  Our augmented and virtual reality experiences transport
                  participants to different ecosystems and environmental
                  scenarios. These immersive simulations help users understand
                  complex environmental issues by experiencing them firsthand,
                  creating lasting impressions that inspire action.
                </p>
                <Link
                  href="/services/immersive/ar-vr"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Experience AR/VR <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Laptop className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Digital Art Installations
                </h3>
                <p className="text-gray-600 mb-4">
                  Our innovative digital art installations merge traditional
                  artistic techniques with modern technology. Using art
                  projectors and interactive elements, we create immersive
                  environments that engage audiences regardless of their
                  artistic background, making environmental education accessible
                  and enjoyable.
                </p>
                <Link
                  href="/services/immersive/digital-art"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  View installations <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="bg-emerald-100 p-8 flex items-center justify-center">
                <Monitor className="h-16 w-16 text-emerald-600" />
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Benefits of Immersive Learning
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                          <Leaf className="h-3 w-3 text-emerald-600" />
                        </div>
                        <p className="text-gray-600">
                          90% higher retention rates compared to traditional
                          learning
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                          <Leaf className="h-3 w-3 text-emerald-600" />
                        </div>
                        <p className="text-gray-600">
                          Increased emotional connection to environmental issues
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                          <Leaf className="h-3 w-3 text-emerald-600" />
                        </div>
                        <p className="text-gray-600">
                          Accessible to diverse learning styles and abilities
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                          <Leaf className="h-3 w-3 text-emerald-600" />
                        </div>
                        <p className="text-gray-600">
                          Creates memorable experiences that inspire long-term
                          behavior change
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                          <Leaf className="h-3 w-3 text-emerald-600" />
                        </div>
                        <p className="text-gray-600">
                          Bridges the gap between technological innovation and
                          environmental awareness
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
