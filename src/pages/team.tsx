import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DCEAF7] via-white to-[#DCECE4]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-[#0E2841] leading-tight">
              Meet Our Team
            </h1>
            <p className="text-xl text-[#0E2841]/70 leading-relaxed max-w-3xl mx-auto">
              Experienced business professionals with deep operational expertise and a track record of driving sustainable growth across industries.
            </p>
          </div>

          {/* Team Member Profile - Hidden */}
          <div className="max-w-4xl mx-auto hidden">
            <Card className="bg-white/90 backdrop-blur-sm border-[#DCEAF7] shadow-xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Profile Image */}
                  <div className="md:col-span-1">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mx-auto max-w-xs">
                      <Image
                        src="/reed-bingaman-headshot.jpeg"
                        alt="Reed Bingaman - Founder of Pointe Strategy Group"
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-[#0E2841] mb-2">Reed Bingaman</h2>
                      <p className="text-xl text-[#4E95D9] font-medium">Founder & Principal</p>
                    </div>

                    <div className="prose prose-lg text-[#0E2841]/80 max-w-none">
                      <p>
                        Reed brings extensive experience in strategic planning, operational excellence, and transformational leadership across multiple industries. His approach combines deep analytical capabilities with hands-on execution, helping organizations navigate complex business challenges while maintaining their core values.
                      </p>
                      <p>
                        With a track record of advising enterprises from emerging growth companies to Fortune 500 organizations, Reed specializes in developing and implementing growth strategies that deliver sustainable results. His expertise spans front-office, mid-office, and back-office operations, making him uniquely positioned to drive comprehensive organizational transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Expanding Our Capabilities Section */}
          <div className="mt-20">
            <Card className="bg-white border border-gray-200 rounded-3xl shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl font-bold text-[#0E2841]">
                    Expanding Our Capabilities
                  </h2>
                  <p className="text-lg text-[#0E2841]/70 max-w-4xl mx-auto leading-relaxed">
                    As Pointe Strategy Group continues to grow, we are building a network of experienced businesspeople who share our commitment to bringing capability, providing capacity, and delivering growth strategies. Our collaborative approach ensures that we can scale our expertise to meet the diverse needs of our clients across multiple industries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-[#0E2841] to-[#35654C] rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl font-light text-white mb-6">
                Ready to Partner with Experienced Leaders?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how our expertise can help drive sustainable growth for your organization.
              </p>
              <Link href="/get-started">
                <Button 
                  size="lg" 
                  className="bg-[#E97132] hover:bg-[#E97132]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}