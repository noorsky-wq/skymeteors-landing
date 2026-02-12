export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="px-6 py-28 border-b">
        <div className="max-w-6xl mx-auto">
          <p className="mono text-xs tracking-[0.2em] text-gray-500 uppercase">
            Berlin • European-built autonomy
          </p>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight max-w-4xl">
            Autonomy for environments where GPS fails.
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Skymeteors develops onboard aerial autonomy with 360° perception,
            real-time 3D mapping, and obstacle-aware navigation — engineered
            for operations where infrastructure is limited and reliability
            matters.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:info@skymeteors.com?subject=Pilot Request — Skymeteors"
              className="px-7 py-3 bg-[rgb(var(--accent))] text-white rounded-xl font-medium"
            >
              Request a Pilot
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border rounded-xl font-medium"
            >
              Contact
            </a>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            Prototype validated • Pilot partnerships open
          </div>
        </div>
      </section>


      {/* TECHNOLOGY */}
      <section id="technology" className="px-6 py-24 border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">
            Engineering autonomy from the sensor up.
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
            Skymeteors integrates sensing, localization, mapping, and planning
            into a low-latency onboard stack designed to operate in complex,
            GPS-degraded environments.
          </p>

          <div className="mt-14 grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg">360° Perception</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Coverage-first sensing architecture combining LiDAR-centric
                awareness and complementary vision systems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Real-Time Localization & Mapping
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Live odometry and 3D reconstruction enabling stable navigation
                without GPS reliance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Obstacle-Aware Autonomy
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Onboard planning logic designed to react in real time to dynamic
                environmental changes.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* USE CASES */}
      <section className="px-6 py-24 border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">
            Built for missions where reliability matters.
          </h2>

          <div className="mt-14 grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg">
                Search & Rescue / Civil Protection
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Reliable navigation and scene understanding when infrastructure
                is disrupted or unavailable.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Critical Infrastructure Monitoring
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Autonomous inspection and perimeter awareness for industrial,
                energy, and public facilities.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Security & Perimeter Monitoring
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Resilient sensing and navigation for wide-area situational
                awareness across complex operational sites.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* PROTOTYPE STATUS */}
      <section className="px-6 py-24 border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">
            Prototype Status
          </h2>

          <ul className="mt-10 space-y-4 text-gray-600 leading-relaxed max-w-3xl">
            <li>• GPS-denied localization and mapping validated in prototype testing</li>
            <li>• 360° sensing pipeline integrated for onboard awareness</li>
            <li>• Autopilot integration with real-time pose feed</li>
            <li>• Obstacle-aware navigation behaviors in active testing</li>
            <li>• Demonstrations and technical evidence available on request</li>
          </ul>

          <p className="mt-10 text-sm text-gray-500 max-w-3xl">
            Skymeteors develops autonomy technologies intended for civil
            protection, infrastructure resilience, and safety-oriented
            operations, aligned with European regulations and responsible-use
            principles.
          </p>
        </div>
      </section>


      {/* ABOUT */}
      <section className="px-6 py-24 border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">
            About Skymeteors
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
            Skymeteors is a Berlin-based autonomy startup building resilient
            aerial perception and navigation systems for demanding operational
            environments.
          </p>

          <div className="mt-10">
            <h3 className="font-semibold text-lg">Founder</h3>
            <p className="mt-2 text-gray-600">
              Jack Safia — Robotics, autonomy, and flight systems integration.
            </p>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">
            Request a Pilot Discussion
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
            If you are evaluating autonomy for civil protection, infrastructure
            monitoring, or secure site operations, we are open to pilot
            discussions.
          </p>

          <div className="mt-10">
            <a
              href="mailto:info@skymeteors.com"
              className="text-lg font-semibold underline"
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
