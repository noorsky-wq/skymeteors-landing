'use client';

import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-tactical-bg/95 backdrop-blur-md border-b border-tactical-border' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-tactical-accent flex items-center justify-center">
                <Activity className="w-5 h-5 text-tactical-bg" />
              </div>
              <span className="font-display font-bold text-slate-100 uppercase tracking-wider text-lg">
                AUTONOMOUS SYSTEMS
              </span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#capabilities" 
                className="text-sm uppercase tracking-wider text-slate-400 hover:text-tactical-accent transition-colors font-medium"
              >
                Capabilities
              </a>
              <a 
                href="#projects" 
                className="text-sm uppercase tracking-wider text-slate-400 hover:text-tactical-accent transition-colors font-medium"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 border border-tactical-accent text-tactical-accent hover:bg-tactical-accent hover:text-tactical-bg transition-all text-sm uppercase tracking-wider font-semibold"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
              <span className="w-full h-0.5 bg-tactical-accent"></span>
              <span className="w-full h-0.5 bg-tactical-accent"></span>
              <span className="w-full h-0.5 bg-tactical-accent"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Capabilities />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-tactical-bg border-t border-tactical-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-tactical-accent flex items-center justify-center">
                  <Activity className="w-5 h-5 text-tactical-bg" />
                </div>
                <span className="font-display font-bold text-slate-100 uppercase tracking-wider">
                  AUTONOMOUS SYSTEMS
                </span>
              </div>
              <p className="text-sm text-slate-500">
                Advanced aerial platforms for GPS-denied operations
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-slate-100 uppercase tracking-wider text-sm mb-4">
                Navigation
              </h4>
              <div className="space-y-2">
                <a href="#capabilities" className="block text-sm text-slate-400 hover:text-tactical-accent transition-colors">
                  Capabilities
                </a>
                <a href="#projects" className="block text-sm text-slate-400 hover:text-tactical-accent transition-colors">
                  Projects
                </a>
                <a href="#contact" className="block text-sm text-slate-400 hover:text-tactical-accent transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Technical Focus */}
            <div>
              <h4 className="font-display font-bold text-slate-100 uppercase tracking-wider text-sm mb-4">
                Core Technologies
              </h4>
              <div className="space-y-2 text-sm text-slate-500">
                <div>LiDAR SLAM Navigation</div>
                <div>Real-Time Computer Vision</div>
                <div>Autonomous Flight Control</div>
                <div>Sensor Fusion & EKF</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-tactical-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              © 2025 Autonomous Systems Research. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="px-3 py-1 bg-tactical-surface border border-tactical-border rounded text-slate-400 font-mono">
                M3: Vision Fusion ✓
              </span>
              <span className="px-3 py-1 bg-tactical-surface border border-tactical-accent/30 rounded text-tactical-accent font-mono animate-pulse">
                M4: Active Development
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
```

---

## 🎉 ALL FILES COMPLETE!

### ✅ What You Now Have:

**Root Files (6):**
1. ✅ package.json
2. ✅ tsconfig.json
3. ✅ tailwind.config.ts
4. ✅ postcss.config.js
5. ✅ next.config.js
6. ✅ .gitignore

**App Files (3):**
7. ✅ src/app/globals.css
8. ✅ src/app/layout.tsx
9. ✅ src/app/page.tsx

**Library (1):**
10. ✅ src/lib/constants.ts

**Components (5):**
11. ✅ src/components/Hero.tsx
12. ✅ src/components/Capabilities.tsx
13. ✅ src/components/TechStack.tsx
14. ✅ src/components/Projects.tsx
15. ✅ src/components/Contact.tsx

---

## 🚀 Next Steps:

1. **Commit all files to GitHub:**
```
   git add .
   git commit -m "feat: complete dark tactical autonomous systems portfolio"
   git push origin main
