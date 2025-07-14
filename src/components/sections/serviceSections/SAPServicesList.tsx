import React from "react";
import { Card, CardContent } from "src/components/ui/card";

const sapServices = [
  {
    emoji: "🚀",
    title: "SAP Implementation",
    description: "End-to-end SAP implementation services tailored to your business needs, ensuring a smooth transition and optimal system setup for maximum efficiency.",
  },
  {
    emoji: "🔄",
    title: "Migration & Upgrades",
    description: "Seamless migration of your existing SAP systems to newer versions or cloud platforms, minimizing downtime and ensuring data integrity throughout the process.",
  },
  {
    emoji: "🔧",
    title: "Customization & Development",
    description: "Tailored SAP customizations, including ABAP development, Fiori apps, and integration with third-party systems to meet your specific business requirements.",
  },
  {
    emoji: "🤝",
    title: "Support & Maintenance",
    description: "Reliable ongoing support, proactive monitoring, and expert maintenance services to ensure your SAP systems run smoothly and efficiently 24/7.",
  },
  {
    emoji: "💡",
    title: "S/4HANA Transformation",
    description: "Guide your transition to SAP S/4HANA, leveraging its in-memory computing capabilities for real-time analytics and simplified processes.",
  },
  {
    emoji: "☁️",
    title: "Cloud SAP Solutions",
    description: "Implement and manage SAP solutions on leading cloud platforms, offering flexibility, scalability, and reduced infrastructure costs.",
  },
];

export function SAPServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      {sapServices.map((item, index) => (
        <Card
          key={index}
          className="border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="font-bold text-xl text-black">{item.title}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
