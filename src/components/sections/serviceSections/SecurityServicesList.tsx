import React from "react";
import { Card, CardContent } from "src/components/ui/card";

const services = [
  {
    emoji: "🔍",
    title: "Vulnerability Assessment",
    description: "Identify and categorize security weaknesses in your systems and applications before they can be exploited by malicious actors.",
  },
  {
    emoji: "🛡️",
    title: "Penetration Testing",
    description: "Simulate real-world attacks to uncover exploitable vulnerabilities in your network, applications, and physical security posture.",
  },
  {
    emoji: "🚨",
    title: "Managed Security Services (MSS)",
    description: "Outsource your security operations to our experts for 24/7 monitoring, threat detection, incident response, and improvement.",
  },
  {
    emoji: "🧠",
    title: "Security Consulting & Strategy",
    description: "Develop a cybersecurity roadmap aligned with your goals — covering compliance, risk, and architecture.",
  },
  {
    emoji: "🩹",
    title: "Incident Response & Recovery",
    description: "Minimize the impact of breaches with rapid detection, containment, and recovery strategies.",
  },
  {
    emoji: "🧑‍🏫",
    title: "Security Awareness Training",
    description: "Train employees on phishing, password hygiene, and how to defend against threats effectively.",
  },
];

export function SecurityServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      {services.map((item, i) => (
        <Card
          key={i}
          className="border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="font-bold text-lg md:text-xl text-black">{item.title}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
