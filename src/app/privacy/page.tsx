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
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
            <p>
              Clasquera (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information through our landing page and pilot services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">2. Data We Collect</h2>
            <p>
              When you use our lead capture form, we collect the following:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full Name</li>
              <li>School Name</li>
              <li>Email or WhatsApp Number</li>
              <li>Professional Role within the school</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">3. How We Use Data</h2>
            <p>
              We only use your data to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Communicating with you regarding the pilot program.</li>
              <li>Setting up your school for a demonstration.</li>
            </ul>
          </section>
          
          <div className="mt-12 p-6 bg-accent/5 rounded-2xl border border-accent/10">
            <p className="text-sm italic">
              [Note: This is a placeholder policy. Please replace with your official legal documentation before going live.]
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
