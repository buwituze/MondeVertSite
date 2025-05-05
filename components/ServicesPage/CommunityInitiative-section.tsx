import Link from "next/link";
import { ArrowRight, Leaf, Paintbrush, Users, Building } from "lucide-react";

export default function CommunityLedInitiatives() {
  return (
    <section id="community-initiatives" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Community-Led Initiatives
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering local communities through murals, street art, and
              sustainable innovation while nurturing the creative economy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-emerald-100 flex items-center justify-center p-8">
                <Paintbrush className="h-16 w-16 text-emerald-600" />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Public Art Initiatives
                </h3>
                <p className="text-gray-600">
                  We create murals and street art that beautify communities
                  while conveying important environmental messages. These public
                  installations serve as constant reminders of our collective
                  responsibility toward environmental stewardship and
                  sustainable living.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-emerald-100 flex items-center justify-center p-8">
                <Users className="h-16 w-16 text-emerald-600" />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Community Empowerment
                </h3>
                <p className="text-gray-600">
                  We partner directly with local communities to implement
                  creative sustainable solutions that address environmental
                  challenges unique to their areas. Our approach focuses on
                  empowering communities with the tools, knowledge, and
                  resources to drive change.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Our Community Impact Approach
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Community Engagement Methods
                </h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Collaborative mural design and creation with local
                      residents
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Youth environmental leadership programs focused on
                      creative solutions
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Interactive digital stations for civic engagement and
                      innovation pledges
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Community-led environmental awareness campaigns and events
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Benefits to Communities
                </h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Beautification of public spaces through environmental art
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Development of local creative economy and artistic talent
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Increased environmental awareness and community ownership
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Sustainable solutions tailored to specific community needs
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
                Start a Community Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
