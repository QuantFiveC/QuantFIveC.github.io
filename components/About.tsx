import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Coffee, Lightbulb, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-500 bg-opacity-20 border border-blue-500 border-opacity-30 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            About Quant Five
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            Redefining Healthcare<br />
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We are the bridge between healthcare vision and reality, transforming ambitious ideas into thriving, profitable healthcare enterprises.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-400 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">Strategic Vision</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We don't just execute plans – we craft comprehensive strategies that position your healthcare venture for long-term success and market leadership.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-400 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">Rapid Implementation</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Our proven methodologies and extensive network enable faster project delivery without compromising on quality or compliance standards.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-400 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🔬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">Innovation Focus</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We integrate cutting-edge technologies and best practices to ensure your healthcare facility operates at the forefront of medical excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-900/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-slate-700/50">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
                Our Impact
              </h3>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Healthcare Ventures Launched</div>
                    <div className="text-3xl font-bold text-blue-400">50+</div>
                  </div>
                  <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Cities Across India</div>
                    <div className="text-3xl font-bold text-green-400">15+</div>
                  </div>
                  <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Client Satisfaction</div>
                    <div className="text-3xl font-bold text-purple-400">98%</div>
                  </div>
                  <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Average ROI Improvement</div>
                    <div className="text-3xl font-bold text-orange-400">240%</div>
                  </div>
                  <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-5/6 h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
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