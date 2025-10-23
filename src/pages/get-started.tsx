import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import Header from "@/components/Header";

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DCEAF7] via-white to-[#DCECE4]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-[#0E2841] leading-tight">
              Ready to transform your business potential into measurable results?
            </h1>
            <p className="text-xl text-[#0E2841]/70 leading-relaxed max-w-3xl mx-auto">
              Let's discuss your value creation strategy.
            </p>
          </div>

          <div className="space-y-12">
            {/* Contact Form - Centered at Top */}
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/90 backdrop-blur-sm border-[#DCEAF7] shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-[#0E2841] mb-6 text-center">Send Us a Message</h2>
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
    </div>
  );
}