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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Immersive Experiences
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Step into Rwanda's environmental story through cutting-edge VR
              technology, interactive art installations, and cultural
              experiences that make climate action personal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  VR Environmental Journeys
                </h3>
                <p className="text-gray-600 mb-4">
                  Experience Rwanda's ecosystems like never before. Our virtual
                  reality simulations transport you to threatened forests,
                  pristine lakes, and conservation sites, creating emotional
                  connections that inspire real-world action and environmental
                  stewardship.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Experience VR <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Laptop className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Interactive Art Installations
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover sustainability through art projectors and digital
                  creativity. Our installations blend traditional Rwandan
                  culture with modern technology, making environmental education
                  accessible to everyone regardless of artistic background.
                </p>
                <Link
                  href="/#contactus"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  View installations <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div>
                <Image
                  src="/images/arvr environment.jpeg"
                  alt="VR Environmental Experience"
                  width={350}
                  height={300}
                  className="text-emerald-600"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Immersive Learning Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                          <Leaf className="h-3 w-3 text-emerald-600" />
                        </div>
                        <p className="text-gray-600">
                          Creates lasting emotional connections to environmental
                          issues
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                          <Leaf className="h-3 w-3 text-emerald-600" />
                        </div>
                        <p className="text-gray-600">
                          Makes complex climate concepts simple and relatable
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                          <Leaf className="h-3 w-3 text-emerald-600" />
                        </div>
                        <p className="text-gray-600">
                          Engages youth who find traditional education boring
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
                          Transforms climate discourse into personal, actionable
                          experiences
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                          <Leaf className="h-3 w-3 text-emerald-600" />
                        </div>
                        <p className="text-gray-600">
                          Bridges traditional culture with modern environmental
                          awareness
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
