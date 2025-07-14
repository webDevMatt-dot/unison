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
import { AIMLServicesList } from "src/components/sections/serviceSections/AIMLServicesList";


export default function AIMachineLearningPage() {
  return (
    <Layout>
      <Head>
        <title>AI & Machine Learning | AAT Business Solutions</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-white text-gray-800 font-sans pt-6 px-4 md:px-6">
        {/* Hero Section */}
        <section className="pt-10 md:pt-14 pb-12 text-center px-4 md:px-6 mb-10 rounded-lg shadow-sm bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                AI & Machine Learning Solutions
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Transform your business with <strong className="font-semibold text-black">cutting-edge artificial intelligence and machine learning</strong>,
              driving innovation, efficiency, and data-driven decision-making.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
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
          {/* Left: Offerings */}
          <div className="md:w-2/3 w-full">
            <h2 id="offerings" className="text-2xl md:text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-indigo-200">
              Our Core AI & ML Offerings
            </h2>

              <AIMLServicesList />

            {/* Why Us */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black border-b-2 pb-2 border-indigo-200 mt-12">
              Why Partner with AAT Business Solutions?
            </h2>
            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              <p>We combine deep AI/ML know-how with your business goals to deliver solutions that actually work and bring ROI.</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong className="text-black">Experienced Team:</strong> Real-world engineers solving real-world problems.</li>
                <li><strong className="text-black">Tailored Solutions:</strong> No off-the-shelf gimmicks — just what fits your use case best.</li>
                <li><strong className="text-black">End-to-End Support:</strong> We guide you from idea to rollout to long-term scaling.</li>
                <li><strong className="text-black">Focus on ROI:</strong> We target efficiency, insight, and impact, not just hype.</li>
              </ul>
            </div>
          </div>

          {/* Right: Sticky CTA */}
          <Card className="w-full md:w-[320px] border border-gray-200 shadow-xl rounded-lg sticky md:top-28 self-start bg-white">
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black">Ready to Innovate with AI?</h3>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Unlock new possibilities and gain a competitive edge. Let&apos;s discuss how AI can transform your business.
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
    </Layout>
  );
}
