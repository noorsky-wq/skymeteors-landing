import {
  EyeIcon,
  PinIcon,
  NodesIcon,
  CheckIcon,
  ChipIcon,
  ShieldIcon,
  PlaneIcon,
  MailIcon,
  LocationIcon,
} from "@/components/Icons";

const NAV = [
  { label: "TECHNOLOGY", href: "#technology" },
  { label: "USE CASES", href: "#use-cases" },
  { label: "PROOF", href: "#proof" },
  { label: "CONTACT", href: "#contact" },
];

export default function Home() {
  return (
    <main className="grid-bg min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-semibold tracking-tight">SKYMETEORS</div>

            <nav className="hidden md:flex items-center gap-10">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="mono text-xs tracking-[0.22em] text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="mono text-xs tracking-[0.22em] rounded-md bg-[rgb(var(--accent))] px-4 py-3 text-white hover:opacity-95"
            >
              REQUEST A PILOT
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-20 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="kicker mono">AERIAL AUTONOMY PLATFORM</div>

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.02]">
                Autonomy for
                <br />
                environments
                <br />
                where GPS fails.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[rgb(var(--muted))]">
                Skymeteors develops European-built aerial autonomy with 360° perception,
                real-time 3D mapping, and onboard navigation — designed for operations
                where infrastructure is limited and reliability matters.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="btn-primary mono text-xs tracking-[0.22em] inline-flex items-center gap-3 rounded-md px-6 py-4"
                >
                  REQUEST A PILOT <span className="text-base">›</span>
                </a>

                <a
                  href="#proof"
                  className="btn-secondary mono text-xs tracking-[0.22em] inline-flex items-center gap-3 rounded-md px-6 py-4"
                >
                  VIEW PROTOTYPE
                </a>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                <Stat label="Berlin, Germany" />
                <Stat label="Prototype validated" />
                <Stat label="Pilot partnerships open" />
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="relative overflow-hidden rounded-lg border border-[rgb(var(--border))] bg-white shadow-sm">
                {/* Use your own image later: put it in /public/hero.jpg */}
                <img
                  src="https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&w=1600&q=80"
                  alt="Skymeteors aerial platform"
                  className="h-auto w-full object-cover"
                />
                {/* HUD overlay like screenshot */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="mono absolute left-4 top-4 text-[10px] tracking-[0.22em] text-slate-800/75">
                    SYS:ACTIVE
                  </div>
                  <div className="mono absolute right-4 top-4 text-[10px] tracking-[0.22em] text-slate-800/75">
                    52.5200°N
                  </div>
                  <div className="mono absolute left-4 bottom-4 text-[10px] tracking-[0.22em] text-slate-800/75">
                    ALT:120M
                  </div>
                  <div className="mono absolute right-4 bottom-4 text-[10px] tracking-[0.22em] text-slate-800/75">
                    13.4050°E
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-[rgb(var(--border))]" />
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="section px-6">
        <div className="mx-auto max-w-6xl">
          <div className="kicker mono">TECHNOLOGY</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">Aerial Autonomy Platform</h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[rgb(var(--muted))]">
            Skymeteors integrates sensing, localization, mapping, and planning into a low-latency
            onboard stack—built to operate in complex environments with degraded positioning and communications.
          </p>

          <div className="mt-12">
            <div className="font-semibold">Designed for:</div>
            <ul className="mt-4 space-y-2 text-[rgb(var(--muted))]">
              <li>• GPS-degraded or denied environments</li>
              <li>• Indoor / urban complexity</li>
              <li>• Time-critical operations and field constraints</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-border" />

      {/* CORE CAPABILITIES */}
      <section className="section px-6">
        <div className="mx-auto max-w-6xl">
          <div className="kicker mono">CORE CAPABILITIES</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">Built for Resilience</h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <Capability
              sys="SYS-01"
              icon={<EyeIcon className="h-5 w-5 text-[rgb(var(--accent))]" />}
              title="360° Perception"
              desc="Coverage-first awareness with LiDAR-centric sensing and complementary vision."
            />
            <Capability
              sys="SYS-02"
              icon={<PinIcon className="h-5 w-5 text-[rgb(var(--accent))]" />}
              title="Real-Time Localization & Mapping"
              desc="Live odometry and 3D reconstruction to support stability and navigation without GPS reliance."
              middle
            />
            <Capability
              sys="SYS-03"
              icon={<NodesIcon className="h-5 w-5 text-[rgb(var(--accent))]" />}
              title="Obstacle-Aware Autonomy"
              desc="Onboard planning behaviors designed to react to changing environments in real time."
            />
          </div>
        </div>
      </section>

      <div className="section-border" />

      {/* USE CASES */}
      <section id="use-cases" className="section px-6">
        <div className="mx-auto max-w-6xl">
          <div className="kicker mono">APPLICATIONS</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">Use Cases</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <UseCaseCard
              img="https://images.unsplash.com/photo-1518384401463-d3876163c195?auto=format&fit=crop&w=1600&q=80"
              icon={<PlaneIcon className="h-5 w-5 text-[rgb(var(--accent))]" />}
              title="Search & Rescue / Civil Protection"
              desc="Reliable navigation and scene understanding when infrastructure is disrupted or unavailable."
            />
            <UseCaseCard
              img="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80"
              icon={<ChipIcon className="h-5 w-5 text-[rgb(var(--accent))]" />}
              title="Critical Infrastructure Monitoring"
              desc="Autonomous inspection and perimeter awareness for energy, industrial, and public facilities—built for repeatable, consistent data capture."
            />
            <UseCaseCard
              img="https://images.unsplash.com/photo-1520975682031-ae3f1f1b05c8?auto=format&fit=crop&w=1600&q=80"
              icon={<ShieldIcon className="h-5 w-5 text-[rgb(var(--accent))]" />}
              title="Security & Perimeter Monitoring"
              desc="Resilient sensing and navigation for wide-area situational awareness and patrol workflows in complex sites."
              accentLine
            />
          </div>
        </div>
      </section>

      <div className="section-border" />

      {/* VALIDATION + DIFFERENTIATORS */}
      <section id="proof" className="section px-6">
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2">
          <div>
            <div className="kicker mono">VALIDATION</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Prototype Status</h2>

            <ul className="mt-10 space-y-5 text-[rgb(var(--muted))]">
              <CheckRow text="GPS-denied localization and mapping validated in prototype testing" />
              <CheckRow text="360° sensing pipeline integrated for onboard awareness" />
              <CheckRow text="Autopilot integration with real-time pose feed (prototype)" />
              <CheckRow text="Obstacle-aware navigation behaviors (active testing)" />
              <CheckRow text="Demonstrations and technical evidence available on request" />
            </ul>

            <p className="mt-10 italic text-[rgb(var(--muted))]">
              We prioritize verifiable outputs over marketing claims.
            </p>
          </div>

          <div>
            <div className="kicker mono">DIFFERENTIATORS</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Why Skymeteors</h2>

            <div className="mt-10 space-y-8">
              <WhyRow
                icon={<ChipIcon className="h-6 w-6 text-[rgb(var(--accent))]" />}
                title="Onboard-first"
                desc="Low-latency autonomy without cloud dependency"
              />
              <WhyRow
                icon={<ShieldIcon className="h-6 w-6 text-[rgb(var(--accent))]" />}
                title="Resilience-driven"
                desc="Designed for degraded infrastructure and complex environments"
              />
              <WhyRow
                icon={<PlaneIcon className="h-6 w-6 text-[rgb(var(--accent))]" />}
                title="Integration-friendly"
                desc="Built to connect to established robotics and autopilot stacks"
              />
              <WhyRow
                icon={<CheckIcon className="h-6 w-6 text-[rgb(var(--accent))]" />}
                title="Responsible innovation"
                desc="Aligned with European regulations and safety principles"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-border" />

      {/* ABOUT */}
      <section className="section px-6">
        <div className="mx-auto max-w-6xl">
          <div className="kicker mono">ABOUT</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">Building Resilient Autonomy</h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[rgb(var(--muted))]">
            Skymeteors is a Berlin-based autonomy startup building resilient aerial perception and
            navigation for demanding operational environments.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <div className="h-12 w-12 rounded-full border border-[rgb(var(--border))] bg-white flex items-center justify-center font-semibold text-[rgb(var(--muted))]">
              JS
            </div>
            <div>
              <div className="font-semibold">Jack Safia</div>
              <div className="text-[rgb(var(--muted))]">Founder</div>
              <div className="text-[rgb(var(--muted))]">
                Robotics, autonomy, and flight systems integration.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-border" />

      {/* CONTACT */}
      <section id="contact" className="section px-6">
        <div className="mx-auto max-w-6xl grid gap-14 lg:grid-cols-2">
          <div>
            <div className="kicker mono">GET STARTED</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Partner with Skymeteors</h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[rgb(var(--muted))]">
              If you're evaluating autonomy for civil protection, infrastructure monitoring, or secure site operations,
              we're open to pilot discussions.
            </p>

            <div className="mt-10 space-y-5 text-[rgb(var(--muted))]">
              <div className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-[rgb(var(--accent))]" />
                <a className="underline" href="mailto:info@skymeteors.com">info@skymeteors.com</a>
              </div>
              <div className="flex items-center gap-3">
                <LocationIcon className="h-5 w-5 text-[rgb(var(--accent))]" />
                <div>Berlin, Germany</div>
              </div>
            </div>
          </div>

          {/* Form (front-end only; later we wire to Formspree/Resend) */}
          <div className="card rounded-lg p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — your request is noted. Email info@skymeteors.com to follow up.");
              }}
            >
              <div className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Name *</label>
                    <input className="input mt-2" required placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email *</label>
                    <input className="input mt-2" required type="email" placeholder="you@company.com" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Company / Organization</label>
                  <input className="input mt-2" placeholder="Optional" />
                </div>

                <div>
                  <label className="text-sm font-medium">Use Case *</label>
                  <input className="input mt-2" required placeholder="e.g., Search & Rescue, Infrastructure Monitoring" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Operating Environment</label>
                    <input className="input mt-2" placeholder="e.g., Indoor, Urban, Industrial site" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Evaluation Timeline</label>
                    <input className="input mt-2" placeholder="e.g., Q1 2025, Immediate" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Additional Details</label>
                  <textarea className="input mt-2 min-h-[120px]" placeholder="Tell us more about your requirements..." />
                </div>

                <button className="btn-primary mono text-xs tracking-[0.22em] rounded-md px-6 py-4">
                  REQUEST A PILOT
                </button>

                <div className="text-xs text-[rgb(var(--muted))]">
                  Include your use case, operating environment, and evaluation timeline.
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 bg-[rgb(var(--footer))] text-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">SKYMETEORS</div>
            <p className="mt-4 text-slate-300 leading-relaxed">
              European-built aerial autonomy for demanding operational environments.
            </p>
          </div>

          <div>
            <div className="mono text-xs tracking-[0.22em] text-slate-400">NAVIGATION</div>
            <div className="mt-4 space-y-2 text-slate-300">
              <a className="block hover:text-white" href="#technology">Technology</a>
              <a className="block hover:text-white" href="#use-cases">Use Cases</a>
              <a className="block hover:text-white" href="#proof">Proof</a>
              <a className="block hover:text-white" href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <div className="mono text-xs tracking-[0.22em] text-slate-400">CONTACT</div>
            <div className="mt-4 space-y-2 text-slate-300">
              <div>info@skymeteors.com</div>
              <div>Berlin, Germany</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-3 text-[rgb(var(--muted))]">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
      <div className="text-sm leading-snug">{label}</div>
    </div>
  );
}

