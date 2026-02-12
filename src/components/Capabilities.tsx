'use client';

import { CORE_CAPABILITIES } from '@/lib/constants';
import { Radar, Eye, Navigation, ChevronRight } from 'lucide-react';

const iconMap = {
  Radar: Radar,
  Eye: Eye,
  Navigation: Navigation,
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-tactical-bg relative">
      {/* Section Header */}
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-tactical-accent font-mono mb-4">
            CORE CAPABILITIES
          </div>
          <h2 className="text-4xl md:text-5xl tactical-heading mb-6">
            Built for Resilience
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Integrated sensing, localization, and planning into a low-latency onboard stack—built to operate in complex environments with degraded positioning and communications.
          </p>
        </div>

        {/* Designed For */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-slate-300 mb-4">Designed for:</h3>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-tactical-accent rounded-full" />
              GPS-degraded or denied environments
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-tactical-accent rounded-full" />
              Indoor / urban complexity
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-tactical-accent rounded-full" />
              Time-critical operations and field constraints
            </li>
          </ul>
        </div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {CORE_CAPABILITIES.map((capability, idx) => {
            const Icon = iconMap[capability.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={capability.id}
                className="tech-card group relative"
              >
                {/* System ID Badge */}
                <div className="absolute -top-3 -right-3 bg-tactical-accent text-tactical-bg px-3 py-1 rounded font-mono text-xs font-bold">
                  {capability.id}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-tactical-bg border-2 border-tactical-accent/30 rounded-lg flex items-center justify-center group-hover:border-tactical-accent transition-colors">
                    <Icon className="w-6 h-6 text-tactical-accent" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-slate-100 mb-3">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-6">
                  {capability.description}
                </p>

                {/* Specs */}
                <div className="space-y-2">
                  {capability.specs.map((spec, specIdx) => (
                    <div 
                      key={specIdx}
                      className="flex items-start gap-2 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-tactical-accent shrink-0 mt-0.5" />
                      <span className="text-slate-300">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-tactical-accent/5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-tactical-surface border border-tactical-border rounded-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-display font-bold text-tactical-accent mb-2">30 FPS</div>
              <div className="text-sm text-slate-400">Real-time Detection</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-tactical-accent mb-2">13.2cm</div>
              <div className="text-sm text-slate-400">Position Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-tactical-accent mb-2">27ms</div>
              <div className="text-sm text-slate-400">Detection Latency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
