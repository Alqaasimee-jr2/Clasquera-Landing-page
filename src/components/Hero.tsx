'use client';

import React from 'react';
import NextLink from 'next/link';
import { Play } from 'lucide-react';
import StatusChip from './StatusChip';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl leading-[1.1]">
              Know what really happens in every class.
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl max-w-xl">
              Clasquera records each lesson, transcribes it, and scores how closely it followed the lesson plan—so you see teacher performance without leaving your office.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <NextLink
                href="#pilot"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all"
              >
                Join pilot schools
              </NextLink>
              <NextLink
                href="https://youtu.be/JynXDX_C6tw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent font-semibold text-lg hover:underline transition-all"
              >
                <div className="w-10 h-10 rounded-full border-2 border-accent/20 flex items-center justify-center mr-3">
                  <Play className="w-4 h-4 fill-accent" />
                </div>
                Watch 60-second demo
              </NextLink>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 relative">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl bg-white p-6 border border-border overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-foreground">Today&apos;s Classes</h3>
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                   <div className="w-4 h-4 rounded-full border-2 border-accent border-t-transparent animate-spin"></div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-100">
                  <thead>
                    <tr>
                      <th className="px-2 py-3 text-left text-[10px] font-bold text-slate-400 uppercase tracking-wider">Teacher</th>
                      <th className="px-2 py-3 text-left text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class</th>
                      <th className="px-2 py-3 text-left text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                      <th className="px-2 py-3 text-left text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { teacher: 'Mrs. Adebayo', class: 'SS2 Mathematics', status: 'on-plan', score: '94%' },
                      { teacher: 'Mr. Ibrahim', class: 'JSS3 Basic Science', status: 'partial', score: '72%' },
                      { teacher: 'Ms. Okoli', class: 'SSS1 Biology', status: 'off-plan', score: '45%' },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-2 py-4 whitespace-nowrap text-sm font-semibold text-foreground">{row.teacher}</td>
                        <td className="px-2 py-4 whitespace-nowrap text-xs text-slate-500">{row.class}</td>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <StatusChip status={row.status as any} />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-foreground text-right">{row.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
