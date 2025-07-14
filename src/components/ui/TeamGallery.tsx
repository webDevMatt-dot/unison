"use client";
import React from "react";
import Image from "next/image";
import "./team-gallery.css"; 

export function TeamGallery() {
  const teamImages = [
    { src: "/profile.png", alt: "Joe Mudangwe", name: "Joe Mudangwe", prof: "SAP Expert" },
    { src: "/profile.png", alt: "Trust Chuma", name: "Trust Chuma", prof: "SAP" },
    { src: "/profile.png", alt: "Kudakwashe Mudangwe", name: "Kudakwashe Mudangwe", prof: "AI & Machine Learning" },
    { src: "/profile.png", alt: "Tadiwa Mudangwe", name: "Tadiwa Mudangwe", prof: "Data Engineering" },
    { src: "/profile.png", alt: "Matthew Luis", name: "Matthew Luis", prof: "Software Engineer" },
    { src: "/profile.png", alt: "Uncle Farai", name: "Uncle Farai", prof: "Python Expert" },
  ];

  return (
    <section className="w-full py-12 bg-gradient-to-r from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Meet Our Expert Team</h2>
      </div>

      {/* Marquee Container */}
      <div className="overflow-hidden relative">
        <div className="flex w-max animate-marquee gap-8 px-4">
          {[...teamImages, ...teamImages].map((member, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 p-4 w-[200px] flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-inner mb-3">
                <Image
                  src={member.src}
                  alt={member.alt}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <p className="font-semibold text-sm text-gray-800 text-center">{member.name}</p>
              <p className="text-xs text-gray-500 text-center">{member.prof}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
