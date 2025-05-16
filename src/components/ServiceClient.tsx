import { notFound } from "next/navigation";
import { allServices } from "@/libs/data";

// Importing all service components
import AirConditioningInstallation from "./AirConditioningInstallation";
import AirConditioningRepair from "./AirConditioningRepair";
import AirDuctSanitizing from "./AirDuctSanitizing";
import AtticInsullation from "./AtticInsullation";
import HeatingInstallation from "./HeatingInstallation";
import HeatingRepair from "./HeatingRepair";

// Mapping service IDs to their respective components
const componentMap: Record<string, React.ComponentType> = {
  "air-conditioning-installation": AirConditioningInstallation,
  "air-conditioning-repair": AirConditioningRepair,
  "air-duct-sanitizing": AirDuctSanitizing,
  "attic-insullation": AtticInsullation,
  "heating-installation": HeatingInstallation,
  "heating-repair": HeatingRepair,
};

// Type for the params object
type Params = Promise<{ id: string }>;

// Function to generate static parameters for all services
export async function generateStaticParams() {
  return allServices.map((service) => ({
    id: service.id,
  }));
}

// Function to generate metadata for the service page
export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = allServices.find((s) => s.id === params.id);
  if (!service) return {};

  return {
    title: service.name,
  };
}

export default async function ServiceClient({ params }: { params: Params }) {
  const { id } = await params;
  const service = allServices.find((s) => s.id === id);

  if (!service) {
    notFound();
    return null;
  }

  const ServiceComponent = componentMap[service.id];
  if (!ServiceComponent) notFound();

  return (
    <div className="p-8">
      <ServiceComponent />
    </div>
  );
}
