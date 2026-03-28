import React from 'react';
import { Eye, ShieldCheck, MessageSquare, Smartphone } from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    {
      icon: <Eye className="w-6 h-6 text-accent" />,
      title: 'Real teaching, not excuses',
      description: 'Cut through hearsay. Get direct insights into the actual delivery of lessons across every classroom.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: 'Protect your reputation',
      description: 'Ensure every parent\'s investment is protected by maintaining high standards of academic delivery.',
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-accent" />,
      title: 'Coach teachers with evidence',
      description: 'Provide constructive feedback based on factual classroom data rather than subjective observations.',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      title: 'Easy to roll out',
      description: 'No complex hardware required. Simple smartphone app integration that respects classroom privacy.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#F7F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-widest text-xs uppercase mb-4">Built for private school owners</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            You don&apos;t need more reports—you need proof of what&apos;s happening in class.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 leading-snug">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
