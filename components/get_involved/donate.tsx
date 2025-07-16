import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Donate() {
  return (
    <section id="donate" className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6 lg:w-full w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Make a Donation
            </h2>
            <p className="font-sans max-w-[700px] text-muted-foreground md:text-xl">
              Your generosity fuels our creative approach to environmental
              education. Every contribution helps us engage more Rwandans in
              sustainability.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Tabs defaultValue="one-time" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
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
            <h3 className="text-xl font-bold text-center">Donation Methods</h3>
            <div className="flex flex-col md:flex-row gap-4">
              {/* MTN Section */}
              <div className="rounded-lg border p-6 bg-white md:w-[50%]">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-lg">MTN</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-center">
                    <h4 className="font-bold text-lg mb-2">MTN Mobile Money</h4>
                  </div>
                  <div className="grid gap-3 md:grid-cols-1">
                    <div className="rounded-lg border p-4">
                      <h5 className="font-semibold text-sm mb-1">Donate To</h5>
                      <p className="text-sm text-muted-foreground">
                        MTN MoMo:*182*1*1*0788123456#
                      </p>
                      <p className="font-mono text-lg font-bold">0783446127</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Airtel Section */}
              <div className="rounded-lg border p-6 bg-white md:w-[50%]">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">airtel</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-center">
                    <h4 className="font-bold text-lg mb-2">Airtel Money</h4>
                  </div>
                  <div className="grid gap-3 md:grid-cols-1">
                    <div className="rounded-lg border p-4">
                      <h5 className="font-semibold text-sm mb-1">Donate To:</h5>
                      <p className="text-sm text-muted-foreground">
                        Airtel Money:*182*1*2*0730123456#
                      </p>
                      <p className="font-mono text-lg font-bold">0723770066</p>
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
                  Provides art supplies for an environmental workshop with 5
                  students
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
  );
}
