'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Imprint() {
  return (
    <div className="min-h-screen bg-nato-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nato-bg/95 backdrop-blur-md border-b border-nato-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold tracking-wide text-nato-text">
              SKYMETEORS
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm text-nato-text-dim hover:text-nato-accent transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-bold mb-8 text-nato-text">Impressum</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-nato-text-dim">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">Information according to § 5 TMG</h2>
              <p>
                Skymeteors UG i.G.<br />
                [Düsseldorfer Str. 67]<br />
                [10719] Berlin<br />
                Germany
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">Contact</h2>
              <p>
                Email: info@skymeteors.com<br />
                {/* Phone: [Add when available] */}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">Represented by</h2>
              <p>Jack Safia, Managing Director</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">Register Entry</h2>
              <p>
                The company is currently being established (in Gründung).<br />
                Registration at: Amtsgericht Charlottenburg, Berlin<br />
                Registration is pending.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">VAT ID</h2>
              <p>
                VAT identification number will be added upon receipt from the tax office.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">Person responsible for editorial content</h2>
              <p>
                Jack Safia<br />
                [Address same as above]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">EU Dispute Resolution</h2>
              <p>
                The European Commission provides a platform for online dispute resolution (ODR):
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-nato-accent hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Our email address can be found above in the imprint.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">Dispute resolution proceedings in front of a consumer arbitration board</h2>
              <p>
                We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">Liability for Contents</h2>
              <p>
                As service providers, we are liable for own contents of these websites according to Paragraph 7, Sect. 1 German Telemedia Act (TMG).
                However, according to Paragraphs 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor
                submitted or stored information or to search for evidences that indicate illegal activities.
              </p>
              <p className="mt-2">
                Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only
                possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get
                knowledge of them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">Liability for Links</h2>
              <p>
                Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot
                guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}