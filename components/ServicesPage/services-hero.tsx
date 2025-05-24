import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ServicesHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-2 items-center mt-5">
          <div className="mt-10 space-y-4 ml-1 md:ml-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Creative Solutions for Environmental Stewardship
            </h1>
            <p className="text-muted-foreground md:text-xl">
              MondeVert unites art, culture, and technology to foster
              environmental awareness and inspire sustainable solutions in
              Rwanda and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#e3c31e] hover:bg-green-700"
              >
                <Link href="#services-categories"> Explore Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#contactus">Contact Us</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/images/Beyond-the-frame-event.jpg"
            alt="Community members engaged in environmental art projects"
            width={500}
            height={600}
            className="h-80 mx-auto aspect-video overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
