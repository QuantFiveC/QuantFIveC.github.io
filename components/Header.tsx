import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <Logo size="md" />
            <div>
              <div className="text-2xl font-bold text-white">Quant Five</div>
              <div className="text-xs text-blue-400 -mt-1">Healthcare Innovation</div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-slate-300 hover:text-blue-400 font-medium transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#career" className="text-slate-300 hover:text-blue-400 font-medium transition-colors relative group">
              Career
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-slate-300 hover:text-blue-400 font-medium transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#team" className="text-slate-300 hover:text-blue-400 font-medium transition-colors relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </nav>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-slate-300 hover:text-blue-400 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#career" className="block text-slate-300 hover:text-blue-400 font-medium" onClick={() => setMobileMenuOpen(false)}>Career</a>
              <a href="#services" className="block text-slate-300 hover:text-blue-400 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#team" className="block text-slate-300 hover:text-blue-400 font-medium" onClick={() => setMobileMenuOpen(false)}>Team</a>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-6 py-3 rounded-full font-semibold"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}