import React from 'react';
import { Mic, FileText, BarChart3 } from 'lucide-react';

const ThreeStepStrip = () => {
  const steps = [
    {
      icon: <Mic className="w-6 h-6 text-accent" />,
      title: 'Record',
      description: 'Simple smartphone recording.',
    },
    {
      icon: <FileText className="w-6 h-6 text-accent" />,
      title: 'Transcribe',
      description: 'Auto-transcription via AI.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-accent" />,
      title: 'Score',
      description: 'Instant compliance metrics.',
    },
  ];

  return (
    <div className="bg-white border-y border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center space-x-6 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeStepStrip;
