"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, TrendingUp, Users, Target, Mail, Building, Settings, BarChart } from "lucide-react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBioModal, setShowBioModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'team', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll be in touch soon.");
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Start a Conversation' }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-64 bg-[#0E2841] shadow-lg z-50">
        <div className="p-6">
          <img
            src="/Logo - Blue.png"
            alt="Pointe Strategy Group"
            className="h-12 w-auto mb-8"
          />
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#4E95D9] text-white'
                    : 'text-white hover:bg-[#4E95D9] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Home Section */}
        <section id="home" className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-[#0E2841] leading-tight mb-6">
                    Pointe Strategy<br />
                    Group
                  </h1>
                  <h2 className="text-2xl text-[#4E95D9] font-medium mb-8">
                    Growth Strategies Delivered
                  </h2>
                </div>
                
                <p className="text-lg text-[#0E2841]/70 leading-relaxed max-w-lg">
                  Who we are... businesspeople experienced in strategic planning, plan execution, and leading and developing teams to succeed. We serve as strategic advisors, hands-on operators, and transformational leaders who understand what it takes to drive sustainable growth while preserving core organizational principles.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-[#0E2841] hover:bg-[#0E2841]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"
                    onClick={() => scrollToSection('contact')}
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-[#0E2841] text-[#0E2841] bg-transparent hover:bg-[#0E2841]/5 px-8 py-6 text-lg"
                    onClick={() => scrollToSection('about')}
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Professional strategy consulting meeting with team presenting ideas on whiteboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Deliver Section */}
        <section className="py-20 bg-gradient-to-br from-[#DCEAF7] via-white to-[#DCECE4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0E2841]">
                How We Deliver
              </h2>
              <p className="text-lg text-[#0E2841]/70 max-w-3xl mx-auto">
                Three key pillars of strategic excellence and operational transformation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left - Professional Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80"
                    alt="Professional business consultant presenting strategic concepts on whiteboard to engaged team in modern office setting"
                    className="w-full h-full object-cover"
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
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Our Mission</h2>
              <h3 className="text-lg lg:text-xl font-light text-white italic mb-4">
                "Our Mission is Simple: The Success of Your Mission"
              </h3>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-br from-[#DCEAF7] via-white to-[#DCECE4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Service Capabilities Section */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 mb-20 shadow-lg">
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
            <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-lg">
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

        {/* Team Section */}
        <section id="team" className="py-20 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 mb-16">
              <h1 className="text-4xl lg:text-5xl font-light text-[#0E2841] leading-tight">
                Meet Our Team
              </h1>
              <p className="text-xl text-[#0E2841]/70 leading-relaxed max-w-3xl mx-auto">
                Experienced business professionals with deep operational expertise and a track record of driving sustainable growth across industries.
              </p>
            </div>

            {/* Team Member Profile */}
            <div className="max-w-md mx-auto text-center">
              <div 
                className="aspect-square rounded-2xl overflow-hidden shadow-lg mx-auto cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => setShowBioModal(true)}
              >
                <img 
                  src="/reed-bingaman-headshot.jpeg"
                  alt="Reed Bingaman - Partner at Pointe Strategy Group"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-[#0E2841] mb-2">Reed Bingaman</h2>
                <p className="text-lg text-[#4E95D9] font-medium">Partner</p>
              </div>
            </div>

            {/* Bio Modal */}
            <Dialog open={showBioModal} onOpenChange={setShowBioModal}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#0E2841]">Reed Bingaman - Partner</DialogTitle>
                </DialogHeader>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
                      <img 
                        src="/reed-bingaman-headshot.jpeg"
                        alt="Reed Bingaman"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4 text-[#0E2841]/80 leading-relaxed">
                    <p>
                      Reed brings extensive experience in strategic planning, operational excellence, and transformational leadership across multiple industries. His approach combines deep analytical capabilities with hands-on execution, helping organizations navigate complex business challenges while maintaining their core values.
                    </p>
                    <p>
                      With a track record of advising enterprises from emerging growth companies to Fortune 500 organizations, Reed specializes in developing and implementing growth strategies that deliver sustainable results. His expertise spans front-office, mid-office, and back-office operations, making him uniquely positioned to drive comprehensive organizational transformation.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-[#DCEAF7] via-white to-[#DCECE4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 mb-16">
              <h1 className="text-4xl lg:text-5xl font-light text-[#0E2841] leading-tight">
                Let's Discuss Your Growth Strategy
              </h1>
              <p className="text-xl text-[#0E2841]/70 leading-relaxed max-w-3xl mx-auto">
                Ready to transform your business potential into measurable results?
              </p>
            </div>

            <div className="space-y-12">
              {/* Contact Form - Centered at Top */}
              <div className="max-w-2xl mx-auto">
                <Card className="bg-white/90 backdrop-blur-sm border-[#DCEAF7] shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold text-[#0E2841] mb-6 text-center">Let's Talk</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-[#0E2841] mb-2">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="border-[#DCEAF7] focus:ring-[#4E95D9]"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-[#0E2841] mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="border-[#DCEAF7] focus:ring-[#4E95D9]"
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#0E2841] mb-2">
                          Company
                        </label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="border-[#DCEAF7] focus:ring-[#4E95D9]"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#0E2841] mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="border-[#DCEAF7] focus:ring-[#4E95D9]"
                          placeholder="Tell us about your business challenges and how we can help..."
                        />
                      </div>

                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full bg-[#0E2841] hover:bg-[#0E2841]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information - Below Form with Orange Styling */}
              <div className="max-w-xl mx-auto">
                <Card className="bg-[#E97132]/10 backdrop-blur-sm border-[#E97132]/20 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold text-[#0E2841] mb-6 text-center">Contact Information</h2>
                    <div className="flex justify-center">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#E97132] rounded-full flex items-center justify-center">
                            <Mail className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#0E2841] mb-1">Email</h3>
                          <a 
                            href="mailto:hello@pointestrategy.com" 
                            className="text-[#E97132] hover:text-[#E97132]/80 transition-colors font-medium"
                          >
                            hello@pointestrategy.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0E2841] via-[#35654C] to-[#0E2841] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4E95D9]/20 to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Partner with experienced operators who understand what it takes to drive sustainable growth while preserving your core organizational principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#E97132] hover:bg-[#E97132]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => scrollToSection('contact')}
              >
                Start the Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-transparent hover:bg-white/10 backdrop-blur-sm"
                onClick={() => scrollToSection('about')}
              >
                Learn More About Us
              </Button>
            </div>
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
                  <p>hello@pointestrategy.com</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2 text-white/70">
                  <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                  <li><button onClick={() => scrollToSection('team')} className="hover:text-white transition-colors">Our Team</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Get Started</button></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 mt-8 text-center text-white/60">
              <p>&copy; 2024 Pointe Strategy Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}