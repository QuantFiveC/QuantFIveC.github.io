import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500 border-opacity-30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-24 h-24 border border-navy-600 border-opacity-30 rounded-lg animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 rounded-full animate-bounce" style={{ animationDelay: '4s' }}></div>
      
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(30, 58, 138, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)
          `
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center bg-slate-800 border border-blue-500 border-opacity-30 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg text-white">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
              Healthcare Innovation Since 2020
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block">Reforming</span>
              <span className="bg-gradient-to-r from-blue-600 via-navy-700 to-purple-700 bg-clip-text text-transparent animate-pulse">
                Healthcare.
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-slate-600 leading-relaxed max-w-2xl">
              Revolutionary consulting solutions for hospitals, IVF clinics, and healthcare ventures. 
              <span className="text-blue-600 font-semibold"> Transforming healthcare delivery across India.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 hover:shadow-2xl group transform hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center justify-center">
                  Explore Innovation
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Demo
              </Button>
            </div>
            
            {/* Advanced Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="36" stroke="#cbd5e1" strokeWidth="4" fill="transparent"/>
                    <circle cx="40" cy="40" r="36" stroke="#2563eb" strokeWidth="4" fill="transparent" 
                      style={{ strokeDasharray: 283, strokeDashoffset: 283, animation: 'progress 2s ease-in-out forwards' }}/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-600">20+</div>
                </div>
                <div className="text-slate-500 font-medium">Projects Onboard</div>
              </div>
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="36" stroke="#cbd5e1" strokeWidth="4" fill="transparent"/>
                    <circle cx="40" cy="40" r="36" stroke="#1e40af" strokeWidth="4" fill="transparent"
                      style={{ strokeDasharray: 283, strokeDashoffset: 283, animation: 'progress 2s ease-in-out 0.2s forwards' }}/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-navy-600">16+</div>
                </div>
                <div className="text-slate-500 font-medium">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="36" stroke="#cbd5e1" strokeWidth="4" fill="transparent"/>
                    <circle cx="40" cy="40" r="36" stroke="#9333ea" strokeWidth="4" fill="transparent"
                      style={{ strokeDasharray: 283, strokeDashoffset: 283, animation: 'progress 2s ease-in-out 0.4s forwards' }}/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-purple-600">6</div>
                </div>
                <div className="text-slate-500 font-medium">Projects Delivered</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-navy-700 to-purple-700 bg-clip-text text-transparent">
                Core Capabilities
              </h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-5">
                    <span className="text-white text-2xl">🏥</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Hospital Excellence</div>
                    <div className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">End-to-end management solutions</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-navy-700 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-5">
                    <span className="text-white text-2xl">🧬</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 group-hover:text-navy-600 transition-colors duration-300">IVF Innovation</div>
                    <div className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Advanced fertility solutions</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-5">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 group-hover:text-purple-600 transition-colors duration-300">Growth Strategy</div>
                    <div className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Data-driven expansion</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-5">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Digital Transformation</div>
                    <div className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Technology-powered solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}