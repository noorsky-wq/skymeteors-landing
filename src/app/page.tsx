'use client';

import React, { useState, useEffect } from 'react';
import { Search, Building2, Shield, Eye, MapPin, Workflow, Cpu, CheckCircle, Mail, MapPinIcon } from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-nato-bg/95 backdrop-blur-md border-b border-nato-border' : 'bg-nato-dark/50 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold tracking-wide text-nato-text">SKYMETEORS</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#technology" className="text-sm text-nato-text-dim hover:text-nato-accent uppercase tracking-wider transition-colors">Technology</a>
              <a href="#use-cases" className="text-sm text-nato-text-dim hover:text-nato-accent uppercase tracking-wider transition-colors">Use Cases</a>
              <a href="#proof" className="text-sm text-nato-text-dim hover:text-nato-accent uppercase tracking-wider transition-colors">Proof</a>
              <a href="#contact" className="text-sm text-nato-text-dim hover:text-nato-accent uppercase tracking-wider transition-colors">Contact</a>
              <a href="#contact" className="px-6 py-2.5 bg-nato-accent text-white hover:bg-nato-accent/80 transition-colors text-sm uppercase tracking-wider font-semibold">
                Request a Pilot
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-nato-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-widest text-nato-text-dim">AERIAL AUTONOMY PLATFORM</div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-nato-text">
                Autonomy for environments where GPS fails.
              </h1>
              <p className="text-lg text-nato-text-dim leading-relaxed">
                Skymeteors develops European-built aerial autonomy with 360° perception, real-time 3D mapping, and onboard navigation — designed for operations where infrastructure is limited and reliability matters.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact" className="px-6 py-3 bg-nato-accent text-white hover:bg-nato-accent/80 transition-colors text-sm uppercase tracking-wider font-semibold">
                  Request a Pilot
                </a>
                <a href="#proof" className="px-6 py-3 border-2 border-nato-border text-nato-text hover:border-nato-accent hover:text-nato-accent transition-colors text-sm uppercase tracking-wider font-semibold">
                  View Prototype
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-nato-text-dim pt-4">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-nato-accent rounded-full"></div>
                  Berlin, Germany
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-nato-accent rounded-full"></div>
                  Prototype validated
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-nato-accent rounded-full"></div>
                  Pilot partnerships open
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg relative overflow-hidden border border-nato-border">
                <img 
                  src="/images/drone-hero.jpg" 
                  alt="Tactical Drone" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-nato-surface/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-mono text-nato-accent border border-nato-border">
                  SYS:ACTIVE@2.5200°N
                </div>
                <div className="absolute bottom-4 left-4 bg-nato-surface/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-mono text-nato-text border border-nato-border">
                  ~120M
                </div>
                <div className="absolute bottom-4 right-4 bg-nato-surface/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-mono text-nato-text border border-nato-border">
                  ALT:120M 13.4050°E
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-20 bg-nato-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">TECHNOLOGY</div>
            <h2 className="text-4xl font-bold mb-6 text-nato-text">Aerial Autonomy Platform</h2>
            <p className="text-lg text-nato-text-dim leading-relaxed mb-8">
              Skymeteors integrates sensing, localization, mapping, and planning into a low-latency onboard stack—built to operate in complex environments with degraded positioning and communications.
            </p>
            <div className="space-y-3">
              <div className="text-base font-semibold mb-3 text-nato-text">Designed for:</div>
              <div className="flex items-center gap-2 text-nato-text-dim">
                <div className="w-1.5 h-1.5 bg-nato-accent rounded-full"></div>
                GPS-degraded or denied environments
              </div>
              <div className="flex items-center gap-2 text-nato-text-dim">
                <div className="w-1.5 h-1.5 bg-nato-accent rounded-full"></div>
                Indoor / urban complexity
              </div>
              <div className="flex items-center gap-2 text-nato-text-dim">
                <div className="w-1.5 h-1.5 bg-nato-accent rounded-full"></div>
                Time-critical operations and field constraints
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-nato-dark">
        <div className="container mx-auto px-6">
          <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">CORE CAPABILITIES</div>
          <h2 className="text-4xl font-bold mb-12 text-nato-text">Built for Resilience</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-nato-surface border border-nato-border p-8 relative hover:border-nato-accent transition-colors">
              <div className="absolute -top-3 -right-3 bg-nato-bg px-3 py-1 text-xs font-mono text-nato-accent border border-nato-border">SYS-01</div>
              <div className="w-12 h-12 bg-nato-accent/10 border-2 border-nato-accent/30 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-nato-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-nato-text">360° Perception</h3>
              <p className="text-nato-text-dim leading-relaxed">
                Coverage-first awareness with LiDAR-centric sensing and complementary vision.
              </p>
            </div>

            <div className="bg-nato-surface border border-nato-border p-8 relative hover:border-nato-accent transition-colors">
              <div className="absolute -top-3 -right-3 bg-nato-bg px-3 py-1 text-xs font-mono text-nato-accent border border-nato-border">SYS-02</div>
              <div className="w-12 h-12 bg-nato-accent/10 border-2 border-nato-accent/30 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-nato-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-nato-text">Real-Time Localization & Mapping</h3>
              <p className="text-nato-text-dim leading-relaxed">
                Live odometry and 3D reconstruction to support stability and navigation without GPS reliance.
              </p>
            </div>

            <div className="bg-nato-surface border border-nato-border p-8 relative hover:border-nato-accent transition-colors">
              <div className="absolute -top-3 -right-3 bg-nato-bg px-3 py-1 text-xs font-mono text-nato-accent border border-nato-border">SYS-03</div>
              <div className="w-12 h-12 bg-nato-accent/10 border-2 border-nato-accent/30 flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-nato-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-nato-text">Obstacle-Aware Autonomy</h3>
              <p className="text-nato-text-dim leading-relaxed">
                Onboard planning behaviors designed to react to changing environments in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-nato-bg">
        <div className="container mx-auto px-6">
          <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">APPLICATIONS</div>
          <h2 className="text-4xl font-bold mb-12 text-nato-text">Use Cases</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-nato-border overflow-hidden bg-nato-surface hover:border-nato-accent transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/helicopter-rescue.jpg" 
                  alt="Search and Rescue" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Search className="w-5 h-5 text-nato-accent" />
                  <h3 className="text-xl font-bold text-nato-text">Search & Rescue / Civil Protection</h3>
                </div>
                <p className="text-nato-text-dim">
                  Reliable navigation and scene understanding when infrastructure is disrupted or unavailable.
                </p>
              </div>
            </div>

            <div className="border border-nato-border overflow-hidden bg-nato-surface hover:border-nato-accent transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/bridge-infrastructure.jpg" 
                  alt="Infrastructure Monitoring" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-nato-accent" />
                  <h3 className="text-xl font-bold text-nato-text">Critical Infrastructure Monitoring</h3>
                </div>
                <p className="text-nato-text-dim">
                  Autonomous inspection and perimeter awareness for energy, industrial, and public facilities—built for repeatable, consistent data capture.
                </p>
              </div>
            </div>

            <div className="border border-nato-border overflow-hidden bg-nato-surface hover:border-nato-accent transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/security-facility.jpg" 
                  alt="Security Monitoring" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-nato-accent" />
                  <h3 className="text-xl font-bold text-nato-text">Security & Perimeter Monitoring</h3>
                </div>
                <p className="text-nato-text-dim">
                  Resilient sensing and navigation for wide-area situational awareness and patrol workflows in complex sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation + Differentiators */}
      <section id="proof" className="py-20 bg-nato-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">VALIDATION</div>
              <h2 className="text-4xl font-bold mb-8 text-nato-text">Prototype Status</h2>
              <div className="space-y-4">
                {[
                  'GPS-denied localization and mapping validated in prototype testing',
                  '360° sensing pipeline integrated for onboard awareness',
                  'Autopilot integration with real-time pose feed (prototype)',
                  'Obstacle-aware navigation behaviors (active testing)',
                  'Demonstrations and technical evidence available on request'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-nato-accent shrink-0 mt-0.5" />
                    <span className="text-nato-text-dim">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-nato-text-dim italic mt-8">
                We prioritize verifiable outputs over marketing claims.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">DIFFERENTIATORS</div>
              <h2 className="text-4xl font-bold mb-8 text-nato-text">Why Skymeteors</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-nato-accent/10 border border-nato-accent/30 flex items-center justify-center shrink-0">
                    <Cpu className="w-6 h-6 text-nato-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-nato-text">Onboard-first</h3>
                    <p className="text-nato-text-dim text-sm">Low-latency autonomy without cloud dependency</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-nato-accent/10 border border-nato-accent/30 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-nato-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-nato-text">Resilience-driven</h3>
                    <p className="text-nato-text-dim text-sm">Designed for degraded infrastructure and complex environments</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-nato-accent/10 border border-nato-accent/30 flex items-center justify-center shrink-0">
                    <Workflow className="w-6 h-6 text-nato-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-nato-text">Integration-friendly</h3>
                    <p className="text-nato-text-dim text-sm">Built to connect to established robotics and autopilot stacks</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-nato-accent/10 border border-nato-accent/30 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-nato-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-nato-text">Responsible innovation</h3>
                    <p className="text-nato-text-dim text-sm">Aligned with European regulations and safety principles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-nato-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">ABOUT</div>
            <h2 className="text-4xl font-bold mb-6 text-nato-text">Building Resilient Autonomy</h2>
            <p className="text-lg text-nato-text-dim leading-relaxed mb-12">
              Skymeteors is a Berlin-based autonomy startup building resilient aerial perception and navigation for demanding operational environments.
            </p>
            
            <div className="flex items-center gap-4 p-6 bg-nato-surface rounded-lg border border-nato-border">
              <div className="w-16 h-16 bg-nato-bg flex items-center justify-center text-2xl font-bold text-nato-accent border border-nato-border">
                JS
              </div>
              <div>
                <div className="font-bold text-lg text-nato-text">Jack Safia</div>
                <div className="text-sm text-nato-text-dim">Founder</div>
                <div className="text-sm text-nato-text-dim">Robotics, autonomy, and flight systems integration.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-nato-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">GET STARTED</div>
              <h2 className="text-4xl font-bold mb-6 text-nato-text">Partner with Skymeteors</h2>
              <p className="text-lg text-nato-text-dim leading-relaxed mb-8">
                If you're evaluating autonomy for civil protection, infrastructure monitoring, or secure site operations, we're open to pilot discussions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-nato-text-dim">
                  <Mail className="w-5 h-5 text-nato-accent" />
                  <span>info@skymeteors.com</span>
                </div>
                <div className="flex items-center gap-3 text-nato-text-dim">
                  <MapPinIcon className="w-5 h-5 text-nato-accent" />
                  <span>Berlin, Germany</span>
                </div>
              </div>
            </div>

            <div className="bg-nato-surface border border-nato-border p-8 rounded-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-nato-text mb-2">Name *</label>
                    <input type="text" className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-nato-text mb-2">Email *</label>
                    <input type="email" className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-nato-text mb-2">Company / Organization</label>
                  <input type="text" className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-nato-text mb-2">Use Case *</label>
                  <input type="text" placeholder="e.g., Search & Rescue, Infrastructure Inspection" className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-nato-text mb-2">Operating Environment</label>
                    <input type="text" placeholder="e.g., Indoor, Urban, Industrial" className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-nato-text mb-2">Evaluation Timeline</label>
                    <input type="text" placeholder="e.g., Q1 2025, Immediate" className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-nato-text mb-2">Additional Details</label>
                  <textarea rows={4} placeholder="Tell us more about your requirements..." className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent resize-none"></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-nato-accent text-white hover:bg-nato-accent/80 transition-colors text-sm uppercase tracking-wider font-semibold">
                  Request a Pilot
                </button>
                <p className="text-xs text-nato-text-dim text-center">
                  Include your use case, operating environment, and evaluation timeline.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nato-bg border-t border-nato-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4 text-nato-text">SKYMETEORS</div>
              <p className="text-sm text-nato-text-dim">
                European-built aerial autonomy for demanding operational environments.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">NAVIGATION</div>
              <div className="space-y-2 text-sm">
                <a href="#technology" className="block text-nato-text-dim hover:text-nato-accent transition-colors">Technology</a>
                <a href="#use-cases" className="block text-nato-text-dim hover:text-nato-accent transition-colors">Use Cases</a>
                <a href="#proof" className="block text-nato-text-dim hover:text-nato-accent transition-colors">Proof</a>
                <a href="#contact" className="block text-nato-text-dim hover:text-nato-accent transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">CONTACT</div>
              <div className="space-y-2 text-sm text-nato-text-dim">
                <div>info@skymeteors.com</div>
                <div>Berlin, Germany</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
