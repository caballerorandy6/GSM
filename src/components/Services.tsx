import { services } from "@/libs/data";
import ServiceCard from "@/components/ServiceCard";
import useSectionObserver from "@/hooks/useSectionObserver";

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
      </div>
    </section>
  );
}
