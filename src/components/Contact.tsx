'use client';

import { CONTACT_INFO } from '@/lib/constants';
import { Mail, MapPin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-tactical-surface relative">
      <div className="container mx-auto px-6">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-tactical-accent font-mono mb-4">
              GET STARTED
            </div>
            <h2 className="text-4xl md:text-5xl tactical-heading mb-6">
              Collaborate on Autonomous Systems
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Open to partnerships on GPS-denied navigation, sensor fusion, and autonomous flight control systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="p-6 bg-tactical-bg border border-tactical-border rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-tactical-surface border border-tactical-accent/30 rounded flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-tactical-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Email</div>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-tactical-accent hover:underline font-mono"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-tactical-bg border border-tactical-border rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-tactical-surface border border-tactical-accent/30 rounded flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-tactical-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Location</div>
                    <div className="text-slate-200">{CONTACT_INFO.location}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-tactical-bg border border-tactical-border rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-tactical-surface border border-tactical-accent/30 rounded flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5 text-tactical-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">GitHub</div>
                    <a 
                      href={`https://${CONTACT_INFO.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tactical-accent hover:underline font-mono"
                    >
                      {CONTACT_INFO.github}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-tactical-accent/10 border border-tactical-accent/30 rounded-lg">
                <p className="text-sm text-slate-300">
                  {CONTACT_INFO.availability}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 bg-tactical-bg border border-tactical-border rounded-lg">
              <form className="space-y-4">
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Name *</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 bg-tactical-surface border border-tactical-border rounded
                               text-slate-200 placeholder-slate-600 focus:border-tactical-accent focus:outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Email *</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-2 bg-tactical-surface border border-tactical-border rounded
                               text-slate-200 placeholder-slate-600 focus:border-tactical-accent focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Company / Organization</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 bg-tactical-surface border border-tactical-border rounded
                             text-slate-200 placeholder-slate-600 focus:border-tactical-accent focus:outline-none"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Use Case *</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 bg-tactical-surface border border-tactical-border rounded
                             text-slate-200 placeholder-slate-600 focus:border-tactical-accent focus:outline-none"
                    placeholder="e.g., Infrastructure Inspection, Tactical ISR"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Operating Environment</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 bg-tactical-surface border border-tactical-border rounded
                               text-slate-200 placeholder-slate-600 focus:border-tactical-accent focus:outline-none"
                      placeholder="e.g., Urban, Industrial"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Evaluation Timeline</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 bg-tactical-surface border border-tactical-border rounded
                               text-slate-200 placeholder-slate-600 focus:border-tactical-accent focus:outline-none"
                      placeholder="e.g., Q1 2025"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Additional Details</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 bg-tactical-surface border border-tactical-border rounded
                             text-slate-200 placeholder-slate-600 focus:border-tactical-accent focus:outline-none resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full btn-tactical"
                >
                  REQUEST COLLABORATION
                </button>

                <p className="text-xs text-slate-500 text-center">
                  Include your use case, operating environment, and evaluation timeline.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
