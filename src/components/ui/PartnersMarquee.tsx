"use client";
import React from "react";

const partners = [
  { src: "/avast.png", alt: "Avast" },
  { src: "/avg.jpg", alt: "AVG" },
  { src: "/bitdef.png", alt: "Bitdefender" },
  { src: "/mcafee.png", alt: "McAfee" },
  { src: "/oracle.jfif", alt: "Oracle" },
  { src: "/ibm.png", alt: "IBM" },
];

export function PartnersMarquee() {
  return (
    <div className="bg-gray-50 py-6 sm:py-8 overflow-hidden relative">
      <div className="flex w-fit animate-marquee absolute left-0 top-1/2 -translate-y-1/2">
        {[...partners, ...partners].map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            width={120}
            height={60}
            className="object-contain mx-6 transition duration-300"
            style={{ maxHeight: "60px" }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
