'use client';

import { TECH_STACK, MILESTONES } from '@/lib/constants';
import { Cpu, Radio, Plane, Code, CheckCircle2, Circle, AlertCircle } from 'lucide-react';

export default function TechStack() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle2 className="w-5 h-5 text-tactical-accent" />;
      case 'active':
        return <AlertCircle className="w-5 h-5 text-tactical-accent animate-pulse" />;
      default:
        return <Circle className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section className="py-24 bg-tactical-bg relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-tactical-accent font-mono mb-4">
            TECHNOLOGY STACK
          </div>
          <h2 className="text-4xl md:text-5xl tactical-heading mb-6">
            Hardware & Software Integration
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Production-grade components integrated for reliable autonomous operation in GPS-denied environments.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Compute */}
          <div className="tech-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-tactical-bg border border-tactical-accent/30 rounded flex items-center justify-center">
                <Cpu className="w-5 h-5 text-tactical-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-100">Compute Platforms</h3>
            </div>
            <div className="space-y-3">
              {TECH_STACK.compute.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between p-3 bg-tactical-bg rounded border border-tactical-border">
                  <div>
                    <div className="font-semibold text-slate-200">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sensors */}
          <div className="tech-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-tactical-bg border border-tactical-accent/30 rounded flex items-center justify-center">
                <Radio className="w-5 h-5 text-tactical-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-100">Sensor Suite</h3>
            </div>
            <div className="space-y-3">
              {TECH_STACK.sensors.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between p-3 bg-tactical-bg rounded border border-tactical-border">
                  <div>
                    <div className="font-semibold text-slate-200">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flight Systems */}
          <div className="tech-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-tactical-bg border border-tactical-accent/30 rounded flex items-center justify-center">
                <Plane className="w-5 h-5 text-tactical-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-100">Flight Control</h3>
            </div>
            <div className="space-y-3">
              {TECH_STACK.flight.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between p-3 bg-tactical-bg rounded border border-tactical-border">
                  <div>
                    <div className="font-semibold text-slate-200">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software */}
          <div className="tech-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-tactical-bg border border-tactical-accent/30 rounded flex items-center justify-center">
                <Code className="w-5 h-5 text-tactical-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-100">Software Stack</h3>
            </div>
            <div className="space-y-3">
              {TECH_STACK.software.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between p-3 bg-tactical-bg rounded border border-tactical-border">
                  <div>
                    <div className="font-semibold text-slate-200">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="p-8 bg-tactical-surface border border-tactical-border rounded-lg">
          <div className="text-xs uppercase tracking-widest text-tactical-accent font-mono mb-8">
            VALIDATION & MILESTONES
          </div>
          
          <div className="space-y-6">
            {MILESTONES.map((milestone, idx) => (
              <div 
                key={milestone.id}
                className="relative"
              >
                {/* Connection line to next milestone */}
                {idx < MILESTONES.length - 1 && (
                  <div className="absolute left-[10px] top-12 w-0.5 h-full bg-tactical-border" />
                )}
                
                <div className="flex gap-4">
                  {/* Status Icon */}
                  <div className="shrink-0 relative z-10">
                    {getStatusIcon(milestone.status)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm font-bold text-tactical-accent">
                        {milestone.id}
                      </span>
                      <h4 className="font-display font-bold text-slate-100">
                        {milestone.title}
                      </h4>
                      <span className={`px-2 py-0.5 rounded text-xs font-mono uppercase
                        ${milestone.status === 'complete' ? 'bg-tactical-accent/20 text-tactical-accent' :
                          milestone.status === 'active' ? 'bg-tactical-accent/20 text-tactical-accent' :
                          'bg-tactical-border text-slate-500'}`}
                      >
                        {milestone.status}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-3">
                      {milestone.description}
                    </p>

                    {/* Metrics if available */}
                    {milestone.metrics && (
                      <div className="flex flex-wrap gap-3">
                        {Object.entries(milestone.metrics).map(([key, value]) => (
                          <div 
                            key={key}
                            className="px-3 py-1.5 bg-tactical-bg rounded border border-tactical-border"
                          >
                            <span className="text-xs text-slate-500 uppercase">
                              {key.replace(/_/g, ' ')}:{' '}
                            </span>
                            <span className="text-sm font-mono text-tactical-accent">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 pt-6 border-t border-tactical-border">
            <p className="text-sm text-slate-500 italic">
              We prioritize verifiable outputs over marketing claims.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
