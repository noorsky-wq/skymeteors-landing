'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <h1 className="text-5xl font-bold mb-8 text-nato-text">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8 text-nato-text-dim">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">1. Data Protection at a Glance</h2>
              
              <h3 className="text-xl font-bold mb-3 text-nato-text mt-6">General Information</h3>
              <p>
                The following information provides a simple overview of what happens to your personal data when you visit this website. 
                Personal data is any data that can personally identify you.
              </p>

              <h3 className="text-xl font-bold mb-3 text-nato-text mt-6">Data Collection on This Website</h3>
              <h4 className="text-lg font-bold mb-2 text-nato-text mt-4">Who is responsible for data collection on this website?</h4>
              <p>
                Data processing on this website is carried out by the website operator. You can find their contact details in the section 
                &quot;Information about the responsible party&quot; in this privacy policy.
              </p>

              <h4 className="text-lg font-bold mb-2 text-nato-text mt-4">How do we collect your data?</h4>
              <p>
                Your data is collected when you provide it to us. This could be data that you enter into a contact form, for example.
              </p>
              <p className="mt-2">
                Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily 
                technical data (e.g., internet browser, operating system, or time of page access).
              </p>

              <h4 className="text-lg font-bold mb-2 text-nato-text mt-4">What do we use your data for?</h4>
              <p>
                Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.
              </p>

              <h4 className="text-lg font-bold mb-2 text-nato-text mt-4">What rights do you have regarding your data?</h4>
              <p>
                You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge 
                at any time. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, 
                you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of 
                your personal data under certain circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">2. General Information and Mandatory Information</h2>
              
              <h3 className="text-xl font-bold mb-3 text-nato-text mt-6">Data Protection</h3>
              <p>
                The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially 
                and in accordance with statutory data protection regulations and this privacy policy.
              </p>

              <h3 className="text-xl font-bold mb-3 text-nato-text mt-6">Information about the responsible party</h3>
              <p>
                The responsible party for data processing on this website is:
              </p>
              <p className="mt-4">
                Skymeteors GmbH i.G.<br />
                [Düsseldorfer Str.67]<br />
                [10719] Berlin<br />
                Germany
              </p>
              <p className="mt-4">
                Email: info@skymeteors.com
              </p>
              <p className="mt-4 text-sm">
                The company is currently in the process of being established (in Gruendung).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">3. Data Collection on This Website</h2>
              
              <h3 className="text-xl font-bold mb-3 text-nato-text mt-6">Contact Form</h3>
              <p>
                If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provided there, 
                will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We will not share this data 
                without your consent.
              </p>
              <p className="mt-2">
                The processing of this data is based on Art. 6 para. 1 lit. b GDPR, if your request is related to the performance of a contract 
                or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate 
                interest in the effective processing of the inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent 
                (Art. 6 para. 1 lit. a GDPR) if this has been requested.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">4. Your Rights</h2>
              <p>
                You have the following rights with regard to personal data concerning you:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Right to information (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object (Art. 21 GDPR)</li>
                <li>Right to withdraw consent (Art. 7 para. 3 GDPR)</li>
                <li>Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-nato-text">5. Data Security</h2>
              <p>
                We use appropriate technical and organizational security measures to protect your data against accidental or intentional manipulation, 
                partial or complete loss, destruction, or unauthorized access by third parties. Our security measures are continuously improved in 
                line with technological developments.
              </p>
            </section>

            <section className="mt-12">
              <p className="text-sm">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}