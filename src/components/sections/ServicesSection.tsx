import Link from "next/link";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { services } from "src/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="pt-6 pb-14 sm:pb-16 bg-white">
      <h3 className="text-center text-2xl font-bold mb-4">Our Services</h3>
      <p className="text-center mb-10 text-gray-600">
        We provide comprehensive technology solutions to help your business thrive in the digital age.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-6 max-w-6xl mx-auto">
        {services.map(({ title, items, link, emoji }, i) => (
          <Card
            key={i}
            className="border border-gray-200 hover:border-gray-400 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <CardContent className="p-6 flex flex-col h-full justify-between">
              <div style={{ animationDelay: `${i * 150}ms` }}>
                <h4 className="font-bold mb-3 text-lg">
                  {emoji} {title}
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <Link href={link} passHref>
                  <Button
                    className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 text-sm md:text-base rounded-md shadow-md hover:shadow-lg transition duration-300 w-full mt-auto"
                    variant="outline"
                  >
                    View More Info
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
