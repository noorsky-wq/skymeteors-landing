export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="relative px-6 py-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600 opacity-20 blur-[160px]" />

        <div className="relative max-w-6xl mx-auto">
          <p className="mono text-xs tracking-[0.25em] text-gray-400 uppercase">
            Berlin • European-built autonomy
          </p>

          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight max-w-4xl leading-tight">
            Autonomy for environments where GPS fails.
          </h1>

          <p className="mt-8 text-lg text-gray-400 max-w-3xl leading-relaxed">
            Skymeteors develops onboard aerial autonomy with 360° perception,
            real-time 3D mapping, and obstacle-aware navigation — engineered
            for operations where infrastructure is limited and reliability
            defines mission success.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:info@skymeteors.com"
              className="px-8 py-4 bg-[rgb(var(--accent))] rounded-xl font-medium shadow-lg shadow-blue-900/40 transition hover:scale-[1.03]"
            >
              Request a Pilot
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 rounded-xl font-medium transition hover:border-blue-500"
            >
              Contact
            </a>
          </div>

          <div className="mt-14 text-sm text-gray-500">
            Prototype validated • Pilot partnerships open
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* TECHNOLOGY */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">
            Engineering autonomy from the sensor up.
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl">
            An integrated onboard stack combining sensing, localization,
            mapping, and adaptive planning for complex GPS-degraded environments.
          </p>

          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            <div className="card p-6 rounded-2xl">
              <h3 className="font-semibold text-lg">360° Perception</h3>
              <p className="mt-3 text-gray-400">
                LiDAR-centric awareness combined with complementary vision
                systems for full environmental coverage.
              </p>
            </div>

            <div className="card p-6 rounded-2xl">
              <h3 className="font-semibold text-lg">
                Real-Time Localization & Mapping
              </h3>
              <p className="mt-3 text-gray-400">
                Live odometry and 3D reconstruction enabling stable
                navigation without GPS reliance.
              </p>
            </div>

            <div className="card p-6 rounded-2xl">
              <h3 className="font-semibold text-lg">
                Obstacle-Aware Autonomy
              </h3>
              <p className="mt-3 text-gray-400">
                Onboard planning logic reacting in real time to dynamic
                operational environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* USE CASES */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">
            Built for missions where reliability matters.
          </h2>

          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            <div className="card p-6 rounded-2xl">
              <h3 className="font-semibold text-lg">
                Search & Rescue / Civil Protection
              </h3>
              <p className="mt-3 text-gray-400">
                Reliable navigation and situational awareness when
                infrastructure is disrupted or unavailable.
              </p>
            </div>

            <div className="card p-6 rounded-2xl">
              <h3 className="font-semibold text-lg">
                Critical Infrastructure Monitoring
              </h3>
              <p className="mt-3 text-gray-400">
                Autonomous inspection and perimeter awareness for
                industrial and energy facilities.
              </p>
            </div>

            <div className="card p-6 rounded-2xl">
              <h3 className="font-semibold text-lg">
                Security & Perimeter Monitoring
              </h3>
              <p className="mt-3 text-gray-400">
                Wide-area situational awareness across complex operational sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FOOTER CTA */}
      <section id="contact" className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">
            Request a Pilot Discussion
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl">
            If you are evaluating autonomy for civil protection,
            infrastructure monitoring, or secure site operations,
            we are open to pilot discussions.
          </p>

          <div className="mt-10">
            <a
              href="mailto:info@skymeteors.com"
              className="text-lg font-semibold text-blue-400"
            >
              info@skymeteors.com
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Berlin, Germany
          </div>
        </div>
      </section>

    </main>
  );
}
