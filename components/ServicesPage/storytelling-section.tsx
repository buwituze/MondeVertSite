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
    <section id="storytelling" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Storytelling & Performative Arts
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Crafting compelling narratives through poetry, murals, and live
              performances to communicate environmental messages and inspire
              action.
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
                  Storytelling Workshops
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Learn to craft compelling narratives that resonate with
                  different audiences, highlight environmental issues, and
                  inspire action. Our workshops focus on effective communication
                  techniques that bring environmental stories to life.
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                    Narrative Arts
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
                  Live Mural Creation
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Experience the powerful combination of visual art and
                  environmental messaging through our live mural creation
                  events. Watch as artists transform blank canvases into
                  compelling environmental narratives before your eyes.
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                    Visual Performance
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
                  Environmental Poetry
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Our poetry workshops and performances use the power of words
                  to create emotional connections to environmental issues.
                  Participants learn to express complex environmental concepts
                  through accessible and moving poetry.
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                    Performance
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Storytelling Matters for Environmental Advocacy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-4">
                  Stories are powerful tools for creating emotional connections
                  and driving behavior change. Through our storytelling and
                  performative arts programs, we help participants:
                </p>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Develop compelling narratives that inspire environmental
                      action
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Learn techniques to make complex environmental issues
                      relatable
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Create memorable performances that leave lasting
                      impressions
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Our approach combines traditional storytelling with modern
                  techniques to:
                </p>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Engage audiences of all ages and backgrounds
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Transform abstract environmental concepts into tangible
                      stories
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Inspire community action through shared narratives
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Book a storytelling workshop{" "}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
