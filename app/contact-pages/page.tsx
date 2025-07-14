"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import Layout from "src/components/ui/Layout";
import { ScheduleButton } from "src/components/ui/schedule";
import { countryCodes } from "src/data/countryCodes";
import { SendMessageButton } from "src/components/ui/sendmessage";

export default function ContactPage() {
  const [selectedCode, setSelectedCode] = useState("+27");

  return (
    <Layout>
      <Head>
        <title>Contact Us | AAT Business Solutions</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-white text-gray-800 font-sans pt-10 px-4 md:px-6">
  {/* Hero Section */}
  <section className="py-12 md:py-16 text-center px-4 md:px-6 mb-10 rounded-lg shadow-sm bg-white">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Get in Touch with AAT Business Solutions
        </span>
      </h1>
      <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
        We&apos;d love to hear from you! Whether you have questions about our AI & Machine Learning services, need support, or want to discuss a project, our team is here to help.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center">
        
        <div><ScheduleButton /></div>
        <div><SendMessageButton /></div>
      </div>
    </div>
  </section>


        {/* Main Content */}
        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Contact Form */}
          <div className="md:w-2/3 w-full">
            <h2 id="contact-form" className="text-2xl md:text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-indigo-200">
              Send Us a Message
            </h2>

            <Card className="border border-gray-200 rounded-lg shadow-md mb-10">
              <CardContent className="p-6">
                <form
                  action="https://formspree.io/f/xanjvkeq"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="email@domain.com"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="flex gap-2">
                      <select
                        name="country_code"
                        value={selectedCode}
                        onChange={(e) => setSelectedCode(e.target.value)}
                        className="w-1/3 border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {countryCodes.map((c, i) => (
                          <option key={i} value={c.code}>
                            {c.label} ({c.code})
                          </option>
                        ))}
                      </select>
                        <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 812345678"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        onInput={(e) => {
                            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                        }}
                        className="w-2/3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Type your message here..."
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button type="submit" className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 text-sm md:text-base rounded-md shadow-md hover:shadow-lg transition duration-300">
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right: Sticky CTA */}
            <Card className="w-full md:w-[320px] border border-gray-200 shadow-xl rounded-lg sticky md:top-28 self-start bg-white">
            <CardContent className="p-6 flex flex-col h-full">
                <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black">
                    Need a Quick Reply?
                </h3>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                    Call, WhatsApp, or email us and we’ll respond as soon as possible.
                </p>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                <a href="mailto:admin@aatsolutions.co.za" className="w-full">
                    <Button variant="outline" className="w-full py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    📧 Email Us
                    </Button>
                </a>
                <a href="tel:+27816515179" className="w-full">
                    <Button variant="outline" className="w-full py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    📞 Call Now
                    </Button>
                </a>
                <a
                    href="https://wa.me/27816515179?text=Hi%20AAT%20Team!%20I%20have%20a%20question%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <Button variant="outline" className="w-full py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    💬 WhatsApp Us
                    </Button>
                </a>
                </div>

                <div className="mt-5">
                
                </div>
            </CardContent>
            </Card>

        </div>
      </div>
    </Layout>
  );
}
