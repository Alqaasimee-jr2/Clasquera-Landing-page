import React from 'react';
import NextLink from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7F7FB] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-12 md:py-16 rounded-[32px] border border-border shadow-sm">
        <NextLink href="/" className="text-accent font-bold text-sm mb-8 inline-block hover:underline">
          ← Back to home
        </NextLink>
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p className="text-lg font-medium text-slate-800">Effective Date: March 30, 2026</p>
          
          <div className="mt-8 space-y-6">
            <p>You can view or download the full Clasquera Privacy Policy below:</p>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="/privacy-policy.pdf" 
                target="_blank" 
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all shadow-sm"
              >
                View Full PDF
              </a>
              <a 
                href="/privacy-policy.pdf" 
                download 
                className="inline-flex items-center px-6 py-3 border border-border text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all"
              >
                Download PDF
              </a>
            </div>

            <div className="border border-border rounded-2xl overflow-hidden bg-slate-100 h-[600px] w-full relative">
               <iframe 
                src="/privacy-policy.pdf" 
                className="w-full h-full border-none"
                title="Clasquera Privacy Policy PDF"
               />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
