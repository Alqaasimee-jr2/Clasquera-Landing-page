import React from 'react';
import { ShieldCheck, Cpu, MapPin } from 'lucide-react';

const TrustStrip = () => {
  const badges = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      text: 'School-Safe & Privacy-First',
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent" />,
      text: 'AI-powered; privacy aware',
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      text: 'Pilot schools in Osun & Lagos',
    },
  ];

  return (
    <div className="bg-[#F7F7FB] py-12 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted by modern private school owners</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 cursor-default">
              <div className="flex-shrink-0">
                {badge.icon}
              </div>
              <span className="text-sm font-bold text-slate-600 whitespace-nowrap">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
