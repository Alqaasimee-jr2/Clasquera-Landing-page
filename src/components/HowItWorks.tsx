import React from 'react';
import { Smartphone, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Open app',
      description: 'Teachers open the Clasquera mobile app at the start of every scheduled lesson period.',
    },
    {
      number: '2',
      title: 'Record',
      description: 'The app captures ambient classroom audio reliably, processing it in real-time.',
    },
    {
      number: '3',
      title: 'AI Transcribe',
      description: 'Advanced AI converts the audio into text and cross-references it with the approved curriculum.',
    },
    {
      number: '4',
      title: 'School dashboard',
      description: 'You receive automated scores and highlights on your desktop immediately after class.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-12">
              From classroom audio to clear scores
            </h2>
            
            <div className="space-y-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex group">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 relative">
            {/* Phone Mockup */}
            <div className="relative mx-auto w-[280px] h-[580px] bg-[#0F172A] rounded-[40px] border-[8px] border-slate-800 shadow-2xl overflow-hidden p-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-10"></div>
              
              <div className="bg-white h-full rounded-[24px] overflow-hidden p-4 flex flex-col">
                <div className="flex justify-between items-center mb-8 pt-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                  <div className="w-12 h-4 bg-slate-100 rounded-full"></div>
                </div>
                
                <h4 className="text-lg font-bold text-foreground mb-6">Today&apos;s Lessons</h4>
                
                <div className="p-4 bg-accent/5 rounded-2xl border border-accent/10 mb-6">
                   <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Current Class</p>
                   <p className="text-sm font-bold text-foreground">SS2-A Mathematics</p>
                   <div className="mt-4 flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <p className="text-[10px] text-slate-500 font-medium">Recording in progress...</p>
                   </div>
                </div>
                
                <div className="flex-1 space-y-4 pt-4">
                   <div className="h-6 w-3/4 bg-slate-50 rounded-lg"></div>
                   <div className="h-6 w-1/2 bg-slate-50 rounded-lg"></div>
                   <div className="h-20 w-full bg-slate-50 rounded-lg"></div>
                </div>
                
                <button className="mt-auto w-full py-3 bg-accent text-white rounded-xl font-bold text-sm">
                  Stop lesson
                </button>
              </div>
            </div>
            
            {/* Desktop Mockup Fragment behind phone */}
            <div className="absolute -right-20 top-20 -z-10 hidden lg:block w-[400px] h-[300px] bg-white rounded-2xl border border-border shadow-xl p-6">
               <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-100"></div>
                  <div className="flex-1 h-4 bg-slate-100 rounded-full"></div>
               </div>
               <div className="space-y-4">
                  <div className="h-20 bg-[#F8FAFC] rounded-xl"></div>
                  <div className="h-20 bg-[#F8FAFC] rounded-xl"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
