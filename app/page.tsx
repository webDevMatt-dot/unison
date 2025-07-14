"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import { Footer } from "src/components/ui/Footer";
import { HeroSection } from "src/components/sections/HeroSection";
import { ServicesSection } from "src/components/sections/ServicesSection";
import { WhyChooseUs } from "src/components/sections/WhyChooseUs";
import { CaseStudies } from "src/components/sections/CaseStudies";
import { CallToAction } from "src/components/sections/CallToAction";
import { PartnersMarquee } from "src/components/ui/PartnersMarquee";
import { Loader } from "src/components/ui/Loader";

export default function AATBusinessSolutions() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800); // ⏳ Adjust duration here (ms)

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="font-sans text-gray-800">
      <Head>
        <title>AAT Business Solutions</title>
        <meta
          name="description"
          content="Leading provider of AI & Machine Learning solutions, Data Engineering, SAP implementations, and Cybersecurity Services."
        />
      </Head>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <CaseStudies />
      <CallToAction />
      <PartnersMarquee />
      <Footer />
    </div>
  );
}
