import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Users,
  Building,
  Map,
  Palette,
  Mic,
  Camera,
  Laptop,
} from "lucide-react";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Our <span className="text-[#00bf63]">Programs</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Uniting art, culture, and technology to foster environmental
              stewardship and inspire sustainable solutions among Rwandans and
              the broader community.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link
                    href={`#${category.id}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Workshops Section */}
      <section id="workshops" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Interactive Workshops & Training
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Hands-on learning experiences covering artistic, cultural, and
                technological disciplines to foster environmental awareness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workshops.map((workshop) => (
                <div
                  key={workshop.title}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col"
                >
                  <div className="relative h-48 bg-emerald-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {workshop.icon}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">
                      {workshop.description}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                        {workshop.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Experiences Section */}
      <section id="experiences" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Immersive Experiences
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Leveraging technology, art, and cultural exchange to create
                impactful enjoyment and learning opportunities.
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
                    Participants explore Rwanda's natural beauty, capturing
                    those moments while learning about ecosystems and various
                    conservation efforts. These guided experiences provide a
                    deeper understanding of local biodiversity and environmental
                    challenges.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Explore safaris <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Art Work, Gallery and Exhibitions
                  </h3>
                  <p className="text-gray-600 mb-4">
                    MondeVert creates, selects, and manages artwork that raises
                    awareness and promotes environmental consciousness. Our
                    pieces are available through our online platforms, physical
                    galleries, airport shops, and other strategic locations
                    throughout Rwanda.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    View gallery <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section id="community" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Community Engagement
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Partnering with communities to drive engagement, implement
                creative solutions, and nurture the creative economy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-emerald-100 flex items-center justify-center p-8">
                  <Palette className="h-16 w-16 text-emerald-600" />
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Public Art Initiatives
                  </h3>
                  <p className="text-gray-600">
                    We create murals and street art that beautify communities
                    while conveying important environmental messages. These
                    public installations serve as constant reminders of our
                    collective responsibility toward environmental stewardship.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-emerald-100 flex items-center justify-center p-8">
                  <Laptop className="h-16 w-16 text-emerald-600" />
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Interactive Digital Stations
                  </h3>
                  <p className="text-gray-600">
                    Our digital platforms facilitate civic engagement through
                    petitions and innovation pledges, promoting the development
                    of sustainable solutions and leveraging the creative economy
                    industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Training Section */}
      <section id="corporate" className="py-16">
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
                        Sustainability workshops tailored to your industry
                      </p>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <Leaf className="h-3 w-3 text-emerald-600" />
                      </div>
                      <p className="text-gray-600">
                        Team building activities centered around environmental
                        projects
                      </p>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <Leaf className="h-3 w-3 text-emerald-600" />
                      </div>
                      <p className="text-gray-600">
                        Corporate social responsibility program development
                      </p>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <Leaf className="h-3 w-3 text-emerald-600" />
                      </div>
                      <p className="text-gray-600">
                        Environmental impact assessments and improvement
                        strategies
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Benefits
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <Leaf className="h-3 w-3 text-emerald-600" />
                      </div>
                      <p className="text-gray-600">
                        Enhanced corporate image and brand reputation
                      </p>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <Leaf className="h-3 w-3 text-emerald-600" />
                      </div>
                      <p className="text-gray-600">
                        Improved employee engagement and satisfaction
                      </p>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <Leaf className="h-3 w-3 text-emerald-600" />
                      </div>
                      <p className="text-gray-600">
                        Cost savings through sustainable practices
                      </p>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <Leaf className="h-3 w-3 text-emerald-600" />
                      </div>
                      <p className="text-gray-600">
                        Contribution to global sustainability goals
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
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">
              Join Our Environmental Movement
            </h2>
            <p className="text-xl mb-8">
              Ready to make a difference? Contact us to learn more about our
              programs or to schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:mondevert.solutions@gmail.com"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-gray-100 transition-colors duration-300"
              >
                Email Us
              </Link>
              <Link
                href="tel:+250783446127"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-emerald-600 transition-colors duration-300"
              >
                Call: +250 783446127
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data
const programCategories = [
  {
    id: "workshops",
    title: "Interactive Workshops",
    description:
      "Hands-on learning experiences covering artistic, cultural, and technological disciplines.",
    icon: <Palette className="h-6 w-6 text-emerald-600" />,
  },
  {
    id: "experiences",
    title: "Immersive Experiences",
    description:
      "Technology, art, and cultural exchange creating impactful learning opportunities.",
    icon: <Map className="h-6 w-6 text-emerald-600" />,
  },
  {
    id: "community",
    title: "Community Engagement",
    description:
      "Partnering with communities to implement creative sustainable solutions.",
    icon: <Users className="h-6 w-6 text-emerald-600" />,
  },
  {
    id: "corporate",
    title: "Corporate Training",
    description:
      "Customized workshops promoting environmental awareness in the corporate sector.",
    icon: <Building className="h-6 w-6 text-emerald-600" />,
  },
];

const workshops = [
  {
    title: "Storytelling Workshops",
    description:
      "Learn to craft compelling narratives that resonate with different audiences, highlight environmental issues, and inspire action.",
    icon: <Mic className="h-16 w-16 text-emerald-600" />,
    tag: "Narrative Arts",
  },
  {
    title: "Mural & Canvas Painting",
    description:
      "Create visual representations of environmental themes, fostering awareness and promoting community engagement through art.",
    icon: <Palette className="h-16 w-16 text-emerald-600" />,
    tag: "Visual Arts",
  },
  {
    title: "Performing Arts",
    description:
      "Combine poetry and live mural creation with environmental advocacy, creating powerful and memorable experiences.",
    icon: <Mic className="h-16 w-16 text-emerald-600" />,
    tag: "Performance",
  },
  {
    title: "Visual Storytelling",
    description:
      "Learn photography techniques to capture and share compelling visual stories that highlight environmental challenges and solutions.",
    icon: <Camera className="h-16 w-16 text-emerald-600" />,
    tag: "Photography",
  },
  {
    title: "AR/VR Experiences",
    description:
      "Engage with immersive technologies that create interactive simulations educating young Rwandans about environmental issues.",
    icon: <Laptop className="h-16 w-16 text-emerald-600" />,
    tag: "Technology",
  },
  {
    title: "Art Creation with Projectors",
    description:
      "Merge traditional art with digital technology, creating immersive experiences accessible regardless of artistic background.",
    icon: <Laptop className="h-16 w-16 text-emerald-600" />,
    tag: "Digital Art",
  },
];
