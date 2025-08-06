import { Button } from "./ui/button";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success message
    alert(`Thank you, ${formData.name}! Your project inquiry has been received. Our team will contact you within 24 hours at ${formData.email}.`);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 relative overflow-hidden">
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
          <div className="inline-block bg-white bg-opacity-10 border border-white border-opacity-20 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            Ready to Transform<br />
            <span className="bg-gradient-to-r from-blue-600 via-navy-700 to-purple-700 bg-clip-text text-transparent">
              Your Vision?
            </span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-12 text-slate-800">Let's Connect</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl border border-white/20">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-800">Headquarters</h4>
                  <p className="text-slate-600 text-lg">17, Cambridge Lane, Bengaluru 560008</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl border border-white/20">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-800">Direct Line</h4>
                  <p className="text-slate-600 text-lg">8123041520</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl border border-white/20">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-800">Email</h4>
                  <p className="text-slate-600 text-lg">partner@quantfive.in</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl border border-white/20">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-800">Availability</h4>
                  <p className="text-slate-600 text-lg">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-navy-700 to-purple-700 bg-clip-text text-transparent">
                Start Your Journey
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-slate-800 font-semibold mb-3">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                    placeholder="Your Full Name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-800 font-semibold mb-3">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                    placeholder="Your Phone Number" 
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-slate-800 font-semibold mb-3">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  placeholder="Your Email Address" 
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-slate-800 font-semibold mb-3">Project Type</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Your Project Type</option>
                  <option value="hospital">Hospital Management</option>
                  <option value="ivf">IVF Clinic Excellence</option>
                  <option value="operations">Operations & Admin</option>
                  <option value="growth">Growth Strategy</option>
                  <option value="digital">Digital Transformation</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label className="block text-slate-800 font-semibold mb-3">Project Details *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" 
                  placeholder="Tell us about your vision and requirements..." 
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all hover:shadow-2xl"
              >
                Launch Your Project
                <span className="ml-3">🚀</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}