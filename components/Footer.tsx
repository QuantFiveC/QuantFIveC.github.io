import { Stethoscope, Heart, Linkedin, Twitter, Mail, Facebook, Instagram, Youtube, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <Logo size="md" />
              <div>
                <div className="text-3xl font-bold text-white">Quant Five</div>
                <div className="text-sm text-gray-400">Healthcare Innovation Leaders</div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md text-lg">
              Transforming healthcare delivery through innovative consulting solutions. Building the future of medical excellence across India.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-lg">17, Cambridge Lane, Bengaluru 560008</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-lg">8123041520</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-lg">partner@quantfive.in</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-14 h-14 bg-slate-800/50 backdrop-blur-xl rounded-xl flex items-center justify-center hover:bg-blue-500/20 hover:scale-110 transition-all border border-slate-700/50">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-14 h-14 bg-slate-800/50 backdrop-blur-xl rounded-xl flex items-center justify-center hover:bg-blue-500/20 hover:scale-110 transition-all border border-slate-700/50">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-14 h-14 bg-slate-800/50 backdrop-blur-xl rounded-xl flex items-center justify-center hover:bg-blue-500/20 hover:scale-110 transition-all border border-slate-700/50">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-14 h-14 bg-slate-800/50 backdrop-blur-xl rounded-xl flex items-center justify-center hover:bg-blue-500/20 hover:scale-110 transition-all border border-slate-700/50">
                <Youtube className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-navy-500 to-purple-500 bg-clip-text text-transparent">
              Our Solutions
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors text-lg">Hospital Management</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors text-lg">IVF Excellence</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors text-lg">Operations & Admin</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors text-lg">Growth Strategy</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors text-lg">Digital Transformation</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-navy-500 to-purple-500 bg-clip-text text-transparent">
              Quick Access
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#career" className="hover:text-blue-400 transition-colors text-lg">Career</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors text-lg">Our Services</a></li>
              <li><a href="#team" className="hover:text-blue-400 transition-colors text-lg">Leadership</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors text-lg">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors text-lg">Case Studies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p className="text-lg">&copy; 2025 Quant Five Consultancies. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}