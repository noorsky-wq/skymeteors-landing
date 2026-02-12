'use client';

import { PROJECTS } from '@/lib/constants';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-tactical-surface relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-tactical-accent font-mono mb-4">
            APPLICATIONS
          </div>
          <h2 className="text-4xl md:text-5xl tactical-heading mb-6">
            Project Portfolio
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Advanced autonomous systems demonstrating GPS-independent navigation, real-time perception, and adaptive mission control across multiple operational scenarios.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx}
              className="group relative bg-tactical-bg border border-tactical-border hover:border-tactical-accent transition-all duration-300 overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-tactical-surface to-tactical-bg relative overflow-hidden border-b border-tactical-border">
                {/* HUD Overlay */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="bg-tactical-bg/90 backdrop-blur-sm px-3 py-1 rounded border border-tactical-accent/30">
                      <span className="font-mono text-xs text-tactical-accent uppercase">
                        {project.status}
                      </span>
                    </div>
                    <div className="bg-tactical-bg/90 backdrop-blur-sm px-3 py-1 rounded border border-tactical-border">
                      <span className="font-mono text-xs text-slate-400">
                        SYS-{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Center Icon/Visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-tactical-accent/30 rounded-full flex items-center justify-center group-hover:border-tactical-accent transition-colors">
                      <div className="w-16 h-16 border border-tactical-accent/50 rounded-full" />
                    </div>
                  </div>

                  {/* Corner markers */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-tactical-accent/30 group-hover:border-tactical-accent transition-colors" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-tactical-accent/30 group-hover:border-tactical-accent transition-colors" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-tactical-accent/30 group-hover:border-tactical-accent transition-colors" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-tactical-accent/30 group-hover:border-tactical-accent transition-colors" />
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-tactical-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-100 mb-2 group-hover:text-tactical-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-2 py-1 bg-tactical-surface border border-tactical-border rounded text-xs font-mono text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2">
                  {project.highlights.map((highlight, highlightIdx) => (
                    <div 
                      key={highlightIdx}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-tactical-accent shrink-0 mt-0.5" />
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Link */}
                <button className="flex items-center gap-2 text-tactical-accent hover:gap-3 transition-all text-sm font-semibold pt-2">
                  <span>TECHNICAL DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Progress */}
        <div className="mt-16 p-8 bg-tactical-bg border border-tactical-border rounded-lg">
          <div className="text-xs uppercase tracking-widest text-tactical-accent font-mono mb-6">
            DEVELOPMENT MILESTONES
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {['M1', 'M2', 'M3', 'M4', 'M5'].map((milestone, idx) => (
              <div 
                key={milestone}
                className="text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full border-2 flex items-center justify-center font-mono font-bold
                  ${idx < 3 ? 'border-tactical-accent bg-tactical-accent text-tactical-bg' : 
                    idx === 3 ? 'border-tactical-accent bg-tactical-bg text-tactical-accent animate-pulse' : 
                    'border-tactical-border bg-tactical-surface text-slate-500'}`}
                >
                  {milestone}
                </div>
                <div className="text-xs text-slate-400">
                  {idx < 3 ? 'Complete' : idx === 3 ? 'Active' : 'Planned'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
