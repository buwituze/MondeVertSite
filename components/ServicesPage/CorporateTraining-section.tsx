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

export default function CorporateTrainingsSection() {
  return (
    <section id="corporate-trainings" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Corporate Training & Team Building
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your workplace culture through creative sustainability
              programs that engage employees and strengthen your brand's
              environmental commitment.
            </p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Corporate Offerings
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Paintbrush className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Interactive mural creation and storytelling workshops for
                      team building
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Users className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Employee sustainability training through art and digital
                      experiences
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Building className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Custom CSR program development with creative community
                      impact
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Palette className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Brand enhancement through environmental murals and visual
                      campaigns
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Benefits for Your Business
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Authentic sustainability branding through creative
                      storytelling
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Enhanced employee engagement through meaningful artistic
                      activities
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Measurable community impact that aligns with your company
                      values
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Creative content for marketing and social media campaigns
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-8 transition-colors duration-300"
              >
                Request Corporate Training
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Creative Team Building
              </h3>
              <p className="text-gray-600">
                Unite your team through collaborative mural painting,
                storytelling workshops, and environmental challenges that build
                lasting connections.
              </p>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sustainability Consulting
              </h3>
              <p className="text-gray-600">
                Strategic guidance to integrate environmental stewardship into
                your operations with creative implementation and community
                engagement.
              </p>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Brand Enhancement
              </h3>
              <p className="text-gray-600">
                Showcase your environmental commitment through custom murals,
                visual campaigns, and authentic storytelling that resonates with
                your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
