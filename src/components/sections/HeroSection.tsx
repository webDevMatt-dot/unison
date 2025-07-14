import { ExploreButton } from "src/components/ui/explore";
import { ScheduleButton } from "src/components/ui/schedule";

export function HeroSection() {
  return (
    <section className="text-center pt-8 pb-6 bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="bg-white/80 backdrop-blur-sm py-4 px-6 rounded-md max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-2 leading-snug">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-600">
            AAT Business Solutions
          </span>
          <br />
          <span className="text-lg md:text-xl font-semibold block mt-1">
            Empowering Digital Excellence Through Innovation, Data, and Skills
          </span>
        </h1>
        <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-4">
          Leading provider of AI & Machine Learning solutions, Data Engineering, SAP implementations, and comprehensive Cybersecurity Services.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center">
          <div><ExploreButton /></div>
          <div><ScheduleButton /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-6 text-base font-medium">
          <div><strong className="block text-xl font-bold">7+</strong> Years Experience</div>
          <div><strong className="block text-xl font-bold">100+</strong> Projects Completed</div>
          <div><strong className="block text-xl font-bold">100+</strong> Happy Clients</div>
          <div><strong className="block text-xl font-bold">24/7</strong> Support</div>
        </div>
      </div>
    </section>
  );
}
