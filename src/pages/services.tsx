import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, TrendingUp, Building, Settings, BarChart } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* How We Deliver Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0E2841]">
              How We Deliver
            </h2>
            <p className="text-lg text-[#0E2841]/70 max-w-3xl mx-auto">
              Three key pillars of strategic excellence and operational transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-[#4E95D9]/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-[#4E95D9]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0E2841]">Strategic Advisors</h3>
                <h4 className="text-lg font-medium text-[#4E95D9]">Bringing Capability</h4>
                <p className="text-[#0E2841]/70 leading-relaxed">
                  Experienced business professionals providing strategic guidance, industry expertise, and proven methodologies to drive sustainable competitive advantage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-[#4E95D9]/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-[#4E95D9]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0E2841]">Hands-on Operators</h3>
                <h4 className="text-lg font-medium text-[#4E95D9]">Providing Capacity</h4>
                <p className="text-[#0E2841]/70 leading-relaxed">
                  Operational depth across front-office, mid-office, and back-office functions to execute strategic initiatives and drive measurable outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-[#4E95D9]/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-[#4E95D9]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0E2841]">Transformational Leaders</h3>
                <h4 className="text-lg font-medium text-[#4E95D9]">Strategy & Delivering</h4>
                <p className="text-[#0E2841]/70 leading-relaxed">
                  Leadership expertise in planning, execution, and interim management while preserving your core organizational principles and values.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Service Capabilities Section */}
          <div className="bg-gradient-to-br from-[#DCEAF7] via-white to-[#DCECE4] rounded-3xl p-8 lg:p-12 mb-20">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0E2841]">
                Service Capabilities
              </h2>
              <p className="text-lg text-[#0E2841]/70 max-w-3xl mx-auto">
                Comprehensive business solutions across all operational areas
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Building className="h-8 w-8 text-[#4E95D9]" />
                    <h3 className="text-2xl font-semibold text-[#0E2841]">Front-Office</h3>
                  </div>
                  <ul className="space-y-3 text-[#0E2841]/70">
                    <li>• Strategic Planning & Advisory</li>
                    <li>• Business Development</li>
                    <li>• Market Analysis & Research</li>
                    <li>• Client Relationship Management</li>
                    <li>• Revenue Strategy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="h-8 w-8 text-[#4E95D9]" />
                    <h3 className="text-2xl font-semibold text-[#0E2841]">Mid-Office</h3>
                  </div>
                  <ul className="space-y-3 text-[#0E2841]/70">
                    <li>• Project Management</li>
                    <li>• Process Optimization</li>
                    <li>• Risk Management</li>
                    <li>• Compliance & Governance</li>
                    <li>• Quality Assurance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart className="h-8 w-8 text-[#4E95D9]" />
                    <h3 className="text-2xl font-semibold text-[#0E2841]">Back-Office</h3>
                  </div>
                  <ul className="space-y-3 text-[#0E2841]/70">
                    <li>• Financial Planning & Analysis</li>
                    <li>• Operations Management</li>
                    <li>• Technology Integration</li>
                    <li>• Human Resources</li>
                    <li>• Administrative Services</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Industry Expertise Section */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-lg mb-20">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0E2841]">
                Industry Expertise
              </h2>
              <p className="text-lg text-[#0E2841]/70 max-w-3xl mx-auto">
                Deep sector knowledge across diverse industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0E2841]">Financial Services</h3>
                <p className="text-[#0E2841]/70 text-sm">
                  Banking, Insurance, Investment Management
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0E2841]">Technology</h3>
                <p className="text-[#0E2841]/70 text-sm">
                  Software, Hardware, Digital Transformation
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0E2841]">Healthcare</h3>
                <p className="text-[#0E2841]/70 text-sm">
                  Medical Devices, Pharmaceuticals, Services
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0E2841]">Manufacturing</h3>
                <p className="text-[#0E2841]/70 text-sm">
                  Industrial, Consumer Products, Supply Chain
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0E2841]">Real Estate</h3>
                <p className="text-[#0E2841]/70 text-sm">
                  Commercial, Residential, Development
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0E2841]">Energy</h3>
                <p className="text-[#0E2841]/70 text-sm">
                  Traditional, Renewable, Infrastructure
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0E2841]">Retail</h3>
                <p className="text-[#0E2841]/70 text-sm">
                  E-commerce, Consumer Goods, Distribution
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0E2841]">Professional Services</h3>
                <p className="text-[#0E2841]/70 text-sm">
                  Consulting, Legal, Accounting, Advisory
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#35654C] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
            Ready to Drive Growth?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Let's discuss how we can bring capability, provide capacity, and deliver results for your organization.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-white text-[#35654C] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Start the Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E2841] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="border-2 border-white px-3 py-2 bg-transparent inline-block mb-4">
                <h3 className="text-white font-bold text-sm tracking-tight leading-tight">
                  POINTE<br />
                  STRATEGY<br />
                  GROUP
                </h3>
                <p className="text-white text-xs font-light mt-1">Growth Strategies Delivered</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/70">
                <p>Reed Bingaman</p>
                <p>reed@pointestrategy.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 mt-8 text-center text-white/60">
            <p>&copy; 2024 Pointe Strategy Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}