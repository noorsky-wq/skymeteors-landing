'use client';

import React, { useState, useEffect } from 'react';
import { Search, Building2, Shield, Eye, MapPin, Workflow, Cpu, CheckCircle, Mail, MapPinIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  // Contact Form Component (MOVED INSIDE HOME)
  function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus('loading');

      const formData = new FormData(e.currentTarget);
      formData.append('access_key', '373901fe-7ddf-4815-8f74-fda11e7f0633');

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setStatus('success');
          setMessage('Thank you! We will get back to you soon.');
          (e.target as HTMLFormElement).reset();

          setTimeout(() => {
            setStatus('idle');
            setMessage('');
          }, 5000);
        } else {
          setStatus('error');
          setMessage('Something went wrong. Please try again.');
        }
      } catch (error) {
        setStatus('error');
        setMessage('Failed to send message. Please email us directly.');
      }
    };

    return (
      <motion.div
        variants={fadeInUp}
        className="bg-nato-surface border border-nato-border p-8 rounded-lg hover:border-nato-accent transition-all"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-nato-text mb-2">Name *</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-nato-text mb-2">Email *</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-nato-text mb-2">Company / Organization</label>
            <input
              type="text"
              name="company"
              className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-nato-text mb-2">Use Case *</label>
            <input
              type="text"
              name="use_case"
              placeholder="e.g., Search & Rescue, Infrastructure Inspection"
              className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-nato-text mb-2">Operating Environment</label>
              <input
                type="text"
                name="environment"
                placeholder="e.g., Indoor, Urban, Industrial"
                className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-nato-text mb-2">Evaluation Timeline</label>
              <input
                type="text"
                name="timeline"
                placeholder="e.g., Q1 2025, Immediate"
                className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-nato-text mb-2">Additional Details</label>
            <textarea
              rows={4}
              name="message"
              placeholder="Tell us more about your requirements..."
              className="w-full px-4 py-2 bg-nato-bg border border-nato-border rounded text-nato-text placeholder-nato-text-dim focus:outline-none focus:ring-2 focus:ring-nato-accent resize-none transition-all"
            ></textarea>
          </div>

          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <motion.button
            whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
            whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
            type="submit"
            disabled={status === 'loading'}
            className={`w-full px-6 py-3 text-white transition-colors text-sm uppercase tracking-wider font-semibold ${
              status === 'loading'
                ? 'bg-nato-text-dim cursor-not-allowed'
                : 'bg-nato-accent hover:bg-nato-accent/80'
            }`}
          >
            {status === 'loading' ? 'SENDING...' : 'REQUEST A PILOT'}
          </motion.button>

          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded text-sm text-center ${
                status === 'success'
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}
            >
              {message}
            </motion.div>
          )}

          <p className="text-xs text-nato-text-dim text-center">
            Include your use case, operating environment, and evaluation timeline.
          </p>
        </form>
      </motion.div>
    );
  }

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-nato-bg/95 backdrop-blur-md border-b border-nato-border' : 'bg-nato-dark/50 backdrop-blur-sm'}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold tracking-wide text-nato-text"
            >
              SKYMETEORS
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex items-center gap-8"
            >
              <a href="#technology" className="text-sm text-nato-text-dim hover:text-nato-accent uppercase tracking-wider transition-colors">Technology</a>
              <a href="#use-cases" className="text-sm text-nato-text-dim hover:text-nato-accent uppercase tracking-wider transition-colors">Use Cases</a>
              <a href="#proof" className="text-sm text-nato-text-dim hover:text-nato-accent uppercase tracking-wider transition-colors">Proof</a>
              <a href="#contact" className="text-sm text-nato-text-dim hover:text-nato-accent uppercase tracking-wider transition-colors">Contact</a>
              <a href="#contact" className="px-6 py-2.5 bg-nato-accent text-white hover:bg-nato-accent/80 hover:scale-105 transition-all text-sm uppercase tracking-wider font-semibold">
                Request a Pilot
              </a>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-nato-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-widest text-nato-text-dim"
              >
                AERIAL AUTONOMY PLATFORM
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold leading-tight text-nato-text"
              >
                Autonomy for environments where GPS fails.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-nato-text-dim leading-relaxed"
              >
                Skymeteors develops European-built aerial autonomy with 360° perception, real-time 3D mapping, and onboard navigation — designed for operations where infrastructure is limited and reliability matters.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a href="#contact" className="px-6 py-3 bg-nato-accent text-white hover:bg-nato-accent/80 hover:scale-105 transition-all text-sm uppercase tracking-wider font-semibold">
                  Request a Pilot
                </a>
                <a href="#proof" className="px-6 py-3 border-2 border-nato-border text-nato-text hover:border-nato-accent hover:text-nato-accent hover:scale-105 transition-all text-sm uppercase tracking-wider font-semibold">
                  View Prototype
                </a>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-4 text-sm text-nato-text-dim pt-4"
              >
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-nato-accent rounded-full animate-pulse"></div>
                  Berlin, Germany
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-nato-accent rounded-full animate-pulse"></div>
                  Prototype validated
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-nato-accent rounded-full animate-pulse"></div>
                  Pilot partnerships open
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg relative overflow-hidden border border-nato-border hover:border-nato-accent transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-nato-accent/20">
                <img
                  src="/images/drone-hero.jpg"
                  alt="Tactical Drone"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-20 bg-nato-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">TECHNOLOGY</div>
            <h2 className="text-4xl font-bold mb-6 text-nato-text">Aerial Autonomy Platform</h2>
            <p className="text-lg text-nato-text-dim leading-relaxed mb-8">
              Skymeteors integrates sensing, localization, mapping, and planning into a low-latency onboard stack—built to operate in complex environments with degraded positioning and communications.
            </p>
            <div className="space-y-3">
              <div className="text-base font-semibold mb-3 text-nato-text">Designed for:</div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-3"
              >
                {[
                  'GPS-degraded or denied environments',
                  'Indoor / urban complexity',
                  'Time-critical operations and field constraints'
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-center gap-2 text-nato-text-dim"
                  >
                    <div className="w-1.5 h-1.5 bg-nato-accent rounded-full"></div>
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-nato-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">CORE CAPABILITIES</div>
            <h2 className="text-4xl font-bold mb-12 text-nato-text">Built for Resilience</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Eye,
                title: '360° Perception',
                description: 'Coverage-first awareness with LiDAR-centric sensing and complementary vision.'
              },
              {
                icon: MapPin,
                title: 'Real-Time Localization & Mapping',
                description: 'Live odometry and 3D reconstruction to support stability and navigation without GPS reliance.'
              },
              {
                icon: Workflow,
                title: 'Obstacle-Aware Autonomy',
                description: 'Onboard planning behaviors designed to react to changing environments in real time.'
              }
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.05, borderColor: 'rgba(74, 123, 167, 1)' }}
                transition={{ duration: 0.3 }}
                className="bg-nato-surface border border-nato-border p-8 hover:border-nato-accent transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-nato-accent/10 border-2 border-nato-accent/30 flex items-center justify-center mb-6">
                  <capability.icon className="w-6 h-6 text-nato-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-nato-text">{capability.title}</h3>
                <p className="text-nato-text-dim leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-nato-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">APPLICATIONS</div>
            <h2 className="text-4xl font-bold mb-12 text-nato-text">Use Cases</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                image: '/images/helicopter-rescue.jpg',
                icon: Search,
                title: 'Search & Rescue / Civil Protection',
                description: 'Reliable navigation and scene understanding when infrastructure is disrupted or unavailable.'
              },
              {
                image: '/images/bridge-infrastructure.jpg',
                icon: Building2,
                title: 'Critical Infrastructure Monitoring',
                description: 'Autonomous inspection and perimeter awareness for energy, industrial, and public facilities—built for repeatable, consistent data capture.'
              },
              {
                image: '/images/security-facility.jpg',
                icon: Shield,
                title: 'Security & Perimeter Monitoring',
                description: 'Resilient sensing and navigation for wide-area situational awareness and patrol workflows in complex sites.'
              }
            ].map((useCase, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -10, borderColor: 'rgba(74, 123, 167, 1)' }}
                transition={{ duration: 0.3 }}
                className="border border-nato-border overflow-hidden bg-nato-surface hover:border-nato-accent transition-all cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <useCase.icon className="w-5 h-5 text-nato-accent" />
                    <h3 className="text-xl font-bold text-nato-text">{useCase.title}</h3>
                  </div>
                  <p className="text-nato-text-dim">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Validation + Differentiators */}
      <section id="proof" className="py-20 bg-nato-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
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
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-nato-accent shrink-0 mt-0.5" />
                    <span className="text-nato-text-dim">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-nato-text-dim italic mt-8">
                We prioritize verifiable outputs over marketing claims.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">DIFFERENTIATORS</div>
              <h2 className="text-4xl font-bold mb-8 text-nato-text">Why Skymeteors</h2>
              <div className="space-y-6">
                {[
                  { icon: Cpu, title: 'Onboard-first', desc: 'Low-latency autonomy without cloud dependency' },
                  { icon: Shield, title: 'Resilience-driven', desc: 'Designed for degraded infrastructure and complex environments' },
                  { icon: Workflow, title: 'Integration-friendly', desc: 'Built to connect to established robotics and autopilot stacks' },
                  { icon: CheckCircle, title: 'Responsible innovation', desc: 'Aligned with European regulations and safety principles' }
                ].map((diff, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-nato-accent/10 border border-nato-accent/30 flex items-center justify-center shrink-0">
                      <diff.icon className="w-6 h-6 text-nato-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-nato-text">{diff.title}</h3>
                      <p className="text-nato-text-dim text-sm">{diff.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-nato-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">ABOUT</div>
            <h2 className="text-4xl font-bold mb-6 text-nato-text">Building Resilient Autonomy</h2>
            <p className="text-lg text-nato-text-dim leading-relaxed mb-12">
              Skymeteors is a Berlin-based autonomy startup building resilient aerial perception and navigation for demanding operational environments.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-6 bg-nato-surface rounded-lg border border-nato-border hover:border-nato-accent transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-nato-bg flex items-center justify-center text-2xl font-bold text-nato-accent border border-nato-border">
                JS
              </div>
              <div>
                <div className="font-bold text-lg text-nato-text">Jack Safia</div>
                <div className="text-sm text-nato-text-dim">Founder</div>
                <div className="text-sm text-nato-text-dim">Robotics, autonomy, and flight systems integration.</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-nato-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">GET STARTED</div>
              <h2 className="text-4xl font-bold mb-6 text-nato-text">Partner with Skymeteors</h2>
              <p className="text-lg text-nato-text-dim leading-relaxed mb-8">
                If you're evaluating autonomy for civil protection, infrastructure monitoring, or secure site operations, we're open to pilot discussions.
              </p>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-nato-text-dim cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-nato-accent" />
                  <span>info@skymeteors.com</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-nato-text-dim cursor-pointer"
                >
                  <MapPinIcon className="w-5 h-5 text-nato-accent" />
                  <span>Berlin, Germany</span>
                </motion.div>
              </div>
            </motion.div>

            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nato-bg border-t border-nato-border py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-4 gap-8 mb-8"
          >
            <div>
              <img
                src="/images/logo.jpg"
                alt="SKYMETEORS"
                className="h-[100px] w-auto mb-6"
              />
              <p className="text-sm text-nato-text-dim leading-relaxed">
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
            <div>
              <div className="text-xs uppercase tracking-widest text-nato-text-dim mb-4">LEGAL</div>
              <div className="space-y-2 text-sm">
                <a href="/imprint" className="block text-nato-text-dim hover:text-nato-accent transition-colors">Imprint</a>
                <a href="/privacy-policy" className="block text-nato-text-dim hover:text-nato-accent transition-colors">Privacy Policy</a>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-nato-border pt-8">
            <p className="text-xs text-nato-text-dim text-center">
              © {new Date().getFullYear()} Skymeteors. All rights reserved. | Made in Berlin, Germany 🇩🇪
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}