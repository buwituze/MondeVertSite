// Hero.jsx component
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full grid grid-cols-1 min-h-[100vh] md:grid-cols-2">
      <div className="bg-white pl-26">
        <div className="flex flex-col justify-center h-screen space-y-12">
          <div>
            <h1 className="font-sans text-xl font-semibold pt-33">
              Where Art Meets Sustainability
            </h1>
            <h1 className="font-heading text-5xl md:text-54xl font-semibold pt-4 pb-6">
              Art, Technology, Culture for a <br />
              <span style={{ color: "#e3c31e" }}> Sustainable Future</span>{" "}
            </h1>
            <p className=" font-sans text-lg">
              MondeVert transforms environmental education through creativity.
              Using art, culture, and technology, we inspire communities to
              embrace sustainability.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              className="font-sans text-white"
              style={{
                background: "#00bf63",
                height: "48px",
                borderRadius: "10px",
              }}
            >
              Join the Community!
            </Button>
            <Button
              className="font-sans text-[#00bf63]"
              style={{
                background: "transparent",
                border: "2px solid #00bf63",
                height: "48px",
                borderRadius: "10px",
              }}
            >
              Join Our Events
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center align-middle gap-3 pt-25">
        <div className="bg-gray-200 rounded-lg w-[250px] self-center h-[340px]"></div>
        <div className="flex flex-col gap-3">
          <div className="bg-gray-200 rounded-lg w-[220px] h-[280px]"></div>
          <div className="bg-gray-200 rounded-lg w-[220px] h-[280px]"></div>
        </div>
      </div>
    </div>
  );
}
