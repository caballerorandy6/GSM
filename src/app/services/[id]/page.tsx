import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allServices } from "@/libs/data";

// Importing all service components
import AirConditioningInstallation from "@/components/air-conditioning-installation";
import AirConditioningRepair from "@/components/air-conditioning-repair";
import AirDuctSanitizing from "@/components/air-duct-sanitizing";
import AtticInsullation from "@/components/attic-insullation";
import HeatingInstallation from "@/components/heating-installation";
import HeatingRepair from "@/components/HeatingRepair";
import { JsonLdForArticle } from "@/components/JsonLdForArticle";
import { JsonLdForBreadcrumb } from "@/components/JsonLdForBreadcrumb";
import { JsonLdForFaq } from "@/components/JsonLdForFaq";
import { JsonLdForProduct } from "@/components/JsonLdForProduct";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

// Mapping service IDs to their respective components
const componentMap: Record<string, React.ComponentType> = {
  "air-conditioning-installation": AirConditioningInstallation,
  "air-conditioning-repair": AirConditioningRepair,
  "air-duct-sanitizing": AirDuctSanitizing,
  "attic-insulation": AtticInsullation,
  "heating-installation": HeatingInstallation,
  "heating-repair": HeatingRepair,
};

type Props = {
  params: Promise<{ id: string }>;
};

// Function to generate static parameters for all services
export async function generateStaticParams() {
  return allServices.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = allServices.find((s) => s.id === resolvedParams.id);
  if (!service) return {};

  const { name } = service;

  return {
    title: `${name} - GSM A/C General & Contractor Inc`,
    description: `Learn more about our ${name} services at GSM AC. We provide top-notch solutions for all your HVAC needs.`,
    openGraph: {
      title: `${name} - GSM A/C General & Contractor Inc`,
      description: `Learn more about our ${name} services at GSM A/C General & Contractor Inc.`,
      images: [
        `/service1.webp, /service2.webp, /service2.webp, /service4.webp, /service5.webp, /service6.webp`,
      ], // Assuming you have images for each service
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { id } = await params;
  const service = allServices.find((s) => s.id === id);

  if (!service) {
    notFound();
    return null;
  }

  const faqs = [
    {
      question: `What is ${service.name}?`,
      answer: `Learn more about our ${service.name} services at GSM A/C General & Contractor Inc.`,
    },
    {
      question: "How can I schedule a service?",
      answer:
        "You can schedule a service by contacting us through our website or calling our customer service number.",
    },
    {
      question: "Do you provide emergency HVAC services?",
      answer:
        "Yes, we provide emergency HVAC services to ensure your comfort and safety at all times.",
    },
  ];

  const ServiceComponent = componentMap[service.id];
  if (!ServiceComponent) notFound();
  return (
    <main className="p-8">
      <ServiceComponent />
      <FAQ faqs={faqs} />
      <Footer />
      <JsonLdForArticle
        url={`https://www.gsmactx.com/services/${service.id}`}
        headline={`About Our ${service.name} Services`}
        description={`Learn more about our ${service.name} services at GSM A/C General & Contractor Inc.`}
        image={`/logo.webp`}
        datePublished="2025-05-16"
        dateModified="2025-05-16"
        author={{
          name: "GSM A/C General & Contractor Inc",
          url: "https://www.gsmactx.com",
        }}
      />

      <JsonLdForBreadcrumb
        itemList={[
          {
            name: "Home",
            item: "https://www.gsmactx.com",
          },
          {
            name: "Services",
            item: "https://www.gsmactx.com/services",
          },
          {
            name: service.name,
            item: `https://www.gsmactx.com/services/${service.id}`,
          },
        ]}
      />

      <JsonLdForFaq
        faqs={[
          {
            question: `What is ${service.name}?`,
            answer: `Learn more about our ${service.name} services at GSM A/C General & Contractor Inc.`,
          },
          {
            question: "How can I schedule a service?",
            answer:
              "You can schedule a service by contacting us through our website or calling our customer service number.",
          },
          {
            question: "Do you provide emergency HVAC services?",
            answer:
              "Yes, we provide emergency HVAC services to ensure your comfort and safety at all times.",
          },
        ]}
      />

      <JsonLdForProduct
        name="GSM A/C General & Contractor Inc"
        description={`Professional HVAC solutions including ${service.name} in Texas.`}
        image="/logo.webp"
        // brand="GSM A/C General & Contractor Inc"
        // sku={service.id}
        // offers={{
        //   url: `https://www.gsmactx.com/services/${service.id}`,
        //   priceCurrency: "USD",
        //   price: "0.00", // Adjust as necessary
        //   itemCondition: "https://schema.org/NewCondition",
        //   availability: "https://schema.org/InStock",
        // }}
      />
    </main>
  );
}
