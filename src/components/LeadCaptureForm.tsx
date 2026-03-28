'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrWhatsApp: '',
    role: '',
    schoolName: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello Clasquera, I am interested in the Pilot Program.%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*School:* ${formData.schoolName}%0A` +
      `*Role:* ${formData.role}%0A` +
      `*Contact:* ${formData.emailOrWhatsApp}`;
    
    const whatsappUrl = `https://wa.me/2347070763135?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form after a slight delay to allow the redirect to start
    setTimeout(() => {
      setFormData({ fullName: '', emailOrWhatsApp: '', role: '', schoolName: '' });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="pilot" className="py-24 bg-[#F7F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[48px] p-8 md:p-16 border border-border overflow-hidden relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-[1.1]">
                Want Clasquera in your school first?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-md">
                Join our exclusive pilot program for Nigerian private school owners. Get early access, discounted rates, and personalized implementation.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Dedicated training for your staff',
                  'Customized reporting for your curriculum',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-bold text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#F8FAFC] p-8 rounded-[32px] border border-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Kola Bello"
                      required
                      className="block w-full px-4 py-3 rounded-xl border border-border focus:ring-accent focus:border-accent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="schoolName" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">School Name</label>
                    <input
                      type="text"
                      id="schoolName"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      placeholder="Greenwood Academy"
                      required
                      className="block w-full px-4 py-3 rounded-xl border border-border focus:ring-accent focus:border-accent text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="emailOrWhatsApp" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email or WhatsApp</label>
                  <input
                    type="text"
                    id="emailOrWhatsApp"
                    name="emailOrWhatsApp"
                    value={formData.emailOrWhatsApp}
                    onChange={handleChange}
                    placeholder="0808 000 0000"
                    required
                    className="block w-full px-4 py-3 rounded-xl border border-border focus:ring-accent focus:border-accent text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Role</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 rounded-xl border border-border focus:ring-accent focus:border-accent text-sm appearance-none bg-white"
                  >
                    <option value="" disabled>School Proprietor / Owner</option>
                    <option value="owner">School Proprietor / Owner</option>
                    <option value="principal">School Principal</option>
                    <option value="admin">Administrator</option>
                    <option value="teacher">Lead Teacher</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-white rounded-2xl font-bold hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all"
                >
                  Request pilot access
                </button>
                
                <p className="text-[10px] text-center text-slate-400">
                  * Limited slots available for our Lagos/Osun pilot launch.
                </p>
              </form>
            </div>
          </div>
          
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
