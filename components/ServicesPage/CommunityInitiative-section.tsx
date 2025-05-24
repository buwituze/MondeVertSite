import Link from "next/link";
import { ArrowRight, Leaf, Paintbrush, Users, Building } from "lucide-react";
import Image from "next/image";

export default function CommunityLedInitiatives() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Community-Led Initiatives
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming Rwanda's public spaces into environmental advocacy
              hubs through collaborative murals, digital innovation stations,
              and youth-driven sustainability solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col md:flex-row">
              <div>
                <Image
                  src="/images/event.jpg"
                  alt="Mural"
                  width={250}
                  height={400}
                  className="h-73"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Environmental Murals & Street Art
                </h3>
                <p className="text-gray-600">
                  We co-create vibrant murals with local communities that turn
                  blank walls into powerful environmental messages. These
                  permanent installations serve as daily reminders of our
                  collective climate responsibility while beautifying Rwanda's
                  urban spaces.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col md:flex-row">
              <Image
                src="/images/communityEngagement.png"
                alt="Community Engagement"
                width={250}
                height={500}
              />
              <div className="md:w-3/5 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Youth Innovation Empowerment
                </h3>
                <p className="text-gray-600">
                  Through digital stations and innovation pledge platforms, we
                  empower Rwanda's youth (ages 13-30) to develop and commit to
                  sustainable solutions. Our programs nurture the next
                  generation of environmental leaders and creative economy
                  entrepreneurs.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Our Community Impact Strategy
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Proven Engagement Methods
                </h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Collaborative mural design sessions with 100+ community
                      members
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Digital innovation stations for civic environmental
                      pledges
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Youth leadership programs targeting 1M Rwandans aged 13-30
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Partnership with ALU and government agencies for scaled
                      impact
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Measurable Community Benefits
                </h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Permanent environmental awareness through public art
                      installations
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      63.2% of participants gain practical sustainability skills
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Enhanced community ownership of environmental challenges
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Creative economy growth through paid artist participation
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/getinvolved/#volunteer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-8 transition-colors duration-300"
              >
                Join Our Community Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
