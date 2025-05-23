import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Palette,
  ImageIcon,
  Camera,
  Globe,
} from "lucide-react";

export default function EnvironmentalArtExhibitions() {
  return (
    <section id="art-exhibitions" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Environmental Art Exhibitions
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Experience Rwanda's environmental story through powerful visual
              art that transforms climate awareness into emotional connection
              and actionable change.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Curated Environmental Collections
                </h3>
                <p className="text-gray-600 mb-4">
                  Our carefully selected artwork showcases Rwanda's
                  environmental journey through local artists' eyes. Each piece
                  tells a story of conservation, challenge, and hope—creating
                  immersive gallery experiences that inspire visitors to become
                  environmental stewards.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Visit our gallery <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Multi-Platform Art Access
                </h3>
                <p className="text-gray-600 mb-4">
                  From Kigali airport shops to our online platform and physical
                  galleries—environmental art reaches every corner of Rwanda. We
                  make conservation consciousness accessible through strategic
                  placement and digital innovation.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Explore collection <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Our Exhibition Philosophy
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="relative h-48 bg-emerald-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-16 w-16 text-emerald-600" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Visual Storytelling
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    Photography and visual arts capture Rwanda's environmental
                    reality—from biodiversity loss to conservation victories.
                    Each image sparks emotion and drives personal commitment to
                    change.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      Impact Through Imagery
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="relative h-48 bg-emerald-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-16 w-16 text-emerald-600" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Interactive Experiences
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    Beyond passive viewing—visitors engage with VR climate
                    simulations, digital innovation pledges, and hands-on
                    sustainability demonstrations that make environmental action
                    tangible and urgent.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      Technology Meets Art
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
                    Local Artist Platform
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    Rwanda's creative talent drives our exhibitions. We showcase
                    20+ photographers and visual artists who transform
                    environmental challenges into compelling art that resonates
                    with local communities.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      Creative Economy Growth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Proven Exhibition Impact
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Measurable Awareness Growth
                </h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      98% visitor excitement rate from our Beyond the Frame
                      event testing
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      100+ individuals mobilized for environmental action
                      through art
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Enhanced climate science understanding through emotional
                      connection
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Community & Economic Value
                </h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      20+ local artists earning through environmental art sales
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Cross-community collaboration driving Rwanda's creative
                      economy
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">
                      Positioning Rwanda as East Africa's environmental art hub
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/#contactus"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-8 transition-colors duration-300"
              >
                Experience Our Next Exhibition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
