import { Button } from "./ui/button";

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-500 bg-opacity-20 border border-blue-500 border-opacity-30 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            Comprehensive Healthcare<br />
            <span className="bg-gradient-to-r from-blue-600 via-navy-700 to-purple-700 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 - Hospital Management */}
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl group">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-5">
              <span className="text-white text-3xl">🏥</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Hospital Management</h3>
            <ul className="text-slate-600 space-y-4 mb-8">
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-blue-400 mr-3 mt-1">▶</span>
                Strategic Planning & Feasibility Analysis
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-blue-400 mr-3 mt-1">▶</span>
                Infrastructure Design & Setup
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-blue-400 mr-3 mt-1">▶</span>
                Operational Excellence Programs
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-blue-400 mr-3 mt-1">▶</span>
                Financial Optimization Models
              </li>
            </ul>
            <Button 
              variant="outline" 
              className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-4 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105"
            >
              Explore Details
            </Button>
          </div>

          {/* Service 2 - IVF Clinic Excellence */}
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl group">
            <div className="w-20 h-20 bg-gradient-to-r from-navy-600 to-navy-700 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-5">
              <span className="text-white text-3xl">🧬</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-slate-800 group-hover:text-navy-600 transition-colors duration-300">IVF Clinic Excellence</h3>
            <ul className="text-slate-600 space-y-4 mb-8">
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-navy-400 mr-3 mt-1">▶</span>
                Advanced Lab & OT Configuration
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-navy-400 mr-3 mt-1">▶</span>
                Embryology Support Systems
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-navy-400 mr-3 mt-1">▶</span>
                Success Rate Optimization
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-navy-400 mr-3 mt-1">▶</span>
                Regulatory Compliance Management
              </li>
            </ul>
            <Button 
              variant="outline" 
              className="w-full border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white py-4 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105"
            >
              Explore Details
            </Button>
          </div>

          {/* Service 3 - Operations & Admin */}
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl group">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-5">
              <span className="text-white text-3xl">⚙️</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-slate-800 group-hover:text-purple-600 transition-colors duration-300">Operations & Admin</h3>
            <ul className="text-slate-600 space-y-4 mb-8">
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-purple-400 mr-3 mt-1">▶</span>
                Licensing & Regulatory Support
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-purple-400 mr-3 mt-1">▶</span>
                Process Automation Systems
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-purple-400 mr-3 mt-1">▶</span>
                Quality Management Programs
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-purple-400 mr-3 mt-1">▶</span>
                Resource Optimization
              </li>
            </ul>
            <Button 
              variant="outline" 
              className="w-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-4 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105"
            >
              Explore Details
            </Button>
          </div>

          {/* Service 4 - Growth Strategy */}
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl group">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-navy-800 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-5">
              <span className="text-white text-3xl">📈</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Growth Strategy</h3>
            <ul className="text-slate-600 space-y-4 mb-8">
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-blue-400 mr-3 mt-1">▶</span>
                Market Expansion Planning
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-blue-400 mr-3 mt-1">▶</span>
                Referral Network Development
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-blue-400 mr-3 mt-1">▶</span>
                Revenue Optimization Models
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-blue-400 mr-3 mt-1">▶</span>
                Partnership Strategy
              </li>
            </ul>
            <Button 
              variant="outline" 
              className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-4 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105"
            >
              Explore Details
            </Button>
          </div>

          {/* Service 5 - Digital Transformation */}
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl group md:col-span-2 lg:col-span-1">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-700 to-purple-800 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-5">
              <span className="text-white text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-slate-800 group-hover:text-purple-600 transition-colors duration-300">Digital Transformation</h3>
            <ul className="text-slate-600 space-y-4 mb-8">
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-purple-400 mr-3 mt-1">▶</span>
                Advanced Analytics Implementation
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-purple-400 mr-3 mt-1">▶</span>
                Digital Marketing Ecosystems
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-purple-400 mr-3 mt-1">▶</span>
                Patient Experience Platforms
              </li>
              <li className="flex items-start transition-colors duration-300 group-hover:text-slate-700">
                <span className="text-purple-400 mr-3 mt-1">▶</span>
                Technology Integration
              </li>
            </ul>
            <Button 
              variant="outline" 
              className="w-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-4 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105"
            >
              Explore Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}