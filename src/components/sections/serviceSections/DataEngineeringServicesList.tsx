import React from "react";
import { Card, CardContent } from "src/components/ui/card";

const dataServices = [
  {
    emoji: "🔗",
    title: "ETL Pipelines & Data Integration",
    description: "We design and implement robust Extract, Transform, Load (ETL) pipelines to consolidate data from disparate sources, ensuring data quality and accessibility for analysis.",
  },
  {
    emoji: "☁️",
    title: "Data Warehousing & Data Lakes",
    description: "Build scalable and secure data storage solutions tailored to your needs, whether it's a structured data warehouse or a flexible data lake for big data analytics.",
  },
  {
    emoji: "📈",
    title: "Business Intelligence (BI) & Reporting",
    description: "Transform raw data into actionable insights with interactive dashboards and custom reports, empowering your team to make data-driven decisions swiftly.",
  },
  {
    emoji: "🔬",
    title: "Advanced Analytics & Statistical Modeling",
    description: "Utilize sophisticated analytical techniques and statistical models to uncover hidden patterns, forecast trends, and optimize business processes for maximum efficiency.",
  },
  {
    emoji: "🔒",
    title: "Data Governance & Security",
    description: "Establish robust data governance frameworks and implement stringent security measures to ensure data integrity, compliance, and protection against unauthorized access.",
  },
  {
    emoji: "🧭",
    title: "Data Strategy & Consulting",
    description: "Develop a comprehensive data strategy aligned with your business goals. We provide expert consulting to maximize the value of your data assets and drive innovation.",
  },
];

export function DataEngineeringServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      {dataServices.map((item, index) => (
        <Card
          key={index}
          className="border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="font-bold text-xl text-black">{item.title}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
