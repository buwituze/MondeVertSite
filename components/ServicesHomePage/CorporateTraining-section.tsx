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
              Customized workshops for businesses and institutions, promoting
              environmental awareness and sustainable practices within the
              corporate sector.
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
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Sustainability workshops tailored to your industry and
                      business needs
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Team building activities centered around environmental
                      projects and creative problem-solving
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Corporate social responsibility program development with
                      environmental focus
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Environmental impact assessments and improvement
                      strategies for your business
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
                      Enhanced corporate image and brand reputation through
                      sustainability initiatives
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Improved employee engagement and satisfaction through
                      meaningful activities
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Cost savings through implementation of sustainable
                      business practices
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Meaningful contribution to global sustainability goals
                      aligned with your company values
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
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
                Team Building Activities
              </h3>
              <p className="text-gray-600">
                Creative workshops that foster collaboration while promoting
                environmental awareness. Perfect for strengthening team bonds
                through meaningful projects.
              </p>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sustainability Leadership
              </h3>
              <p className="text-gray-600">
                Specialized training for executives and management teams to
                incorporate sustainability into strategic decision-making and
                company culture.
              </p>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Green Office Initiatives
              </h3>
              <p className="text-gray-600">
                Practical workshops to implement sustainable practices in daily
                operations, reducing your company's environmental footprint
                while optimizing resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
