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

// Mapping service IDs to their respective components
const componentMap: Record<string, React.ComponentType> = {
  "air-conditioning-installation": AirConditioningInstallation,
  "air-conditioning-repair": AirConditioningRepair,
  "air-duct-sanitizing": AirDuctSanitizing,
  "attic-insullation": AtticInsullation,
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
    title: `${name} - GSM AC`,
    description: `Learn more about our ${name} services at GSM AC. We provide top-notch solutions for all your HVAC needs.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { id } = await params;
  const service = allServices.find((s) => s.id === id);

  if (!service) {
    notFound();
    return null;
  }

  const ServiceComponent = componentMap[service.id];
  if (!ServiceComponent) notFound();
  return (
    <main className="p-8">
      <ServiceComponent />
    </main>
  );
}
