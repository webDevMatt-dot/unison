"use client";
import React from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import { Card, CardContent } from "src/components/ui/card";
import Layout from "src/components/ui/Layout";
import { ScheduleButton } from "src/components/ui/schedule";
import { LearnButton } from "src/components/ui/learn";
import { DownloadBrochureButton } from "src/components/ui/DownloadBrochureButton";
import { ContactInfo } from "src/components/ui/ContactInfo";
import { SecurityServicesList } from "src/components/sections/serviceSections/SecurityServicesList";
import { PartnersMarquee } from "src/components/ui/PartnersMarquee";

export default function CybersecurityServicesPage() {
  return (
    <Layout>
      <Head>
        <title>Cybersecurity Services | AAT Business Solutions</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-white text-gray-800 font-sans pt-6 px-4 md:px-6">
        {/* Hero Section */}
        <section className="pt-10 md:pt-14 pb-12 text-center px-4 md:px-6 mb-10 rounded-lg shadow-sm bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-800">
                Anti-Virus & Security Packages
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Protect your digital assets and ensure business continuity with our{" "}
              <strong className="font-semibold text-black">cybersecurity services</strong>, safeguarding your organization from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div>
                <ScheduleButton />
              </div>
              <div>
                <LearnButton />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Column */}
          <div className="md:w-2/3 w-full">
            <h2 id="offerings" className="text-2xl md:text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-red-200">
              Our Comprehensive Cybersecurity Offerings
            </h2>

              <SecurityServicesList />

            {/* Why Us Section */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black border-b-2 pb-2 border-red-200 mt-12">
              Why Partner with AAT for Anti-virus Solutions?
            </h2>
            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              <p>
                In today&apos;s interconnected world, robust cybersecurity is non-negotiable. AAT Business Solutions provides proactive and comprehensive security services designed to protect your most valuable assets, ensuring compliance and peace of mind.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong className="text-black">Proactive Defense:</strong> We anticipate and mitigate threats before they impact you.</li>
                <li><strong className="text-black">Certified Professionals:</strong> Our experts are credentialed and experienced.</li>
                <li><strong className="text-black">Tailored Solutions:</strong> Every business is different — your protection should be too.</li>
                <li><strong className="text-black">24/7 Vigilance:</strong> We never sleep, so you can.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Sticky CTA */}
          <Card className="w-full md:w-[320px] border border-gray-200 shadow-xl rounded-lg sticky md:top-28 self-start bg-white">
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black">
                  Secure Your Business Today
                </h3>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Don&apos;t wait for a breach. Get ahead of cyber threats with our expert security solutions.
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <div>
                  <ScheduleButton />
                </div>
                <div>
                  <DownloadBrochureButton />
                </div>
                <div>
                  <ContactInfo />
                </div>                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
        <PartnersMarquee />

    </Layout>
  );
}
