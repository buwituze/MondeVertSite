import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Partner() {
  return (
    <section id="partner" className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6 lg:w-full w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Partner With Us
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Strategic partnerships amplify our creative approach to
              environmental education. Let's collaborate to inspire sustainable
              action in Rwanda.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-13 py-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Partnership Opportunities</h3>
            <div className="space-y-4">
              <div className="rounded-lg border bg-white p-4">
                <h4 className="font-bold">Workshop & Event Sponsorships</h4>
                <p className="text-sm text-muted-foreground">
                  Sponsor our interactive workshops, storytelling events, or
                  environmental safaris to reach engaged audiences.
                </p>
              </div>
              <div className="rounded-lg bg-white border p-4">
                <h4 className="font-bold">Art & Technology Collaborations</h4>
                <p className="text-sm text-muted-foreground">
                  Provide technology, art supplies, or expertise to support our
                  innovative environmental education initiatives.
                </p>
              </div>
              <div className="rounded-lg bg-white border p-4">
                <h4 className="font-bold">Corporate Environmental Training</h4>
                <p className="text-sm text-muted-foreground">
                  Partner with us to deliver creative environmental workshops
                  and team-building experiences for your organization.
                </p>
              </div>
              <div className="rounded-lg bg-white border p-4">
                <h4 className="font-bold">Community Mural Projects</h4>
                <p className="text-sm text-muted-foreground">
                  Sponsor public environmental art that engages communities and
                  promotes your organization's commitment to sustainability.
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
                Submit Interest
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
