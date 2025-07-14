import React from "react";
import { Card, CardContent } from "src/components/ui/card";

const aiServices = [
  {
    emoji: "⚙️",
    title: "Custom AI Model Development",
    description: "We design and build bespoke AI models tailored to your unique business problems, from predictive analytics to advanced pattern recognition.",
  },
  {
    emoji: "📊",
    title: "Predictive Analytics & Forecasting",
    description: "Use historical data to predict future trends. Perfect for demand forecasting, risk assessment, and planning.",
  },
  {
    emoji: "🗣️",
    title: "Natural Language Processing (NLP)",
    description: "Boost support, analyze feedback, and automate content with smart language models.",
  },
  {
    emoji: "👁️",
    title: "Computer Vision Applications",
    description: "Detect patterns, automate inspection, and enable visual insights with AI that sees like humans.",
  },
  {
    emoji: "📈",
    title: "AI Strategy Consulting",
    description: "Let’s map out your AI path. We'll guide you from vision to execution with clear ROI.",
  },
  {
    emoji: "🎓",
    title: "Machine Learning Training Programs",
    description: "Train your team with hands-on sessions that demystify ML and empower smart decisions.",
  },
];

export function AIMLServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      {aiServices.map((item, i) => (
        <Card
          key={i}
          className="border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="font-bold text-lg md:text-xl text-black">
                {item.title}
              </h3>
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
