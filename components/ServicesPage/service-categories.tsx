import {
  Paintbrush,
  Mic,
  Monitor,
  Camera,
  Users,
  ImageIcon,
} from "lucide-react";

export default function ServiceCategories() {
  const categories = [
    {
      name: "Creative Education",
      icon: <Paintbrush className="h-6 w-6" />,
      description: "Artistic approaches to environmental learning",
    },
    {
      name: "Performative Arts",
      icon: <Mic className="h-6 w-6" />,
      description: "Storytelling and live performances",
    },
    {
      name: "Interactive Technology",
      icon: <Monitor className="h-6 w-6" />,
      description: "AR/VR and digital experiences",
    },
    {
      name: "Visual Storytelling",
      icon: <Camera className="h-6 w-6" />,
      description: "Photography and visual narratives",
    },
    {
      name: "Community Engagement",
      icon: <Users className="h-6 w-6" />,
      description: "Public art and local initiatives",
    },
    {
      name: "Art Exhibitions",
      icon: <ImageIcon className="h-6 w-6" />,
      description: "Environmental themed galleries",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className=" font-subheading text-3xl font-bold text-gray-900 md:text-4xl">
            Our Service Category
          </h2>
          <p className="font-sans mx-auto mt-4 max-w-2xl text-gray-600">
            Discover how we blend art, culture, and technology to create
            impactful environmental education
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl bg-[#ffd700]/30 p-6 text-center transition-all duration-300 hover:bg-[#E6F7EF] hover:shadow-md"
            >
              <div className="mb-4 rounded-full bg-[#00bf63]/10 p-3 text-[#00bf63]">
                {category.icon}
              </div>
              <h3 className=" font-sans mb-2 text-base font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="font-sans text-sm text-gray-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
