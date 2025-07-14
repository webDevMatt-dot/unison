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
import { SAPServicesList } from "src/components/sections/serviceSections/SAPServicesList";

export default function SAPSolutionsPage() {
  return (
    <Layout>
      <Head>
        <title>SAP Solutions | AAT Business Solutions</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      <div className="min-h-screen bg-white text-gray-800 font-sans pt-6 px-4 md:px-6">
        <section className="pt-10 md:pt-14 pb-12 text-center px-4 md:px-6 mb-10 rounded-lg shadow-sm bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                SAP Solutions & Digital Transformation
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Streamline your business operations and maximize efficiency with our comprehensive <strong className="font-semibold text-black">SAP solutions</strong>, tailored to drive your digital transformation journey.
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
          <div className="md:w-2/3 w-full">
            <h2 id="offerings" className="text-2xl md:text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-indigo-200">
              Our Comprehensive SAP Offerings
            </h2>

              <SAPServicesList />

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black border-b-2 pb-2 border-indigo-200 mt-12">
              Why Partner with AAT for SAP Solutions?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                AAT Business Solutions stands out as your trusted SAP partner. Our certified consultants combine deep technical expertise with a profound understanding of industry best practices to deliver SAP solutions that truly transform your business, ensuring efficiency and measurable growth.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>
                  <strong className="text-black">Certified Experts:</strong> Our team consists of highly skilled and certified SAP consultants.
                </li>
                <li>
                  <strong className="text-black">Proven Methodologies:</strong> We follow industry-leading best practices for successful project delivery.
                </li>
                <li>
                  <strong className="text-black">Holistic Approach:</strong> From strategy to implementation and ongoing support, we cover all aspects of your SAP journey.
                </li>
                <li>
                  <strong className="text-black">Business-Centric Focus:</strong> Our solutions are designed to align with and accelerate your specific business objectives.
                </li>
              </ul>
            </div>
          </div>

          <Card
            className="w-full md:w-[320px] border border-gray-200 shadow-xl rounded-lg self-start bg-white sticky md:top-28 md:sticky relative"
          >
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black">Ready to Optimize with SAP?</h3>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Streamline your operations and enhance efficiency. Contact us for a specialized SAP consultation.
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
