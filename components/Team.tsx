import { useState } from "react";

export function Team() {
  const teamMembers = [
    {
      name: "S. Shaghaf Imam",
      role: "Founder & Principal",
      initials: "SI",
      gradient: "from-blue-500 to-purple-600",
      color: "blue",
      expertise: [
        "Hospital Scaling Strategy",
        "IVF Operations Excellence", 
        "Business Development",
        "Market Expansion"
      ],
      quote: "Innovation drives execution, execution drives results.",
      tags: ["Strategy", "Leadership"]
    },
    {
      name: "Mukund Pandey",
      role: "Head - Finance & Admin",
      initials: "MP",
      gradient: "from-green-500 to-teal-600",
      color: "green",
      expertise: [
        "Financial Planning",
        "Regulatory Compliance",
        "Risk Management",
        "Process Optimization"
      ],
      quote: "Solid foundations enable limitless growth.",
      tags: ["Finance", "Compliance"]
    },
    {
      name: "Vikash Kumar",
      role: "Head - Operations",
      initials: "VK",
      gradient: "from-orange-500 to-red-600",
      color: "orange",
      expertise: [
        "Center Launch Management",
        "Workflow Optimization",
        "Team Development",
        "Quality Assurance"
      ],
      quote: "Excellence in execution defines success.",
      tags: ["Operations", "Execution"]
    },
    {
      name: "Syed Lavi Reza",
      role: "Head - Marketing",
      initials: "SLR",
      gradient: "from-purple-500 to-pink-600",
      color: "purple",
      expertise: [
        "B2B Growth Strategy",
        "Referral Networks",
        "Brand Development",
        "Market Penetration"
      ],
      quote: "Strategic marketing amplifies impact.",
      tags: ["Marketing", "Growth"]
    },
    {
      name: "Deepak Prajapat",
      role: "Head - Digital & Analytics",
      initials: "DP",
      gradient: "from-indigo-500 to-blue-600",
      color: "indigo",
      expertise: [
        "Digital Transformation",
        "Data Analytics",
        "Performance Monitoring",
        "Technology Integration"
      ],
      quote: "Data-driven decisions create lasting value.",
      tags: ["Digital", "Analytics"]
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-purple-500 bg-opacity-20 border border-purple-500 border-opacity-30 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            Leadership Team
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            Visionary Leaders.<br />
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 bg-clip-text text-transparent">
              Proven Results.
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="h-96 perspective-1000 group"
            >
              <div className="relative h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 transition-all duration-500 group-hover:shadow-2xl">
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold transition-transform duration-500 group-hover:scale-110`}>
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800 transition-colors duration-300 group-hover:text-slate-900">{member.name}</h3>
                    <p className={`text-${member.color}-400 font-semibold mb-4 transition-colors duration-300 group-hover:text-${member.color}-600`}>{member.role}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`bg-${member.color}-500 bg-opacity-20 text-${member.color}-400 px-3 py-1 rounded-full text-xs transition-all duration-300 group-hover:bg-${member.color}-500 group-hover:text-white group-hover:scale-105`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl">
                  <div className="text-center h-full flex flex-col justify-center">
                    <h4 className={`text-lg font-bold mb-4 text-${member.color}-400 transition-colors duration-300 group-hover:text-${member.color}-300`}>Expertise</h4>
                    <ul className="text-sm text-slate-400 space-y-2 mb-6">
                      {member.expertise.map((skill, skillIndex) => (
                        <li key={skillIndex} className="transition-colors duration-300 group-hover:text-slate-300">• {skill}</li>
                      ))}
                    </ul>
                    <blockquote className={`text-${member.color}-400 italic text-sm transition-colors duration-300 group-hover:text-${member.color}-300`}>
                      "{member.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
} 