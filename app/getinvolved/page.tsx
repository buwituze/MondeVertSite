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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
                src="/images/Beyond-the-frame-event.jpg"
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
          <section id="donate" className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6 lg:w-full w-[90%] mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Make a Donation
                  </h2>
                  <p className="font-sans max-w-[700px] text-muted-foreground md:text-xl">
                    Your generosity fuels our creative approach to environmental
                    education. Every contribution helps us engage more Rwandans
                    in sustainability.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl py-12">
                <Tabs defaultValue="one-time" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="one-time">
                      One-time Donation
                    </TabsTrigger>
                    <TabsTrigger value="monthly">Monthly Giving</TabsTrigger>
                  </TabsList>
                  <TabsContent value="one-time" className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                      <Button variant="outline" className="font-sans h-20">
                        $25
                      </Button>
                      <Button variant="outline" className="font-sans h-20">
                        $50
                      </Button>
                      <Button variant="outline" className="font-sans h-20">
                        $100
                      </Button>
                      <Button variant="outline" className="font-sans h-20">
                        $250+
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="monthly" className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                      <Button variant="outline" className="h-20">
                        $10/mo
                      </Button>
                      <Button variant="outline" className="h-20">
                        $25/mo
                      </Button>
                      <Button variant="outline" className="h-20">
                        $50/mo
                      </Button>
                      <Button variant="outline" className="h-20">
                        $100/mo
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
                {/* Mobile Money Payment Methods - Outside tabs since they're fixed */}
                <div className="space-y-6 mt-8">
                  <h3 className="text-xl font-bold text-center">
                    Donation Methods
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* MTN Section */}
                    <div className="rounded-lg border p-6 bg-white md:w-[50%]">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center">
                          <span className="text-black font-bold text-lg">
                            MTN
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-center">
                          <h4 className="font-bold text-lg mb-2">
                            MTN Mobile Money
                          </h4>
                        </div>
                        <div className="grid gap-3 md:grid-cols-1">
                          <div className="rounded-lg border p-4">
                            <h5 className="font-semibold text-sm mb-1">
                              Donate To
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              MTN MoMo:*182*1*1*0788123456#
                            </p>
                            <p className="font-mono text-lg font-bold">
                              0783446127
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Airtel Section */}
                    <div className="rounded-lg border p-6 bg-white md:w-[50%]">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            airtel
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-center">
                          <h4 className="font-bold text-lg mb-2">
                            Airtel Money
                          </h4>
                        </div>
                        <div className="grid gap-3 md:grid-cols-1">
                          <div className="rounded-lg border p-4">
                            <h5 className="font-semibold text-sm mb-1">
                              Donate To:
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              Airtel Money:*182*1*2*0730123456#
                            </p>
                            <p className="font-mono text-lg font-bold">
                              0723770066
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold">Your Impact</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4 bg-white">
                      <h4 className="font-bold">$25</h4>
                      <p className="font-sans text-sm text-muted-foreground">
                        Provides art supplies for an environmental workshop with
                        5 students
                      </p>
                    </div>
                    <div className="rounded-lg border p-4 bg-white">
                      <h4 className="font-bold">$50</h4>
                      <p className="font-sans text-sm text-muted-foreground">
                        Funds a storytelling workshop for 10 community members
                      </p>
                    </div>
                    <div className="rounded-lg border p-4 bg-white">
                      <h4 className="font-bold">$100+</h4>
                      <p className="font-sans text-sm text-muted-foreground">
                        Supports the creation of a public environmental mural
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="volunteer" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 lg:w-full w-[90%] mx-auto">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="ml-20">
                  <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">
                    Volunteer With Us
                  </h2>
                  <p className="mb-4  font-sans text-muted-foreground">
                    Our volunteers are the creative force behind MondeVert. Join
                    our team and contribute your unique artistic skills and
                    environmental passion to our cause.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Current Opportunities</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">
                            Workshop Facilitator
                          </span>
                          <p className="font-sans text-sm text-muted-foreground">
                            Help lead our creative workshops on storytelling,
                            painting, or photography with an environmental
                            focus.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">
                            Environmental Artist
                          </span>
                          <p className="font-sans text-sm text-muted-foreground">
                            Create murals, paintings, or other visual art that
                            communicates environmental messages.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">
                            Digital Content Creator
                          </span>
                          <p className="font-sans text-sm text-muted-foreground">
                            Help develop AR/VR experiences or other digital
                            content that educates about environmental issues.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">
                            Environmental Safari Guide
                          </span>
                          <p className="font-sans text-sm text-muted-foreground">
                            Lead immersive experiences in Rwanda's natural
                            environments, combining education with visual
                            storytelling.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Volunteer Application</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="first-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            First Name
                          </label>
                          <Input
                            id="first-name"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="last-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Last Name
                          </label>
                          <Input
                            id="last-name"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          placeholder="Enter your email"
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Phone
                        </label>
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          type="tel"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="skills"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Artistic Skills & Environmental Interests
                        </label>
                        <Textarea
                          id="skills"
                          placeholder="Tell us about your artistic skills and environmental interests"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#e3c31e] hover:bg-green-700"
                      >
                        Submit Application
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="partner" className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6 lg:w-full w-[90%] mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Partner With Us
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Strategic partnerships amplify our creative approach to
                    environmental education. Let's collaborate to inspire
                    sustainable action in Rwanda.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-13 py-12 lg:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">
                    Partnership Opportunities
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-white p-4">
                      <h4 className="font-bold">
                        Workshop & Event Sponsorships
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Sponsor our interactive workshops, storytelling events,
                        or environmental safaris to reach engaged audiences.
                      </p>
                    </div>
                    <div className="rounded-lg bg-white border p-4">
                      <h4 className="font-bold">
                        Art & Technology Collaborations
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Provide technology, art supplies, or expertise to
                        support our innovative environmental education
                        initiatives.
                      </p>
                    </div>
                    <div className="rounded-lg bg-white border p-4">
                      <h4 className="font-bold">
                        Corporate Environmental Training
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Partner with us to deliver creative environmental
                        workshops and team-building experiences for your
                        organization.
                      </p>
                    </div>
                    <div className="rounded-lg bg-white border p-4">
                      <h4 className="font-bold">Community Mural Projects</h4>
                      <p className="text-sm text-muted-foreground">
                        Sponsor public environmental art that engages
                        communities and promotes your organization's commitment
                        to sustainability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Partner Inquiry Form</h3>
                  <form className="space-y-4 bg-white p-10 rounded-lg">
                    <div className="space-y-2">
                      <label
                        htmlFor="org-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Organization Name
                      </label>
                      <Input
                        id="org-name"
                        placeholder="Enter your organization name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Contact Person
                      </label>
                      <Input
                        id="contact-name"
                        placeholder="Enter contact person's name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="contact-email"
                        placeholder="Enter contact email"
                        type="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="partnership-type"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Partnership Interest
                      </label>
                      <Textarea
                        id="partnership-type"
                        placeholder="Describe how you'd like to partner with MondeVert"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Submit Inquiry
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
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
