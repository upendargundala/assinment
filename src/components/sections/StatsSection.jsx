import React from 'react';
import { Users, Building2, Briefcase, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Users, value: '800+', label: 'Students', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Building2, value: '130+', label: 'colleges', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Briefcase, value: '100+', label: 'jobs & internships', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: ShieldCheck, value: '100%', label: 'Safe & Trusted', color: 'text-orange-600', bg: 'bg-orange-50' },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mb-4`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-500 mb-8 font-medium">Trusted by partners across India</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["TUP TAKA", "TALENTSPOTIFY", "RADIANT", "DPIIT", "GINSERV"].map((logo, index) => (
              <div key={index} className="text-xl font-bold text-gray-400 tracking-wider">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;