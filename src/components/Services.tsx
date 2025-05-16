"use client";

import { services } from "@/libs/data";
import ServiceCard from "@/components/ServiceCard";
import useSectionObserver from "@/hooks/useSectionObserver";
import { features } from "@/libs/data";

export default function Services() {
  const ref = useSectionObserver({ sectionName: "Services" });

  return (
    <section id="services" ref={ref} className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
          What Are Our Services?
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              imageUrl={service.src}
              link={service.link}
            />
          ))}
        </div>
        <div className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="relative flex flex-col">
              <p className="text-2xl font-semibold tracking-tight text-pretty text-white">
                {feature.name}
              </p>{" "}
              <dd className="mt-6 text-base/7 text-gray-300">
                {feature.description}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
