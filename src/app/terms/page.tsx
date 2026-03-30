import React from 'react';
import NextLink from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F7F7FB] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-12 md:py-16 rounded-[32px] border border-border shadow-sm">
        <NextLink href="/" className="text-accent font-bold text-sm mb-8 inline-block hover:underline">
          ← Back to home
        </NextLink>
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p className="text-lg font-medium text-slate-800">Last Updated: March 30, 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing the Clasquera landing page or participating in our pilot program, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">2. Pilot Program Participation</h2>
            <p>
              The pilot program is provided &quot;as-is&quot;. Clasquera reserves the right to modify or discontinue pilot services during the development phase.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">3. User Responsibilities</h2>
            <p>
              Users are responsible for ensuring the accuracy of the school data provided during the registration and pilot phase.
            </p>
          </section>

          <div className="mt-12 p-6 bg-accent/5 rounded-2xl border border-accent/10">
            <p className="text-sm italic">
              [Note: This is a placeholder terms document. Please replace with your official legal documentation.]
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