function Capability({
  sys,
  icon,
  title,
  desc,
  middle,
}: {
  sys: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  middle?: boolean;
}) {
  return (
    <div className={`relative ${middle ? "md:px-8 md:border-x md:border-[rgb(var(--border))]" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="h-12 w-12 rounded-md border border-[rgb(var(--border))] bg-white flex items-center justify-center">
          {icon}
        </div>
        <div className="mono text-xs tracking-[0.22em] text-[rgb(var(--muted))]">{sys}</div>
      </div>
      <div className="mt-8 text-xl font-semibold">{title}</div>
      <div className="mt-4 text-[rgb(var(--muted))] leading-relaxed">{desc}</div>
    </div>
  );
}

function UseCaseCard({
  img,
  icon,
  title,
  desc,
  accentLine,
}: {
  img: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  accentLine?: boolean;
}) {
  return (
    <div className="card overflow-hidden rounded-lg">
      <div className="h-44 w-full overflow-hidden bg-slate-100">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className={`h-[3px] ${accentLine ? "bg-[rgb(var(--accent))]" : "bg-transparent"}`} />

      <div className="p-6">
        <div className="flex items-center gap-3 text-[rgb(var(--accent))]">
          {icon}
        </div>
        <div className="mt-4 text-lg font-semibold">{title}</div>
        <div className="mt-3 text-[rgb(var(--muted))] leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

function CheckRow({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-4">
      <div className="mt-1 h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
        <CheckIcon className="h-4 w-4" />
      </div>
      <div className="leading-relaxed">{text}</div>
    </li>
  );
}

function WhyRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="h-12 w-12 rounded-md border border-[rgb(var(--border))] bg-white flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="mt-1 text-[rgb(var(--muted))] leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}
