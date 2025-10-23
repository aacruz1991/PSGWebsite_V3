
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DCEAF7] via-white to-[#DCECE4]">
      <Header />

      {/* Hero Section with Professional Image */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Professional Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80"
                  alt="Professional business consultant presenting strategic concepts on whiteboard to engaged team in modern office setting"
                  className="w-full h-full object-cover"
                  width={2374}
                  height={1780}
                />
              </div>
            </div>

            {/* Right - Who We Are Content */}
            <div className="order-1 lg:order-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-[#DCEAF7]">
                <h2 className="text-3xl font-semibold text-[#0E2841] mb-8">Who We Are</h2>
                <div className="space-y-6 text-lg text-[#0E2841]/80 leading-relaxed">
                  <p>
                    Pointe Strategy Group consists of experienced businesspeople with deep operational expertise across front-office, mid-office, and back-office functions. We serve as strategic advisors, hands-on operators, and transformational leaders who understand what it takes to drive sustainable growth while preserving core organizational principles.
                  </p>
                  <p>
                    Our approach combines strategic thinking with practical execution. We don't just provide recommendations – we roll up our sleeves and work alongside your team to implement solutions that deliver measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-[#DCEAF7] mb-20">
            <h2 className="text-3xl font-semibold text-[#0E2841] text-center mb-8">Our Approach</h2>
            <p className="text-lg text-[#0E2841]/80 text-center mb-12 leading-relaxed">
              At Pointe Strategy Group, we bring three essential elements to every engagement:
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#4E95D9] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0E2841] mb-3">Bringing Capability</h3>
                  <p className="text-[#0E2841]/80 leading-relaxed">
                    Strategic advisory services backed by deep industry expertise and proven methodologies. We provide the specialized knowledge and experience your organization needs to navigate complex challenges and identify growth opportunities.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#4E95D9] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0E2841] mb-3">Providing Capacity</h3>
                  <p className="text-[#0E2841]/80 leading-relaxed">
                    Hands-on operational support across front-office, mid-office, and back-office functions. We don't just advise – we roll up our sleeves and provide the additional capacity your team needs to execute strategic initiatives effectively.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#4E95D9] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0E2841] mb-3">Strategy & Delivering</h3>
                  <p className="text-[#0E2841]/80 leading-relaxed">
                    Transformational leadership that ensures strategic vision becomes operational reality. We provide interim management, execution oversight, and change leadership while preserving your organization's core principles and values.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Three Columns Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/90 backdrop-blur-sm border-[#0E2841] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-[#0E2841] text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl font-bold text-center">Advisors</h3>
                </div>
                <div className="p-8">
                  <p className="text-[#0E2841] leading-relaxed text-center">
                    Our professionals advise enterprises from $5M in revenue to Fortune 5 and everything in between, across the full spectrum of business situations and life cycle stages
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-[#0E2841] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-[#0E2841] text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl font-bold text-center">Operators</h3>
                </div>
                <div className="p-8">
                  <p className="text-[#0E2841] leading-relaxed text-center">
                    Whether from advising clients or serving 'in the chair' our experiences demonstrate the value in being hands on – solving problems, not just opining on them
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-[#0E2841] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-[#0E2841] text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl font-bold text-center">Leaders</h3>
                </div>
                <div className="p-8">
                  <p className="text-[#0E2841] leading-relaxed text-center">
                    Developing individuals and teams resides in our core and feeds our mission to deliver sustainable results that match our ownership mindset to challenges
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-[#35654C] to-[#66AE88] rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white">
              Our mission is the success of your mission
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}