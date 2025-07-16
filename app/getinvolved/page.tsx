import Link from "next/link";
import Image from "next/image";
import { Heart, Users, Handshake, ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Volunteer from "@/components/get_involved/volunteer";
import Donate from "@/components/get_involved/donate";
import Partner from "@/components/get_involved/partner";

export default function GetInvolved() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-2 items-center mt-5">
              <div className="mt-10 space-y-4 ml-1 md:ml-10">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Us in Creating a Sustainable Future
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Your support powers our mission to unite art, culture, and
                  technology for environmental stewardship in Rwanda and beyond.
                  Together, we can inspire the next generation of changemakers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#e3c31e] hover:bg-green-700"
                  >
                    <Link href="#donate"> Donate Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#volunteer">Volunteer</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/images/mondevert sub-hero.jpg"
                alt="Community members engaged in environmental art projects"
                width={500}
                height={600}
                className="h-80 mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <div>
          <section id="ways-to-help" className="py-12 md:py-24 w-[90%] mx-auto">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ways to Get Involved
                  </h2>
                  <p className="font-sans max-w-[700px] text-muted-foreground md:text-xl">
                    Everyone has a role to play in environmental stewardship.
                    Find the way that aligns with your passion and skills.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
                <Card className="text-center">
                  <CardHeader>
                    <div className="flex justify-center">
                      <Heart className="h-12 w-12 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Donate</CardTitle>
                    <CardDescription>
                      Support our creative initiatives
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-muted-foreground">
                      Your financial contributions help fund our workshops,
                      immersive experiences, and other programs across Rwanda.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button asChild variant="outline">
                      <Link href="#donate">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="flex justify-center">
                      <Users className="h-12 w-12 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Volunteer</CardTitle>
                    <CardDescription>
                      Share your creativity and skills
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-muted-foreground">
                      Join our team of dedicated artists, storytellers, and
                      environmentalists who contribute their talents to our
                      mission.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button asChild variant="outline">
                      <Link href="#volunteer">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="flex justify-center">
                      <Handshake className="h-12 w-12 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Partner</CardTitle>
                    <CardDescription>Collaborate with us</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-muted-foreground">
                      Partner with MondeVert to boost our shared impact on
                      environmental education and sustainable practices.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button asChild variant="outline">
                      <Link href="#partner">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          <div>
            <Donate />
            <Volunteer />
            <Partner />
          </div>

          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 lg:w-full w-[90%] mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Our Impact
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Together with our supporters, volunteers, and partners,
                    we're creating a more sustainable Rwanda through creative
                    environmental education.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                  <h3 className="text-4xl font-bold">3,000+</h3>
                  <p className="text-sm text-muted-foreground">
                    Rwandans engaged through our programs
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                  <h3 className="text-4xl font-bold">50+</h3>
                  <p className="text-sm text-muted-foreground">
                    Environmental artists and storytellers
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                  <h3 className="text-4xl font-bold">15+</h3>
                  <p className="text-sm text-muted-foreground">
                    Community murals and art installations
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6 lg:w-full w-[90%] mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Ready to Create Environmental Change Through Art?
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Join our community of creative environmentalists today.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Link href="#donate">Donate Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#volunteer">Volunteer</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#partner">Partner With Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
