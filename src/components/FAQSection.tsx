'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Does this record 24/7 in the class?',
      answer: 'No. Clasquera only records when the teacher explicitly starts a session on their app during a scheduled lesson period. Privacy is maintained during breaks and non-academic time.',
    },
    {
      question: 'How accurate is the transcription for local accents?',
      answer: 'Our AI models are specifically trained on West African accents and educational terminology common in Nigerian private and Islamic schools, ensuring over 90% accuracy in transcription.',
    },
    {
      question: 'Will my teachers feel monitored?',
      answer: 'We frame Clasquera as a professional development tool. It helps top-performing teachers get the recognition they deserve and provides struggling teachers with specific areas for improvement rather than guesswork.',
    },
    {
      question: 'What happens if our internet is slow?',
      answer: 'The app works offline. Recordings are cached locally on the teacher\'s phone and automatically synced to our servers whenever a stable connection is detected.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-foreground text-center mb-16">
          Questions school owners ask
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-slate-50 shadow-sm' : 'bg-white'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-foreground pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ${openIndex === idx ? 'pb-8 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
