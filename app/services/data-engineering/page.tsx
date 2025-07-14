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
import { DataEngineeringServicesList } from "src/components/sections/serviceSections/DataEngineeringServicesList";


export default function DataEngineeringSciencePage() {
  return (
    <Layout>
      <Head>
        <title>Data Engineering & Science | AAT Business Solutions</title>
      </Head>

      {/* Navbar */}
      <Navbar />
      
      <div className="min-h-screen bg-white text-gray-800 font-sans pt-6 px-4 md:px-6">
        {/* Hero Section */}
        <section className="pt-10 md:pt-14 pb-12 text-center px-4 md:px-6 mb-10 rounded-lg shadow-sm bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                Data Engineering & Science Solutions
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Unlock the true potential of your data with robust <strong className="font-semibold text-black">data engineering and advanced data science</strong> services, driving insights and informed decision-making.
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

        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Column */}
          <div className="md:w-2/3 w-full">
            <h2 id="offerings" className="text-2xl md:text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-teal-200">
              Our Core Data Offerings
            </h2>

              <DataEngineeringServicesList />

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black border-b-2 pb-2 border-teal-200 mt-12">
              Why Partner with AAT for Data Solutions?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                At AAT Business Solutions, we transform complex data challenges into actionable opportunities. Our holistic approach ensures your data infrastructure is efficient, secure, and capable of delivering profound insights that propel your business forward.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>
                  <strong className="text-black">Expertise:</strong> Our team comprises seasoned data engineers and scientists with a deep understanding of various industries.
                </li>
                <li>
                  <strong className="text-black">Scalable Solutions:</strong> We build future-proof data architectures that grow with your business needs.
                </li>
                <li>
                  <strong className="text-black">Actionable Insights:</strong> We focus on translating raw data into clear, strategic intelligence for decision-makers.
                </li>
                <li>
                  <strong className="text-black">Security & Compliance:</strong> Your data&apos;s safety and regulatory adherence are our top priorities.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Sticky CTA */}
          <Card
            className="w-full md:w-[320px] border border-gray-200 shadow-xl rounded-lg self-start bg-white
              sticky md:top-28 md:sticky relative"
          >
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black">Ready to Transform Your Data?</h3>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Harness the power of your information for strategic growth. Contact us for a data solution consultation.
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
