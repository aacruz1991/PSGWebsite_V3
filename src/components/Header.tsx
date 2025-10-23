import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/Logo - Blue.png"
                alt="Pointe Strategy Group"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#0E2841] hover:text-[#4E95D9] transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-[#0E2841] hover:text-[#4E95D9] transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-[#0E2841] hover:text-[#4E95D9] transition-colors font-medium">
              Services
            </Link>
            <Link href="/team" className="text-[#0E2841] hover:text-[#4E95D9] transition-colors font-medium">
              Team
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/get-started">
              <Button className="bg-[#0E2841] hover:bg-[#0E2841]/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#0E2841] hover:text-[#4E95D9] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-[#0E2841] hover:text-[#4E95D9] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-[#0E2841] hover:text-[#4E95D9] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-[#0E2841] hover:text-[#4E95D9] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/team" 
                className="text-[#0E2841] hover:text-[#4E95D9] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-[#0E2841] hover:bg-[#0E2841]/90 text-white w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}