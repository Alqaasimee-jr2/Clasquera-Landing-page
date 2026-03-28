'use client';

import React, { useState } from 'react';
import NextLink from 'next/link';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <NextLink href="/" className="text-2xl font-bold text-foreground tracking-tight">
              Clasquera
            </NextLink>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <NextLink href="#features" className="text-sm font-medium text-slate-600 hover:text-foreground transition-colors">
                Features
              </NextLink>
              <NextLink href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-foreground transition-colors">
                How it works
              </NextLink>
              <NextLink href="#pilot" className="text-sm font-medium text-slate-600 hover:text-foreground transition-colors">
                Pilot Program
              </NextLink>
              <NextLink href="#faq" className="text-sm font-medium text-slate-600 hover:text-foreground transition-colors">
                FAQ
              </NextLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NextLink
              href="#pilot"
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-full shadow-sm text-white bg-accent hover:bg-accent/90 transition-all"
            >
              Join Pilot
            </NextLink>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-foreground hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NextLink
              href="#features"
              className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-foreground hover:bg-slate-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Features
            </NextLink>
            <NextLink
              href="#how-it-works"
              className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-foreground hover:bg-slate-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </NextLink>
            <NextLink
              href="#pilot"
              className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-foreground hover:bg-slate-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Pilot Program
            </NextLink>
            <NextLink
              href="#faq"
              className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-foreground hover:bg-slate-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </NextLink>
          </div>
          <div className="pt-4 pb-6 border-t border-border px-5 flex flex-col space-y-4">
            <NextLink
              href="#pilot"
              className="block w-full text-center px-5 py-3 border border-transparent text-base font-bold rounded-full shadow-sm text-white bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Join Pilot
            </NextLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
