'use client';

import { HERO_DATA } from '@/lib/constants';
import { MapPin, Activity, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-radial-glow opacity-20 z-0" />
      
      {/* Scan line effect */}
      <div className="scan-line opacity-5 z-0" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-tactical-surface border border-tactical-accent/30 rounded">
                <Activity className="w-4 h-4 text-tactical-accent pulse-ring" />
                <span className="text-tactical-accent text-sm font-mono uppercase tracking-wider">
                  {HERO_DATA.status}
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-slate-500 font-mono">
                AERIAL AUTONOMY PLATFORM
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl tactical-heading leading-tight">
                {HERO_DATA.title}
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                {HERO_DATA.subtitle}
              </p>
            </div>

            {/* Status Tags */}
            <div className="flex flex-wrap gap-3">
              {HERO_DATA.tags.map((tag, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 bg-tactical-bg border border-tactical-border rounded"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-tactical-accent" />
                  <span className="text-xs text-slate-300 font-medium">{tag}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#capabilities" className="btn-tactical">
                VIEW CAPABILITIES
              </a>
              <a href="#projects" className="btn-tactical-outline">
                TECHNICAL DETAILS
              </a>
            </div>

            {/* Location Badge */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="w-4 h-4" />
              <span className="font-mono">{HERO_DATA.location}</span>
            </div>
          </div>

          {/* Right: Visual/Data Display */}
          <div className="relative">
            {/* Mission Data Overlay */}
            <div className="relative aspect-square bg-tactical-surface border-2 border-tactical-border rounded-lg overflow-hidden hud-overlay">
              
              {/* Center Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-tactical-bg to-tactical-surface">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto border-2 border-tactical-accent rounded-full flex items-center justify-center">
                    <Activity className="w-16 h-16 text-tactical-accent animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-mono text-tactical-accent text-sm">SYSTEM STATUS</div>
                    <div className="font-display text-2xl text-slate-200">OPERATIONAL</div>
                  </div>
                </div>
              </div>

              {/* Top-left data overlay */}
              <div className="absolute top-4 left-4 space-y-2 bg-tactical-bg/80 backdrop-blur-sm p-3 rounded border border-tactical-border">
                <div className="font-mono text-xs text-slate-500">SYS-ALTITUDE</div>
                <div className="font-mono text-lg text-tactical-accent">-1.20M</div>
              </div>

              {/* Top-right data overlay */}
              <div className="absolute top-4 right-4 space-y-2 bg-tactical-bg/80 backdrop-blur-sm p-3 rounded border border-tactical-border">
                <div className="font-mono text-xs text-slate-500">LAT/LON</div>
                <div className="font-mono text-sm text-tactical-accent">
                  13.4658°E<br/>
                  37.2113°N
                </div>
              </div>

              {/* Bottom metrics */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                <div className="bg-tactical-bg/80 backdrop-blur-sm p-2 rounded border border-tactical-border">
                  <div className="font-mono text-xs text-slate-500">FPS</div>
                  <div className="font-mono text-lg text-tactical-accent">30</div>
                </div>
                <div className="bg-tactical-bg/80 backdrop-blur-sm p-2 rounded border border-tactical-border">
                  <div className="font-mono text-xs text-slate-500">LATENCY</div>
                  <div className="font-mono text-lg text-tactical-accent">27ms</div>
                </div>
                <div className="bg-tactical-bg/80 backdrop-blur-sm p-2 rounded border border-tactical-border">
                  <div className="font-mono text-xs text-slate-500">VEL</div>
                  <div className="font-mono text-lg text-tactical-accent">0.5 m/s</div>
                </div>
              </div>

              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-tactical-accent" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-tactical-accent" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-tactical-accent" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-tactical-accent" />
            </div>

            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-lg">
              <div className="absolute inset-0 rounded-lg border-2 border-tactical-accent/20 animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
