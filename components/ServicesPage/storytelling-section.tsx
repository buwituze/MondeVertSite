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

// 1. Storytelling & Performative Arts Section
export default function StorytellingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Storytelling & Performative Arts
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Breaking through climate apathy with emotionally powerful poetry,
              live mural creation, and immersive performances that transform
              environmental education from boring to unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
              <div className="relative h-48 bg-emerald-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mic className="h-16 w-16 text-emerald-600" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Environmental Storytelling Workshops
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Transform complex climate data into compelling narratives that
                  move people to action. Our workshops teach digital
                  storytelling, community engagement, and visual
                  communication—skills 63.2% of Rwandans actively seek.
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                    Impact Communication
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
                  Live Mural Performance
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Watch environmental stories come alive as artists create
                  stunning murals in real-time during our Beyond the Frame
                  events. These live performances combine visual art with
                  environmental advocacy for maximum emotional impact.
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                    Live Art Creation
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
              <div className="relative h-48 bg-emerald-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mic className="h-16 w-16 text-emerald-600" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Climate Poetry & Performance
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Poetry slams and live performances that make environmental
                  issues emotionally relatable. Our performing arts events
                  transform abstract climate concepts into powerful personal
                  stories that inspire immediate action.
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                    Emotional Engagement
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Our Storytelling Approach Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-4">
                  Traditional environmental education fails because it's
                  abstract and boring. Our storytelling methodology bridges
                  emotion and action, helping participants:
                </p>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Transform climate statistics into personal, relatable
                      stories
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Create emotional connections that drive behavioral change
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Develop practical communication skills for environmental
                      advocacy
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Our proven approach combines traditional Rwandan culture with
                  cutting-edge digital technology to:
                </p>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Reach diverse audiences through culturally relevant
                      narratives
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Generate 98% participant excitement through immersive
                      experiences
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Build community networks of environmental storytellers
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/events"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
              >
                View Our Events & workshop
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
