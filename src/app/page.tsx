import Image from "next/image";

const NAV = [
  { label: "TECHNOLOGY", href: "#technology" },
  { label: "USE CASES", href: "#use-cases" },
  { label: "PROOF", href: "#proof" },
  { label: "CONTACT", href: "#contact" },
];

export default function Home() {
  return (
    <main className="grid-bg min-h-screen">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/85 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-semibold tracking-tight">
              SKYMETEORS
            </div>

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
              href="mailto:info@skymeteors.com?subject=Request%20a%20Pilot%20—%20Skymeteors"
              className="mono text-xs tracking-[0.22em] rounded-md bg-[rgb(var(--accent))] px-4 py-3 text-white hover:opacity-95"
            >
              REQUEST A PILOT
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mono text-xs tracking-[0.22em] text-[rgb(var(--muted))]">
            AERIAL AUTONOMY PLATFORM
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.02]">
                Autonomy for
                <br />
                environments
                <br />
                where GPS fails.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[rgb(var(--muted))]">
                Skymeteors develops European-built aerial autonomy with 360°
                perception, real-time 3D mapping, and onboard navigation —
                designed for operations where infrastructure is limited and
                reliability matters.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:info@skymeteors.com?subject=Request%20a%20Pilot%20—%20Skymeteors"
                  className="mono text-xs tracking-[0.22em] inline-flex items-center gap-3 rounded-md bg-[rgb(var(--accent))] px-6 py-4 text-white hover:opacity-95"
                >
                  REQUEST A PILOT <span className="text-base">›</span>
                </a>

                <a
                  href="#proof"
                  className="mono text-xs tracking-[0.22em] inline-flex items-center gap-3 rounded-md border border-[rgb(var(--border))] bg-white px-6 py-4 text-[rgb(var(--text))] hover:bg-slate-50"
                >
                  VIEW PROTOTYPE
                </a>
              </div>

              {/* Small stats row */}
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                <Stat label="Berlin, Germany" />
                <Stat label="Prototype validated" />
                <Stat label="Pilot partnerships open" />
              </div>
            </div>

            {/* Right image panel */}
            <div className="lg:justify-self-end">
              <div className="relative overflow-hidden rounded-lg border border-[rgb(var(--border))] bg-white shadow-sm">
                {/* If you don’t have a hero image yet, keep the placeholder */}
                <Image
                  src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1600&q=80"
                  alt="Skymeteors prototype"
                  width={900}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                />

                {/* overlay “HUD” text to mimic the Emergent style */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="mono absolute left-4 top-4 text-[10px] tracking-[0.22em] text-slate-700/80">
                    SYS:ACTIVE
                  </div>
                  <div className="mono absolute right-4 top-4 text-[10px] tracking-[0.22em] text-slate-700/80">
                    52.5200°N
                  </div>
                  <div className="mono absolute left-4 bottom-4 text-[10px] tracking-[0.22em] text-slate-700/80">
                    ALT:120M
                  </div>
                  <div className="mono absolute right-4 bottom-4 text-[10px] tracking-[0.22em] text-slate-700/80">
                    13.4050°E
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Below hero section divider */}
          <div className="mt-16 border-t border-[rgb(var(--border))]" />
        </div>
      </section>

      {/* The rest of your sections can stay, but here’s clean anchors so your nav works */}
      <section id="technology" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">Technology</h2>
          <p className="mt-4 text-[rgb(var(--muted))] max-w-3xl">
            360° perception, real-time localization & mapping, and obstacle-aware autonomy — executed onboard.
          </p>
        </div>
      </section>

      <section id="use-cases" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">Use Cases</h2>
          <p className="mt-4 text-[rgb(var(--muted))] max-w-3xl">
            Search & Rescue / Civil Protection • Critical Infrastructure Monitoring • Security & Perimeter Monitoring
          </p>
        </div>
      </section>

      <section id="proof" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">Proof</h2>
          <p className="mt-4 text-[rgb(var(--muted))] max-w-3xl">
            Prototype status and technical evidence available on request.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 pb-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 text-[rgb(var(--muted))] max-w-3xl">
            Email:{" "}
            <a className="underline" href="mailto:info@skymeteors.com">
              info@skymeteors.com
            </a>{" "}
            • Berlin, Germany
          </p>
        </div>
      </section>
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
