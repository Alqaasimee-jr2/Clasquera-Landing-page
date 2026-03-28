import React from 'react';
import NextLink from 'next/link';
import { Globe, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F7F7FB] pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <NextLink href="/" className="text-2xl font-bold text-foreground tracking-tight mb-6 block">
              Clasquera
            </NextLink>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              AI-driven accountability for private schools, powering Nigerian Education through data-driven academic excellence.
            </p>
            <div className="mt-8 flex space-x-4">
              <NextLink href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent transition-all">
                <Globe className="w-4 h-4" />
              </NextLink>
              <NextLink href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent transition-all">
                <LinkIcon className="w-4 h-4" />
              </NextLink>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4">
              <li><NextLink href="#features" className="text-sm font-medium text-slate-600 hover:text-foreground">Features</NextLink></li>
              <li><NextLink href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-foreground">How it Works</NextLink></li>
              <li><NextLink href="#pilot" className="text-sm font-medium text-slate-600 hover:text-foreground">Pilot Program</NextLink></li>
              <li><NextLink href="#faq" className="text-sm font-medium text-slate-600 hover:text-foreground">FAQ</NextLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              <li><NextLink href="#" className="text-sm font-medium text-slate-600 hover:text-foreground">Privacy Policy</NextLink></li>
              <li><NextLink href="#" className="text-sm font-medium text-slate-600 hover:text-foreground">Terms of Service</NextLink></li>
              <li><NextLink href="#" className="text-sm font-medium text-slate-600 hover:text-foreground">Contact Us</NextLink></li>
              <li><NextLink href="#" className="text-sm font-medium text-slate-600 hover:text-foreground">Twitter</NextLink></li>
              <li><NextLink href="#" className="text-sm font-medium text-slate-600 hover:text-foreground">Linkedin</NextLink></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-slate-400 font-medium">
          <p>© 2026 Clasquera. Developed by NIT7ER.</p>
          <p>Elevating Nigerian Education.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
